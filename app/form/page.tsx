"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import FormThree from "@/components/FormThree";

export default function Form() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    toast.loading("Submitting form...");
    await fetch("https://oleoa.app.n8n.cloud/webhook/neptune", {
      method: "POST",
      body: JSON.stringify({ name, size, email, phone, company, message }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Form submitted successfully");
      } else {
        toast.error("Failed to submit form");
      }
    });
  };

  return (
    <main className="relative flex justify-center items-center w-screen h-screen bg-deepest-blue">
      <FormThree />
      <div className="relative z-10 flex flex-col gap-4 w-1/2">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-gray">
          We are a team of experts in the field of AI and web development.
          <br />
          We are here to help you with your needs.
        </p>
        <FieldSet>
          <FieldGroup className="flex flex-col gap-4 [&>div>input]:bg-deepest-blue [&>div>textarea]:bg-deepest-blue">
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="What is your name?"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="company">Company</FieldLabel>
              <Input
                id="company"
                type="text"
                name="company"
                placeholder="What is the name of your company?"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="size">Company Size</FieldLabel>
              <Input
                id="size"
                type="number"
                name="size"
                placeholder="How many employees does your company have?"
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="What is the preferred email for our communication?"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="What is the preferred phone number for our communication?"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="What is the problem you are facing?"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button type="submit" onClick={handleSubmit} variant="secondary">
          Submit
        </Button>
      </div>
    </main>
  );
}
