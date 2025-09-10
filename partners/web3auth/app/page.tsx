"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { useRef, useEffect } from "react";
import { useWeb3Auth, useWeb3AuthDisconnect } from "@web3auth/modal/react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { disconnect } = useWeb3AuthDisconnect();
  const { isConnected } = useWeb3Auth();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth || 1;
      canvas.height = window.innerHeight || 1;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create noise animation
    let animationFrameId: number;

    const generateNoise = () => {
      if (!canvas.width || !canvas.height) {
        animationFrameId = requestAnimationFrame(generateNoise);
        return;
      }

      try {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          // Generate random noise value
          const value = Math.floor(Math.random() * 50);

          data[i] = value; // R
          data[i + 1] = value; // G
          data[i + 2] = value; // B
          data[i + 3] = 70; // Alpha
        }

        ctx.putImageData(imageData, 0, 0);
      } catch (error) {
        console.error("Error generating noise:", error);
      }

      // Continue animation loop
      animationFrameId = requestAnimationFrame(generateNoise);
    };

    generateNoise();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <main>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full min-h-screen h-full -z-10"
      />
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <Hero />

        {isConnected && (
          <button
            onClick={() => disconnect()}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer md:hidden"
          >
            <span className="font-medium">Disconnect</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        )}

        <Separator className="w-full my-14 opacity-15" />

        <section className="flex flex-col items-center md:flex-row gap-10 w-full justify-center max-w-5xl">
          <div className="flex flex-col gap-10">
            {/* MetaMask Docs Card */}
            <a
              href="https://docs.metamask.io/sdk/"
              target="_blank"
              className="group relative bg-transparent px-2 py-4 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl max-w-md text-white border-none transition-colors h-full"
              rel="noreferrer"
            >
              <div className="bg-indigo-500/80 h-[107%] w-[103%] rounded-lg -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-indigo-500/80 h-[107%] w-[103%] rounded-lg -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  MetaMask Docs
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-indigo-100">
                  Find in-depth information about the SDK features.
                </p>
              </CardContent>
            </a>

            {/* Web3Auth Docs Card */}
            <a
              href="https://web3auth.io/docs/quick-start"
              target="_blank"
              className="group bg-transparent px-2 py-4 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl relative max-w-md h-full text-white border-none transition-colors"
              rel="noreferrer"
            >
              <div className="bg-teal-300/80 h-[107%] w-[103%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-teal-300/80 h-[107%] w-[103%] rounded-xl -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  Web3Auth Docs
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-emerald-100">
                  Start building with Web3Auth and onboard users to your app
                  easily.
                </p>
              </CardContent>
            </a>
          </div>

          <Card className="relative flex flex-col items-center justify-center bg-transparent rounded-none shadow-none text-white border-none w-full max-w-xl self-start h-[300px]">
            <div className="bg-pink-400/80 h-[104%] w-[103%] md:h-[103%] md:w-[102%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
            <div className="bg-pink-400/80 h-[104%] w-[103%] md:h-[103%] md:w-[102%] rounded-xl -z-20 absolute top-0 left-0"></div>
            <CardHeader className="w-full">
              <CardTitle className="text-2xl">
                <h2>
                  <a
                    href="https://docs.metamask.io/sdk/connect/javascript-web3auth/"
                    target="_blank"
                    className="hover:underline"
                  >
                    MetaMask {`<>`} Web3Auth{" "}
                  </a>
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                This integration allows developers using the MetaMask SDK to
                easily plug into Web3Auth’s authentication, wallet management,
                and user session tools, streamlining the setup process for
                multi-wallet and cross-platform support. To get started, check
                out the{" "}
                <a
                  href="https://web3auth.io/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Web3Auth’s official documentation
                </a>
              </p>
            </CardContent>
          </Card>
        </section>
        <footer className="flex flex-col items-center justify-center w-full">
          <a
            href="https://github.com/MetaMask/metamask-sdk-examples/tree/main/partners/web3auth"
            target="_blank"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors text-center"
          >
            Source code
          </a>
        </footer>
      </div>
    </main>
  );
}
