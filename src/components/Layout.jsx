import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconCart } from "./Icons";
import { useCart } from "../state/cart";
import { cn } from "../lib/cn";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "transition hover:text-turquoise",
          isActive ? "text-ink" : "text-muted"
        )
      }
    >
      {children}
    </NavLink>
  );
}

export function Layout({ children }) {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-sand text-ink">
      <header className="sticky top-0 z-50 border-b border-border bg-sand/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-turquoise/15 ring-1 ring-black/5" aria-hidden="true" />
            <div>
              <p className="text-lg font-serif tracking-wide">Clay & Calm</p>
              <p className="text-xs text-muted">Handmade studio pottery</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <NavItem to="/shop">Shop</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>

            <Link
              to="/cart"
              className="relative rounded-xl p-2 transition hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-turquoise/60"
              aria-label="Open cart"
            >
              <IconCart className="h-5 w-5" />
              {cart.count > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-turquoise px-1 text-[11px] font-medium text-white">
                  {cart.count}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Clay & Calm. All rights reserved.</p>
          <p>Fast loading, image-optimized, SEO-friendly structure.</p>
        </div>
      </footer>
    </div>
  );
}
