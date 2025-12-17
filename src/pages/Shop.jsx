import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PRODUCTS, COLLECTIONS, SIZES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Select } from "../components/UI";

export default function Shop() {
  const [price, setPrice] = useState("All");
  const [size, setSize] = useState("All");
  const [collection, setCollection] = useState("All");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const okSize = size === "All" || p.size === size;
      const okCollection = collection === "All" || p.collection === collection;

      const okPrice =
        price === "All" ||
        (price === "Under60" && p.price < 60) ||
        (price === "60to100" && p.price >= 60 && p.price <= 100) ||
        (price === "100plus" && p.price > 100);

      return okSize && okCollection && okPrice;
    });
  }, [price, size, collection]);

  return (
    <>
      <Helmet>
        <title>Shop — Clay & Calm</title>
        <meta name="description" content="Shop handmade pottery: bowls, mugs, vases. Calm earthy tones, soft turquoise accents, quiet luxury studio-made pieces." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-serif text-3xl tracking-wide md:text-4xl">Shop</h1>
            <p className="mt-2 text-sm text-muted md:text-base">Filters + clean product cards. Minimal, not soulless.</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <Select value={price} onChange={(e) => setPrice(e.target.value)} className="sm:w-44">
              <option value="All">Price: Any</option>
              <option value="Under60">Under $60</option>
              <option value="60to100">$60 – $100</option>
              <option value="100plus">$100+</option>
            </Select>
            <Select value={size} onChange={(e) => setSize(e.target.value)} className="sm:w-36">
              {SIZES.map(s => <option key={s} value={s}>{s === "All" ? "Size: Any" : s}</option>)}
            </Select>
            <Select value={collection} onChange={(e) => setCollection(e.target.value)} className="sm:w-64">
              {COLLECTIONS.map(c => <option key={c} value={c}>{c === "All" ? "Collection: Any" : c}</option>)}
            </Select>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
