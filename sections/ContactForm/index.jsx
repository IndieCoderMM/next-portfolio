"use client";

import CustomButton from "@/components/CustomButton";
import { useRef, useState } from "react";
import StateButton from "./StateButton";
import Field from "./Field";
import { BellIcon, MailIcon, UserIcon, WriteIcon } from "@/components/Icons";

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
        setNotification("Name cannot be empty");
        return;
      }
      setCurrent("email");
    } else if (current === "email") {
      if (form.email.length === 0) {
        setNotification("Email cannot be empty");
        return;
      }
      setCurrent("message");
    } else {
      // TODO Submit form
      if (form.message.length === 0) {
        setNotification("Message cannot be empty");
        return;
      }
      console.log(form);
      setStatus("submitting");
      setTimeout(() => {
        setStatus("success");
        setForm((form) => ({ ...form, message: "" }));
        setNotification("Message sent successfully!");
      }, 2000);
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
            <p className="text-sm">{form.name}</p>
          </StateButton>
        )}
        {form.email && (
          <StateButton handleClick={() => setCurrent("email")}>
            <div className="flexx h-7 w-7 items-center justify-center rounded-md  text-primary dark:text-light">
              <MailIcon />
            </div>
            <p className="text-sm">{form.email}</p>
          </StateButton>
        )}
        {notification && (
          <StateButton handleClick={() => setNotification("")}>
            <div className="flexx h-7 w-7 items-center justify-center rounded-md  text-primary dark:text-light">
              <BellIcon />
            </div>
            <p className="text-sm">{notification}</p>
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
            <span className="w-full text-xl font-semibold uppercase text-light">
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
