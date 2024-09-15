import Link from "next/link";
import React from "react";
import Inputsearch from "./Inputsearch";
import UserAuthButton from "../Utilities/UserAuthButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          Pampam Anime List
        </Link>
        <Inputsearch />
        <UserAuthButton />
      </div>
    </header>
  );
};

export default Navbar;
