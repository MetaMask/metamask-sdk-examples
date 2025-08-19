"use client";

import Image from "next/image";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export function Navbar() {
  return (
    <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
      <Image
        src="/metamask-logo.svg"
        alt="Metamask Logo"
        width={180}
        height={180}
      />
      <DynamicWidget innerButtonComponent={`Connect or Sign In`} />
    </nav>
  );
}
