"use client";

import Image from "next/image";
import { useAccount } from "wagmi";

export const Hero = () => {
  const { isConnected } = useAccount();

  if (isConnected) {
    return (
      <section className="relative mx-auto mt-28 gap-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white text-4xl font-bold">
          <Image
            src="/metamask-logo.svg"
            alt="MetaMask Logo"
            width={300}
            height={300}
          />
          {"<>"}
          <Image
            src="/dynamic-dark.svg"
            alt="Dynamic Logo"
            width={300}
            height={300}
          />
        </div>
        <p className="text-white opacity-70 text-center text-lg">
          Welcome to the <strong>MetaMask SDK {`+`} Dynamic</strong> quick start
          app!
          <br /> Check out the docs to get started.
        </p>
        <Image
          src="/arrow.svg"
          alt="Arrow pointing to the connect wallet button"
          className="absolute scale-y-[-1] hidden md:block md:bottom-[-65px] md:right-[-95px]"
          width={130}
          height={130}
        />
      </section>
    );
  }

  return (
    <section className="relative flex flex-col gap-2 md:gap-0 mx-auto mt-28 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white text-4xl font-bold">
        <Image
          src="/metamask-logo.svg"
          alt="MetaMask Logo"
          width={250}
          height={250}
        />
        {"<>"}
        <Image
          src="/dynamic-dark.svg"
          alt="Dynamic Logo"
          width={250}
          height={250}
        />
      </div>
      <p className="text-white opacity-70 text-center text-lg">
        Welcome to the <strong>MetaMask SDK {`+`} Dynamic</strong> quick start
        app!
        <br className="hidden md:block" /> Connect your wallet to get started.
      </p>
      <Image
        src="/arrow.svg"
        alt="Arrow pointing to the connect wallet button"
        className="absolute hidden md:block md:bottom-5 md:-right-32"
        width={150}
        height={150}
      />
    </section>
  );
};
