import React, { type ComponentPropsWithoutRef } from "react";

type FooterSocialLinkProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"a">;

function FooterSocial(props: FooterSocialLinkProps) {
  const { className, ...otherProps } = props;

  return (
    <a href="#" className={`text-sm hover:text-brand-pink ${className}`}>
      {otherProps.children}
    </a>
  );
}

export default FooterSocial;
