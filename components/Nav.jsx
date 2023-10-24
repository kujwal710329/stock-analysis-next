"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/groww-logo.svg" alt="logo" width={100} height={100} className="object-contain" />
        {/* <p className="logo-text">GrowwStonks</p> */}
      </Link>
      <form className="relative w-1/4 flex-center">
        <input
          type="text"
          placeholder="search for a tag or a username"
          // value={searchText}
          // onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
    </nav>
  );
};

export default Nav;
