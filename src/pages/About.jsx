import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "../components/UI";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Clay & Calm</title>
        <meta name="description" content="Story of the artist, process, and handmade authenticity behind Clay & Calm." />
      </Helmet>

      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="font-serif text-3xl tracking-wide md:text-4xl">Made slowly, on purpose</h1>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                Clay & Calm began in a small studio where time moves differently—wheel spinning, hands dusty, music low.
                Every piece is thrown, trimmed, bisque-fired, glazed, and fired again. No shortcuts. That’s the whole point.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Card className="p-4">
                  <p className="font-medium">Handmade authenticity</p>
                  <p className="mt-1 text-sm text-muted">Subtle variation = real human hands.</p>
                </Card>
                <Card className="p-4">
                  <p className="font-medium">Small-batch drops</p>
                  <p className="mt-1 text-sm text-muted">A few pieces at a time, done right.</p>
                </Card>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5">
              <div className="relative aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80"
                  alt="Hands shaping clay on a pottery wheel"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
