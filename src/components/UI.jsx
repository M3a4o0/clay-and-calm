import React from "react";
import { cn } from "../lib/cn";

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2 text-sm shadow-sm transition active:scale-[0.99]",
        "focus:outline-none focus:ring-2 focus:ring-turquoise/60 focus:ring-offset-2 focus:ring-offset-sand",
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/80 shadow-soft ring-1 ring-black/5 backdrop-blur-sm",
        "transition hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}

export function Input(props) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm outline-none",
        "focus:ring-2 focus:ring-turquoise/60",
        props.className
      )}
    />
  );
}

export function Select(props) {
  return (
    <select
      {...props}
      className={cn(
        "w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm outline-none",
        "focus:ring-2 focus:ring-turquoise/60",
        props.className
      )}
    />
  );
}

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm outline-none",
        "focus:ring-2 focus:ring-turquoise/60",
        props.className
      )}
    />
  );
}
