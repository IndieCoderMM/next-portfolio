"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import CustomButton from "@/components/CustomButton";
import { BellIcon, MailIcon, UserIcon, WriteIcon } from "@/components/Icons";
import StateButton from "./StateButton";
import Field from "./Field";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const ContactForm = () => {
  const [current, setCurrent] = useState("name");
  const [status, setStatus] = useState("idle");
  const [notification, setNotification] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (name, value) => {
    if (notification) setNotification("");

    // Check if the input is empty
    if (value.trim().length === 0) {
      setForm({ ...form, [name]: "" });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
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
            setNotification("Awesome! I've got your message.");
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
              <UserIcon />
            </div>
            <p className="text-xs md:text-sm">{form.name}</p>
          </StateButton>
        )}
        {form.email && (
          <StateButton handleClick={() => setCurrent("email")}>
            <div className="flexx h-7 w-7 items-center justify-center rounded-md  text-primary dark:text-light">
              <MailIcon />
            </div>
            <p className="text-xs md:text-sm">{form.email}</p>
          </StateButton>
        )}
        {notification && (
          <StateButton handleClick={() => setNotification("")}>
            <div className="flexx h-7 w-7 items-center justify-center rounded-md  text-primary dark:text-light">
              <BellIcon />
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
            icon={UserIcon}
          />
        )}
        {current === "email" && (
          <Field
            name="email"
            value={form.email}
            handleChange={handleChange}
            placeholder="Enter your email address"
            icon={MailIcon}
          />
        )}
        {current === "message" && (
          <Field
            name="message"
            value={form.message}
            handleChange={handleChange}
            placeholder="Write your awesome message here"
            icon={WriteIcon}
          />
        )}
        <div className="mt-10">
          <CustomButton type="submit">
            <span
              className={`w-full text-xl font-semibold uppercase text-light ${
                status === "submitting" ? "animate-pulse" : ""
              }`}
            >
              {current !== "message"
                ? "Next"
                : status === "submitting"
                ? "Sending..."
                : "Send"}
            </span>
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
