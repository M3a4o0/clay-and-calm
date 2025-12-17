import React, { createContext, useContext, useMemo, useReducer } from "react";
import { PRODUCTS } from "../data/products";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Cart items stored as { [productId]: qty }.
 * Inventory-safe: cannot exceed product.inventory.
 */
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const p = PRODUCTS.find(x => x.id === action.id);
      if (!p || p.inventory <= 0) return state;
      const current = state.items[action.id] ?? 0;
      const next = clamp(current + 1, 0, p.inventory);
      return { ...state, items: { ...state.items, [action.id]: next } };
    }
    case "SET_QTY": {
      const p = PRODUCTS.find(x => x.id === action.id);
      if (!p) return state;
      const qty = clamp(Number(action.qty) || 0, 0, p.inventory);
      const next = { ...state.items };
      if (qty <= 0) delete next[action.id];
      else next[action.id] = qty;
      return { ...state, items: next };
    }
    case "REMOVE": {
      const next = { ...state.items };
      delete next[action.id];
      return { ...state, items: next };
    }
    case "CLEAR":
      return { ...state, items: {} };
    default:
      return state;
  }
}

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: {} });

  const derived = useMemo(() => {
    const lines = Object.entries(state.items).map(([id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return null;
      return { id, qty, product, lineTotal: product.price * qty };
    }).filter(Boolean);

    const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
    const shipping = subtotal > 0 ? 9 : 0;     // placeholder rule
    const tax = subtotal > 0 ? subtotal * 0.05 : 0; // placeholder rule
    const total = subtotal + shipping + tax;
    const count = Object.values(state.items).reduce((s, n) => s + n, 0);

    return { lines, subtotal, shipping, tax, total, count };
  }, [state.items]);

  const api = useMemo(() => ({
    state,
    ...derived,
    add: (id) => dispatch({ type: "ADD", id }),
    setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    clear: () => dispatch({ type: "CLEAR" }),
  }), [state, derived]);

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const v = useContext(CartCtx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}
