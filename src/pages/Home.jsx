import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { Badge, Button, Card, Input } from "../components/UI";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Clay & Calm — Handmade Pottery</title>
        <meta name="description" content="Calm, artsy, handmade pottery. Quiet luxury pieces made in a cozy studio — bowls, mugs, vases, and one-of-a-kind drops." />
      </Helmet>

      <section className="bg-linen">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              <Badge>Earthy tones</Badge>
              <Badge>Studio-made</Badge>
              <Badge>Quiet luxury</Badge>
            </div>

            <h1 className="mt-6 font-serif text-4xl tracking-wide md:text-6xl">
              Handmade pottery that makes the room feel softer.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Each piece is thrown, trimmed, and glazed by hand—so the tiny variations aren’t flaws. They’re proof.
              Calm, minimal, and made to be lived with.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="inline-flex items-center justify-center rounded-full bg-turquoise px-8 py-3 text-white shadow-soft transition hover:bg-[#689089]">
                Shop Now
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-white/70 px-8 py-3 text-ink shadow-sm ring-1 ring-black/5 transition hover:bg-white">
                Meet the artist
              </Link>
            </div>

            <div className="mt-8 rounded-2xl bg-white/50 p-4 ring-1 ring-black/5">
              <p className="text-sm text-muted">
                <span className="font-medium text-ink">Care & shipping:</span> Every order is packed like it’s precious.
                Care card included. Calm delivery energy.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl bg-turquoise/15 blur-[1px]" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-clay/20 blur-[1px]" aria-hidden="true" />

            <div className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5">
              <div className="relative aspect-[5/6]">
                <img
                  src={featured[0].images[1]}
                  alt="A calm pottery studio table with handmade ceramic pieces"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-sand/85 p-4 backdrop-blur-sm ring-1 ring-black/5">
                  <p className="text-sm text-muted">New drops sell out fast because many items are one-of-one.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {featured.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 transition hover:shadow-md">
                  <div className="aspect-square">
                    <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl tracking-wide md:text-4xl">Featured pottery</h2>
            <p className="mt-2 text-sm text-muted md:text-base">Small-batch pieces. Big texture energy.</p>
          </div>
          <Link to="/shop" className="text-sm text-turquoise hover:underline">View all</Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Email signup */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-linen p-6 ring-1 ring-black/5 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_420px] md:items-center">
            <div>
              <h3 className="font-serif text-2xl tracking-wide">Get first dibs on new drops</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">No spam. Just calm studio updates and small-batch releases.</p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Signup placeholder. Connect to Mailchimp/Klaviyo/ConvertKit later.");
              }}
            >
              <Input type="email" required placeholder="you@domain.com" />
              <Button className="bg-turquoise text-white hover:bg-[#689089]">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
