import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge, Button } from "./UI";
import { formatMoney } from "../lib/money";

export function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            {product.unique && <Badge>Each piece is unique</Badge>}
            {product.inventory <= 1 && <Badge>Limited</Badge>}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-serif tracking-wide">{product.name}</h3>
              <p className="mt-1 text-sm text-muted">{product.collection} · {product.size}</p>
            </div>
            <p className="text-sm text-ink">{formatMoney(product.price)}</p>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Button
          as="button"
          className="w-full bg-turquoise text-white hover:bg-[#689089]"
          onClick={(e) => {
            e.preventDefault();
            // handled by parent on product page; keep cards clean
            window.location.href = `/product/${product.id}`;
          }}
        >
          View details
        </Button>
      </div>
    </Card>
  );
}
