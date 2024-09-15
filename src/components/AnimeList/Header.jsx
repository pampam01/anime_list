import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center text-color-primary">
      <h1 className="text-3xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl underline hover:text-color-accent transition-all text-sm"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
