import React, { type ComponentPropsWithoutRef } from "react";

type NavLinkProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"a">;

function NavLink(props: NavLinkProps) {
  const { className, ...otherProps } = props;
  const classes =
    "block md:inline-block p-4 md:p-0 hover:bg-gray-100 md:hover:bg-white font-jakarta text-sm md:text-md text-gray-700 hover:text-brand-pink";

  return (
    <a
      href={otherProps.href}
      className={`${classes} ${className}`}
      {...otherProps}
    >
      {otherProps.children}
    </a>
  );
}

export default NavLink;
