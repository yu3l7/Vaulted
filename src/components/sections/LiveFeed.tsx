"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type ActivityType = "order" | "vouch" | "delivery" | "support";

type ActivityTemplate = {
  type: ActivityType;
  user: string;
  product: string;
  baseOffset: number; // age in seconds at creation
};

type Activity = ActivityTemplate & {
  _id: number;
  _createdAt: number;
};

const MOCK_ACTIVITY: ActivityTemplate[] = [
  { type: "order", user: "khaled.dxb", product: "Stacked Account", baseOffset: 12 },
  { type: "vouch", user: "maria.gg", product: "V-Bucks 13.5k", baseOffset: 34 },
  { type: "delivery", user: "fahad07", product: "Battle Pass Boost", baseOffset: 56 },
  { type: "order", user: "jordan.k", product: "Stacked Account", baseOffset: 89 },
  { type: "vouch", user: "lina.fa", product: "Rare Skin Bundle", baseOffset: 124 },
  { type: "order", user: "ahmed_92", product: "1-on-1 Coaching", baseOffset: 178 },
  { type: "delivery", user: "noah.tt", product: "Creative Config Drop", baseOffset: 245 },
  { type: "order", user: "rio.br", product: "V-Bucks 13.5k", baseOffset: 312 },
  { type: "support", user: "yara.iq", product: "Region transfer", baseOffset: 401 },
  { type: "vouch", user: "sami.ps", product: "Stacked Account", baseOffset: 478 },
  { type: "order", user: "kai.jp", product: "Stacked Account", baseOffset: 528 },
  { type: "delivery", user: "jules.eu", product: "Battle Pass Boost", baseOffset: 645 },
];

const TYPE_META: Record<
  ActivityType,
  { icon: string; color: string; label: string }
> = {
  order: { icon: "▸", color: "text-accent", label: "ORDER" },
  vouch: { icon: "✓", color: "text-accent-2", label: "VOUCH" },
  delivery: { icon: "↑", color: "text-fg", label: "DELIVERY" },
  support: { icon: "◦", color: "text-muted", label: "SUPPORT" },
};

function formatTime(seconds: number): string {
  if (seconds < 60) return `${Math.max(1, seconds)}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  return `${Math.floor(seconds / 3600)}h ago`;
}

function pickRandom(): ActivityTemplate {
  return MOCK_ACTIVITY[Math.floor(Math.random() * MOCK_ACTIVITY.length)];
}

const VISIBLE_COUNT = 5;
const ENTRY_HEIGHT = 76;
const CONTAINER_HEIGHT = VISIBLE_COUNT * ENTRY_HEIGHT + 28;
const CYCLE_MS = 3500;
const EXIT_MS = 450;
const ENTER_MS = 550;

export function LiveFeed() {
  const [entries, setEntries] = useState<Activity[]>([]);
  const [exitingKey, setExitingKey] = useState<number | null>(null);
  const [enteringKey, setEnteringKey] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const counterRef = useRef(0);
  const entriesRef = useRef<Activity[]>([]);
  // eslint-disable-next-line react-hooks/refs
  entriesRef.current = entries;

  // Initial entries
  useEffect(() => {
    const initial = MOCK_ACTIVITY.slice(0, VISIBLE_COUNT).map((t) => {
      counterRef.current++;
      return {
        ...t,
        _id: counterRef.current,
        _createdAt: Date.now() - t.baseOffset * 1000,
      };
    });
    setEntries(initial);
  }, []);

  // Tick "Xs ago" labels every 5s
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 5000);
    return () => clearInterval(interval);
  }, []);

  // Cycle: every CYCLE_MS, animate top out + new bottom in
  useEffect(() => {
    const interval = setInterval(() => {
      const current = entriesRef.current;
      const exitingId = current[0]?._id;
      if (exitingId == null) return;
      setExitingKey(exitingId);
      window.setTimeout(() => {
        counterRef.current++;
        const newEntry: Activity = {
          ...pickRandom(),
          _id: counterRef.current,
          _createdAt: Date.now(),
        };
        setEntries((prev) => [...prev.slice(1), newEntry]);
        setExitingKey(null);
      }, EXIT_MS);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  // Mark the newest entry as entering so it animates in
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    if (entries.length === 0) return;
    const lastId = entries[entries.length - 1]._id;
    setEnteringKey(lastId);
    const t = window.setTimeout(() => setEnteringKey(null), ENTER_MS);
    return () => window.clearTimeout(t);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [entries]);

  return (
    <aside className="relative">
      <div className="relative border border-border-bright bg-surface">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border-bright bg-bg px-5 py-2.5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent pulse-cyan"
            />
            <span className="mono text-[10px] uppercase tracking-wider text-muted">
              activity.live
            </span>
          </div>
          <span className="mono text-[10px] uppercase tracking-wider text-accent">
            [ live ]
          </span>
        </div>

        {/* Feed list */}
        <ul
          className="relative overflow-hidden p-5"
          style={{ height: `${CONTAINER_HEIGHT}px` }}
          aria-live="polite"
          aria-label="Live activity feed"
        >
          {entries.map((entry, i) => {
            const meta = TYPE_META[entry.type];
            const offsetSec = Math.max(
              1,
              Math.floor((now - entry._createdAt) / 1000),
            );
            const isExiting = exitingKey === entry._id;
            const isEntering = enteringKey === entry._id;
            return (
              <li
                key={entry._id}
                className={cn(
                  "absolute left-5 right-5",
                  isExiting && "feed-out",
                  isEntering && "feed-in",
                )}
                style={{
                  top: `${i * ENTRY_HEIGHT + 16}px`,
                  height: `${ENTRY_HEIGHT - 6}px`,
                }}
              >
                <div className="flex items-baseline gap-2 mono text-[10px] uppercase tracking-wider">
                  <span className={meta.color}>{meta.icon}</span>
                  <span className="text-muted">{meta.label}</span>
                  <span className="text-muted">·</span>
                  <span className="text-fg">{entry.user}</span>
                </div>
                <div className="mt-1.5 flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm text-fg">
                    {entry.product}
                  </span>
                  <span className="mono whitespace-nowrap text-[10px] uppercase tracking-wider text-muted">
                    {formatTime(offsetSec)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-border-bright bg-bg px-5 py-2.5 mono text-[10px] uppercase tracking-wider text-muted">
          <span>stream: ws://vaulted/live</span>
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent-2"
            />
            region: global
          </span>
        </div>
      </div>
    </aside>
  );
}
