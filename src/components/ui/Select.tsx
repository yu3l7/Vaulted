"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/components/icons";
import { cn } from "@/lib/cn";

export type SelectOption = {
  value: string;
  label: string;
  description?: string;
};

type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
};

/**
 * Custom select — matches the cyber-arcade terminal aesthetic.
 *
 * - Trigger button styled like an input field (border + mono font)
 * - Dropdown panel styled as a terminal menu (border + list rows)
 * - Native <select> is rendered invisibly for accessibility / form
 *   submission; this component controls its value via a hidden ref.
 * - Closes on outside click + Escape.
 */
export function Select({ id, value, onChange, options, className }: Props) {
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(() =>
    Math.max(0, options.findIndex((o) => o.value === value)),
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = options.find((o) => o.value === value) ?? options[0];

  // Outside click + Escape close
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Keyboard nav within dropdown
  const onKeyDownTrigger = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setFocusIndex(Math.max(0, options.findIndex((o) => o.value === value)));
    }
  };

  const onKeyDownList = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const opt = options[focusIndex];
      if (opt) {
        onChange(opt.value);
        setOpen(false);
      }
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      {/* Hidden native select for accessibility + form submission */}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
        aria-hidden={open}
        tabIndex={-1}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDownTrigger}
        className={cn(
          "mono flex w-full items-center justify-between border bg-bg px-4 py-3 text-left text-sm uppercase tracking-wider transition-colors",
          open
            ? "border-accent text-fg"
            : "border-border-bright text-fg hover:border-fg/40",
        )}
      >
        <span className="truncate">{selected?.label ?? "select"}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-accent transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          ref={listRef}
          id={`${id}-list`}
          role="listbox"
          aria-activedescendant={`${id}-opt-${focusIndex}`}
          onKeyDown={onKeyDownList}
          className="mono absolute left-0 right-0 top-[calc(100%+4px)] z-20 max-h-72 overflow-y-auto border border-border-bright bg-bg shadow-[0_8px_24px_rgb(0_0_0/0.45)]"
        >
          {options.map((o, i) => {
            const isSelected = o.value === value;
            const isFocused = i === focusIndex;
            return (
              <li
                key={o.value}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                onMouseEnter={() => setFocusIndex(i)}
                className={cn(
                  "flex cursor-pointer items-center justify-between border-b border-border px-4 py-2.5 text-xs uppercase tracking-wider transition-colors last:border-b-0",
                  isFocused && "bg-surface text-accent",
                  !isFocused && "text-muted hover:bg-surface hover:text-fg",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-block size-1.5",
                      isSelected ? "bg-accent" : "bg-border-bright",
                    )}
                  />
                  {o.label}
                </span>
                {o.description && (
                  <span className="text-[10px] normal-case text-muted">
                    {o.description}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
