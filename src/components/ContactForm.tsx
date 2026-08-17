"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Field from "./Field";
import Button from "./Button";

type SubmitState = "idle" | "sending" | "sent";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmitState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");

    if (!formRef.current) {
      setState("idle");
      return;
    }

    const { NEXT_PUBLIC_EMAILJS_SERVICE_ID: serviceId, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: templateId, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: publicKey } = process.env;
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS Error: missing NEXT_PUBLIC_EMAILJS_* environment variables");
      setState("idle");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setState("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setState("idle");
    }
  };

  const label = state === "sending" ? "Sending…" : state === "sent" ? "Sent — I'll be in touch" : "Send Message";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex w-full flex-col gap-[22px]">
      <Field
        label="Your name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="What's your first and last name?"
        required
      />
      <Field
        label="Your Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="What's your email address?"
        required
      />
      <Field
        label="Your Message"
        name="message"
        rows={5}
        value={form.message}
        onChange={handleChange}
        placeholder="How can I help you?"
        required
      />
      <Button type="submit" full disabled={state === "sending"}>
        {label}
      </Button>
    </form>
  );
};

export default ContactForm;
