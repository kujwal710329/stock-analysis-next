"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
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

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
          <button type="button" className="outline_btn">
            Sign Out
          </button>
          <Link href="/profile">
            <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile" />
          </Link>
        </div>
      </div>

      {/* mobile navigation */}

      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                My Profile
              </Link>
              <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                create Prompt
              </Link>
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                }}
                className="mt-5 w-full black_btn"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
