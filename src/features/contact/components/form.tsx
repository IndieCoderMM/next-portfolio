"use client";

import { PrimaryButton } from "@/components/common";
import emailjs from "@emailjs/browser";
import {
  IconArrowLeft,
  IconBellRinging,
  IconMail,
  IconSend,
  IconUser,
  IconWritingSign,
} from "@tabler/icons-react";
import { useState } from "react";
import Field from "./field";
import StateButton from "./state-button";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

const ContactForm = () => {
  const [current, setCurrent] = useState("name");
  const [status, setStatus] = useState("idle");
  const [notification, setNotification] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    if (notification) setNotification("");

    // Check if the input is empty
    if (value.trim().length === 0) {
      setForm({ ...form, [name]: "" });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (current === "name") {
      if (form.name.length === 0) {
        setNotification("Your Name, please!");
        return;
      }
      setCurrent("email");
    } else if (current === "email") {
      if (form.email.length === 0) {
        setNotification("I need your email to contact back!");
        return;
      }
      setCurrent("message");
    } else {
      if (form.message.length === 0) {
        setNotification("Message missing! Let's chat.");
        return;
      }
      setStatus("submitting");

      // Send email
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            ...form,
            from_name: form.name,
          },
          USER_ID,
        )
        .then(
          (result) => {
            setStatus("success");
            setForm((form) => ({ ...form, message: "" }));
            setNotification("Great! I've got your message.");
          },
          (error) => {
            setStatus("error");
            setNotification("Something went wrong!");
            console.log(error.text);
          },
        );
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex min-h-[100px] flex-wrap items-center gap-2 overflow-hidden">
        {form.name && (
          <StateButton handleClick={() => setCurrent("name")}>
            <div className="flex h-7 w-7 items-center justify-center rounded-md text-primary dark:text-light">
              <IconUser />
            </div>
            <p className="text-xs md:text-sm">{form.name}</p>
          </StateButton>
        )}
        {form.email && (
          <StateButton handleClick={() => setCurrent("email")}>
            <div className="flexx h-7 w-7 items-center justify-center rounded-md text-primary dark:text-light">
              <IconMail />
            </div>
            <p className="text-xs md:text-sm">{form.email}</p>
          </StateButton>
        )}
        {notification && (
          <StateButton handleClick={() => setNotification("")}>
            <div className="flexx h-7 w-7 items-center justify-center rounded-md text-primary dark:text-light">
              <IconBellRinging />
            </div>
            <p className="text-xs md:text-sm">{notification}</p>
          </StateButton>
        )}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        {current === "name" && (
          <Field
            name="name"
            value={form.name}
            handleChange={handleChange}
            placeholder="Let me know your name"
            icon={IconUser}
          />
        )}
        {current === "email" && (
          <Field
            name="email"
            value={form.email}
            handleChange={handleChange}
            placeholder="Enter your email address"
            icon={IconMail}
          />
        )}
        {current === "message" && (
          <Field
            name="message"
            value={form.message}
            handleChange={handleChange}
            placeholder="Write your awesome message here"
            icon={IconWritingSign}
          />
        )}
        <div className="mt-10 flex justify-end">
          <PrimaryButton type="submit">
            <div className="flex w-full items-center justify-center gap-1 text-lg text-white">
              <span
                className={`text-xl font-semibold uppercase text-white ${
                  status === "submitting" ? "animate-pulse" : ""
                }`}
              >
                {current !== "message"
                  ? "Next"
                  : status === "submitting"
                    ? "Sending..."
                    : "Send"}
              </span>
              <div className="h-8 w-8 translate-y-1">
                {current !== "message" ? (
                  <IconArrowLeft className="rotate-180" />
                ) : (
                  <IconSend />
                )}
              </div>
            </div>
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
