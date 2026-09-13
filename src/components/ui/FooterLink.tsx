import React, { type ComponentPropsWithoutRef } from "react";

type FooterLinkProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"a">;

function FooterLink(props: FooterLinkProps) {
  const { className } = props;
  return (
    <a
      href="#"
      className={`text-gray-400 hover:text-brand-pink text-sm ${className}`}
    >
      {props.children}
    </a>
  );
}

export default FooterLink;
