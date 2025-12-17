import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useCart } from "../state/cart";
import { formatMoney } from "../lib/money";
import { Button, Card, Input, Select } from "../components/UI";

/**
 * Checkout is intentionally calm + distraction-free.
 * Payments plug-in point:
 * - Stripe Checkout: call your backend to create a session, then redirect.
 * - PayPal: render PayPal Buttons here (client-id required).
 */
export default function Checkout() {
  const cart = useCart();
  const [payMethod, setPayMethod] = useState("stripe");

  async function handleStripe() {
    // TODO: Create a backend endpoint that returns a Stripe Checkout Session URL.
    // Example request: POST /api/create-checkout-session { items: cart.lines }
    alert("Stripe placeholder. Add a backend endpoint to create a Checkout Session.");
  }

  async function handlePayPal() {
    // TODO: Integrate PayPal Buttons or Orders API.
    alert("PayPal placeholder. Add PayPal Buttons here.");
  }

  return (
    <>
      <Helmet>
        <title>Checkout — Clay & Calm</title>
        <meta name="description" content="Checkout — calm, minimal, secure." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/cart" className="text-sm text-muted hover:text-turquoise">← Back to cart</Link>
          <p className="text-sm text-muted">Secure checkout</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_340px]">
          <Card className="p-6">
            <h1 className="font-serif text-3xl tracking-wide">Checkout</h1>
            <p className="mt-2 text-sm text-muted">Smooth, minimal flow. No chaos.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Input placeholder="Full name" required />
              <Input placeholder="Email" type="email" required />
              <Input placeholder="Address" required className="sm:col-span-2" />
              <div className="grid gap-4 sm:grid-cols-3 sm:col-span-2">
                <Input placeholder="City" required />
                <Input placeholder="State/Region" required />
                <Input placeholder="ZIP" required />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-ink">Payment method</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white/70 p-4 transition hover:bg-white">
                  <input type="radio" name="pay" value="stripe" checked={payMethod === "stripe"} onChange={() => setPayMethod("stripe")} />
                  <div>
                    <p className="text-sm font-medium">Stripe</p>
                    <p className="text-xs text-muted">Card payments via Checkout Session</p>
                  </div>
                </label>
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white/70 p-4 transition hover:bg-white">
                  <input type="radio" name="pay" value="paypal" checked={payMethod === "paypal"} onChange={() => setPayMethod("paypal")} />
                  <div>
                    <p className="text-sm font-medium">PayPal</p>
                    <p className="text-xs text-muted">PayPal buttons / orders API</p>
                  </div>
                </label>
              </div>
            </div>

            <Button
              className="mt-8 w-full bg-turquoise text-white hover:bg-[#689089]"
              onClick={payMethod === "stripe" ? handleStripe : handlePayPal}
              disabled={cart.lines.length === 0}
            >
              {payMethod === "stripe" ? "Pay with Stripe" : "Pay with PayPal"}
            </Button>

            <p className="mt-3 text-xs text-muted">
              This demo does not process real payments yet. Wire your backend when you're ready.
            </p>
          </Card>

          <Card className="p-5 h-fit">
            <p className="font-serif text-lg">Order summary</p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              {cart.lines.map((l) => (
                <div key={l.id} className="flex items-start justify-between gap-3">
                  <span className="max-w-[70%]">{l.qty} × {l.product.name}</span>
                  <span>{formatMoney(l.lineTotal)}</span>
                </div>
              ))}
              <div className="my-3 h-px bg-border" />
              <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatMoney(cart.subtotal)}</span></div>
              <div className="flex items-center justify-between"><span>Shipping</span><span>{formatMoney(cart.shipping)}</span></div>
              <div className="flex items-center justify-between"><span>Tax</span><span>{formatMoney(cart.tax)}</span></div>
              <div className="my-3 h-px bg-border" />
              <div className="flex items-center justify-between text-ink"><span className="font-medium">Total</span><span className="font-medium">{formatMoney(cart.total)}</span></div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
