/**
 * Data source: src/data/products.json (editable via /admin with Decap CMS)
 * Inventory: set inventory=1 + unique=true for one-of-a-kind pieces.
 */
import data from "./products.json";

export const PRODUCTS = data.products;

export const COLLECTIONS = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.collection)))];
export const SIZES = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.size)))];
