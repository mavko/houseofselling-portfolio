"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { intFmt } from "../chart-formatters";
import { DateTicker } from "./date-ticker";

export interface TooltipRow {
  color: string;
  label: string;
  value: string | number;
}

export interface TooltipContentProps {
  title?: string;
  rows: TooltipRow[];
  /** Optional additional content (e.g., markers) */
  children?: ReactNode;
  /** Classes for the title label, e.g. to restyle it as a date pill. */
  titleClassName?: string;
  /** Short date labels for the rolling title ticker. */
  titleLabels?: string[];
  /** Index of the hovered date within `titleLabels`. */
  titleIndex?: number;
  /** Static prefix (e.g. weekday) shown before the rolling date. */
  titlePrefix?: string;
}

export interface TooltipHeaderProps {
  children: ReactNode;
  className?: string;
}

/**
 * Popover-style header row: medium-weight label separated from the body by a
 * full-width border. Use it at the top of custom `ChartTooltip` `content`.
 */
/** Rolls a stat's value like the date ticker as the hovered point changes. */
function RollingValue({ value }: { value: string | number }) {
  const reduceMotion = useReducedMotion() === true;
  const text = typeof value === "number" ? intFmt(value) : value;
  return (
    <LazyMotion features={domAnimation}>
      <span className="relative inline-block min-w-[2ch] overflow-hidden text-right align-bottom tabular-nums">
        <AnimatePresence initial={false} mode="popLayout">
          <m.span
            className="block"
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            key={text}
            transition={
              reduceMotion
                ? { duration: 0.12 }
                : { type: "spring", stiffness: 500, damping: 35 }
            }
          >
            {text}
          </m.span>
        </AnimatePresence>
      </span>
    </LazyMotion>
  );
}

export function TooltipHeader({ children, className }: TooltipHeaderProps) {
  return (
    <div
      className={cn(
        "border-b px-3.5 py-2.5 text-left font-medium text-chart-tooltip-foreground text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

TooltipHeader.displayName = "TooltipHeader";

export function TooltipContent({
  title,
  rows,
  children,
  titleClassName,
  titleLabels,
  titleIndex,
  titlePrefix,
}: TooltipContentProps) {
  const hasBody = rows.length > 0 || Boolean(children);
  const showTitleTicker =
    titleLabels && titleLabels.length > 0 && titleIndex != null;
  return (
    <div>
      {title && (
        <TooltipHeader className="border-b-0">
          {showTitleTicker ? (
            <DateTicker
              className={titleClassName}
              currentIndex={titleIndex}
              labels={titleLabels}
              prefix={titlePrefix}
              visible
            />
          ) : (
            <span className={titleClassName}>{title}</span>
          )}
        </TooltipHeader>
      )}
      {hasBody && (
        <div className="px-3.5 py-3">
          {rows.length > 0 && (
            <div className="space-y-2">
              {rows.map((row) => (
                <div
                  className="flex items-center justify-between gap-6"
                  key={`${row.label}-${row.color}`}
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: row.color }}
                    />
                    <span className="truncate text-chart-tooltip-muted text-sm">
                      {row.label}
                    </span>
                  </div>
                  <span className="text-right font-medium text-chart-tooltip-foreground text-sm">
                    <RollingValue value={row.value} />
                  </span>
                </div>
              ))}
            </div>
          )}

          {children && (
            <div
              className={
                rows.length > 0
                  ? "mt-2 transition-opacity duration-200 ease-out"
                  : "transition-opacity duration-200 ease-out"
              }
            >
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

TooltipContent.displayName = "TooltipContent";

export default TooltipContent;
