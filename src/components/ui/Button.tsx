import React, { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "outline" | "black";
  size: "lg" | "full";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

function Button(props: ButtonProps) {
  const { className, children, ...btnProps } = props;

  let classes =
    "rounded-md text-[12px] font-inter md:text-base md:font-semibold";

  // sizes
  if (props.size === "lg") {
    classes += " px-4 py-3";
  }
  if (props.size === "full") {
    classes += " w-full";
  }

  // variants
  if (props.variant === "primary") {
    classes += " bg-gradient-to-r from-brand-orange to-brand-pink text-gray-50";
  }
  if (props.variant === "outline") {
    classes += " border border-gray-300 text-gray-700";
  }
  if (props.variant === "black") {
    classes += " bg-gray-900 text-gray-50";
  }

  return (
    <button className={`${classes} ${className}`} {...btnProps}>
      {children}
    </button>
  );
}

export default Button;
