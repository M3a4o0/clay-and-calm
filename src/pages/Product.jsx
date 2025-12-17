import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { Badge, Button, Card } from "../components/UI";
import { formatMoney } from "../lib/money";
import { useCart } from "../state/cart";

export default function Product() {
  const { id } = useParams();
  const cart = useCart();
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const [active, setActive] = useState(0);

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-muted">Product not found.</p>
        <Link to="/shop" className="text-turquoise hover:underline">Back to shop</Link>
      </section>
    );
  }

  const canAdd = product.inventory > 0;

  return (
    <>
      <Helmet>
        <title>{product.name} — Clay & Calm</title>
        <meta name="description" content={`${product.name}. ${product.description}`} />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/shop" className="text-sm text-muted hover:text-turquoise">← Back to shop</Link>
          {product.unique && <Badge>Each piece is unique</Badge>}
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/5]">
                <img
                  src={product.images[active]}
                  alt={`${product.name} image ${active + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Card>

            <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "h-16 w-16 flex-none overflow-hidden rounded-xl ring-1 ring-black/10 " +
                    (i === active ? "ring-2 ring-turquoise" : "opacity-80 hover:opacity-100")
                  }
                  aria-label={`Select image ${i + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl tracking-wide md:text-4xl">{product.name}</h1>
            <p className="mt-2 text-sm text-muted">{product.collection} · Size {product.size}</p>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-2xl font-serif">{formatMoney(product.price)}</p>
              <Badge>{product.inventory <= 1 ? "One-of-a-kind" : `${product.inventory} in studio`}</Badge>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>

            <div className="mt-6 space-y-3 text-sm text-muted">
              <div>
                <p className="font-medium text-ink">Dimensions</p>
                <p>{product.dimensions}</p>
              </div>
              <div>
                <p className="font-medium text-ink">Care</p>
                <p>{product.care}</p>
              </div>
              <div>
                <p className="font-medium text-ink">Shipping</p>
                <p>{product.shipping}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className={"flex-1 bg-turquoise text-white hover:bg-[#689089] " + (!canAdd ? "opacity-50 cursor-not-allowed" : "")}
                onClick={() => canAdd && cart.add(product.id)}
                disabled={!canAdd}
              >
                {canAdd ? "Add to Cart" : "Sold out"}
              </Button>
              <Link to="/cart" className="inline-flex flex-1 items-center justify-center rounded-xl bg-white/70 px-4 py-2 text-sm shadow-sm ring-1 ring-black/5 transition hover:bg-white">
                Go to Cart
              </Link>
            </div>

            <div className="mt-8 rounded-2xl bg-white/60 p-4 ring-1 ring-black/5">
              <p className="text-sm text-muted">
                <span className="font-medium text-ink">Heads up:</span> Handmade means small variations. That’s the point.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
