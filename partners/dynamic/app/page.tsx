"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { useRef, useEffect } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

            {/* Dynamic Docs Card */}
            <a
              href="https://docs.dynamic.xyz/quickstart"
              target="_blank"
              className="group bg-transparent px-2 py-4 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl relative max-w-md h-full text-white border-none transition-colors"
              rel="noreferrer"
            >
              <div className="bg-teal-300/80 h-[107%] w-[103%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-teal-300/80 h-[107%] w-[103%] rounded-xl -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  Dynamic Docs
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-emerald-100">
                  Start building with Dynamic and onboard users to your app
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
                <h2>MetaMask {`<>`} Dynamic </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                This integration allows developers using the MetaMask SDK to
                easily plug into Dynamic’s authentication, wallet management,
                and user session tools, streamlining the setup process for
                multi-wallet and cross-platform support. To get started, check
                out Dynamic’s official documentation
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
