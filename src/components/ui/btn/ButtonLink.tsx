import React, { type ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = {
  children: React.ReactNode;
  variant: "primary" | "outline" | "black";
  size: "lg" | "full";
  className?: string;
} & ComponentPropsWithoutRef<"a">;

function ButtonLink(props: ButtonLinkProps) {
  const { className, children, ...btnLinkProps } = props;

  let classes =
    "rounded-md text-[12px] font-inter md:text-base md:font-semibold transition-all";

  // sizes
  if (props.size === "lg") {
    classes += " px-4 py-3";
  }
  if (props.size === "full") {
    classes += " w-full";
  }

  // variants
  if (props.variant === "primary") {
    classes +=
      " bg-gradient-to-r from-brand-orange to-brand-pink text-gray-50 hover:bg-brand-orange";
  }
  if (props.variant === "outline") {
    classes +=
      " border border-2 border-gray-300 text-gray-800 hover:bg-gray-300";
  }
  if (props.variant === "black") {
    classes += " bg-gray-900 hover:bg-gray-700 text-gray-5 py-2";
  }
  return (
    <a
      href={props.href}
      className={`${classes} ${className}`}
      {...btnLinkProps}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
