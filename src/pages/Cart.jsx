import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useCart } from "../state/cart";
import { formatMoney } from "../lib/money";
import { Button, Card, Input } from "../components/UI";

export default function Cart() {
  const cart = useCart();

  return (
    <>
      <Helmet>
        <title>Cart — Clay & Calm</title>
        <meta name="description" content="Your cart — calm checkout flow." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <h1 className="font-serif text-3xl tracking-wide md:text-4xl">Your Cart</h1>
        <p className="mt-2 text-sm text-muted">Distraction-free checkout energy.</p>

        {cart.lines.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white/60 p-10 ring-1 ring-black/5 text-center">
            <p className="text-sm text-muted">Your cart is empty.</p>
            <Link to="/shop" className="mt-4 inline-flex items-center justify-center rounded-xl bg-turquoise px-5 py-2 text-sm text-white shadow-soft transition hover:bg-[#689089]">
              Shop pottery
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              {cart.lines.map((l) => (
                <Card key={l.id} className="p-4">
                  <div className="flex gap-4">
                    <div className="h-24 w-24 flex-none overflow-hidden rounded-2xl ring-1 ring-black/10">
                      <img src={l.product.images[0]} alt={l.product.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-serif tracking-wide">{l.product.name}</p>
                          <p className="mt-1 text-xs text-muted">{l.product.collection} · {l.product.size}</p>
                        </div>
                        <p className="text-sm">{formatMoney(l.lineTotal)}</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted">Qty</span>
                          <Input
                            type="number"
                            min={1}
                            max={l.product.inventory}
                            value={l.qty}
                            onChange={(e) => cart.setQty(l.id, e.target.value)}
                            className="w-20 py-2"
                          />
                        </div>
                        <button className="text-xs text-turquoise hover:underline" onClick={() => cart.remove(l.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-5 h-fit">
              <p className="font-serif text-lg">Summary</p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatMoney(cart.subtotal)}</span></div>
                <div className="flex items-center justify-between"><span>Shipping</span><span>{formatMoney(cart.shipping)}</span></div>
                <div className="flex items-center justify-between"><span>Tax</span><span>{formatMoney(cart.tax)}</span></div>
                <div className="my-3 h-px bg-border" />
                <div className="flex items-center justify-between text-ink"><span className="font-medium">Total</span><span className="font-medium">{formatMoney(cart.total)}</span></div>
              </div>

              <Link to="/checkout" className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-turquoise px-5 py-2 text-sm text-white shadow-soft transition hover:bg-[#689089]">
                Checkout
              </Link>

              <p className="mt-3 text-xs text-muted">
                Payment is “ready” — wire Stripe/PayPal on the Checkout page.
              </p>
            </Card>
          </div>
        )}
      </section>
    </>
  );
}
