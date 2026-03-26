import React from "react";

/**
 * Minimal, reusable Button component for the app.
 *
 * Contract:
 * - Inputs:
 *   - variant: "primary" | "secondary" | "ghost" (optional, default "primary")
 *   - size: "sm" | "md" | "lg" (optional, default "md")
 *   - isLoading: boolean (optional) - disables button and shows loading label
 *   - disabled: boolean (optional)
 *   - className: string (optional) - appended to base styles
 *   - children: ReactNode
 *   - ...props: forwarded to <button> (type, onClick, aria-*, etc.)
 * - Outputs:
 *   - Renders a <button> element with consistent baseline styling.
 * - Errors:
 *   - None thrown; relies on React/DOM validation.
 * - Side effects:
 *   - None.
 */

// PUBLIC_INTERFACE
export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
  children,
  type = "button",
  ...props
}) {
  /** This is a public component. */

  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gray-700 text-white hover:bg-gray-800 focus-visible:ring-gray-700 ring-offset-white",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400 ring-offset-white",
    ghost:
      "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-400 ring-offset-white",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-base",
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      className={[
        base,
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={isDisabled}
      aria-disabled={isDisabled ? "true" : undefined}
      {...props}
    >
      {isLoading ? "Loading…" : children}
    </button>
  );
}
