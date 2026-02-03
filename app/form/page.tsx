"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import FormThree from "@/components/FormThree";

export default function Form() {
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    toast.loading("Submitting form...");
    await fetch("https://oleoa.app.n8n.cloud/webhook/neptune", {
      method: "POST",
      body: JSON.stringify({ companyName, companySize, companyEmail, message }),
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
              <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
              <Input
                id="companyName"
                type="text"
                name="companyName"
                placeholder="What is the name of your company?"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="companySize">Company Size</FieldLabel>
              <Input
                id="companySize"
                type="number"
                name="companySize"
                placeholder="How many employees do you have?"
                required
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="companyEmail">Company Email</FieldLabel>
              <Input
                id="companyEmail"
                type="email"
                name="companyEmail"
                placeholder="What is the preferred email for our communication?"
                required
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                autoComplete="email"
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
