import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <div className="fixed top-0 w-full insex-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="w-8 h-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            FTG
          </p>
        </Link>
        {/* search bar */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
