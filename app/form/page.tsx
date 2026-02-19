"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Form() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    toast.loading("A enviar formulário...");
    try {
      const res = await fetch("https://oleoa.app.n8n.cloud/webhook/neptune", {
        method: "POST",
        body: JSON.stringify({ name, size, email, phone, company, message }),
      });

      if (res.ok) {
        toast.success("Formulário enviado com sucesso");
      } else {
        toast.error("Falha ao enviar formulário");
      }
    } catch (error) {
      toast.error("Falha ao enviar formulário");
    }
  };

  return (
    <main className="relative flex justify-center items-center w-screen pb-12 pt-24">

      <div className="relative z-10 flex flex-col gap-4 w-1/2 py-4">
        <h1 className="text-2xl font-bold">Contacte-nos</h1>
        <p className="text-gray">
          Somos uma equipa de especialistas na área de IA e desenvolvimento web.
          <br />
          Estamos aqui para ajudá-lo com as suas necessidades.
        </p>
        <FieldSet>
          <FieldGroup className="flex flex-col gap-4 [&>div>input]:border-yellow [&>div>textarea]:border-yellow">
            <Field>
              <FieldLabel htmlFor="name">Nome</FieldLabel>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Qual é o seu nome?"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="company">Empresa</FieldLabel>
              <Input
                id="company"
                type="text"
                name="company"
                placeholder="Qual é o nome da sua empresa?"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="size">Tamanho da Empresa</FieldLabel>
              <Input
                id="size"
                type="number"
                name="size"
                placeholder="Quantos funcionários tem a sua empresa?"
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
                placeholder="Qual é o email preferido para a nossa comunicação?"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Telefone</FieldLabel>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Qual é o número de telefone preferido para a nossa comunicação?"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Mensagem</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Qual é o problema que está a enfrentar?"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button type="submit" onClick={handleSubmit} className="bg-yellow hover:bg-yellow/80">
          Enviar
        </Button>
      </div>
    </main>
  );
}
