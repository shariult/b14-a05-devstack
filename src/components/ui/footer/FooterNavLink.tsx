import React, { type ComponentPropsWithoutRef } from "react";

type FooterNavLinkProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"a">;

function FooterNavLink(props: FooterNavLinkProps) {
  const { className, ...otherProps } = props;

  return (
    <a
      href="#"
      className={`font-jakarta text-sm text-gray-500 hover:text-brand-pink ${className}`}
    >
      {otherProps.children}
    </a>
  );
}

export default FooterNavLink;
