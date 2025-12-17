import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Button, Input, Textarea } from "../components/UI";
import { IconFacebook, IconInstagram, IconMail } from "../components/Icons";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Clay & Calm</title>
        <meta name="description" content="Contact Clay & Calm: custom requests, wholesale inquiries, and studio questions." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl tracking-wide md:text-4xl">Contact</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              Custom glaze? Matching set? Wholesale? Send a message. Keep it calm.
            </p>

            <div className="mt-6 flex gap-4 text-muted">
              <a href="#" onClick={(e)=>{e.preventDefault(); alert("Replace with your real Instagram link.");}} className="rounded-xl p-2 transition hover:bg-white/60" aria-label="Instagram">
                <IconInstagram className="h-5 w-5" />
              </a>
              <a href="#" onClick={(e)=>{e.preventDefault(); alert("Replace with your real Facebook link.");}} className="rounded-xl p-2 transition hover:bg-white/60" aria-label="Facebook">
                <IconFacebook className="h-5 w-5" />
              </a>
              <a href="mailto:hello@clayandcalm.com" className="rounded-xl p-2 transition hover:bg-white/60" aria-label="Email">
                <IconMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Card className="p-6">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form placeholder. Wire to a backend or a form service (Netlify Forms) later.");
              }}
            >
              <Input type="text" required placeholder="Your name" />
              <Input type="email" required placeholder="Your email" />
              <Textarea required placeholder="Your message" rows={6} />
              <Button className="bg-turquoise text-white hover:bg-[#689089]">Send message</Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
