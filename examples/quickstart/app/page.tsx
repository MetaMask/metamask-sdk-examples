import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <Hero />

        <Separator className="w-full my-14 opacity-15" />

        <section className="flex flex-col items-center md:flex-row gap-10 w-full justify-center max-w-5xl">
          <div className="flex flex-col gap-10">
            {/* Docs Card */}
            <a
              href="https://docs.metamask.io/sdk/"
              target="_blank"
              className="relative bg-indigo-500 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl bg-opacity-40 max-w-md text-white border-none transition-colors h-full"
            >
              <div className="bg-indigo-500 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-indigo-500 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  Docs
                  <ArrowRight className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-indigo-100">
                  Find in-depth information about the SDK features.
                </p>
              </CardContent>
            </a>

            {/* Get ETH Card */}
            <a
              href="https://docs.metamask.io/developer-tools/faucet/"
              target="_blank"
              className="bg-teal-300 bg-opacity-60 rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl relative max-w-md h-full text-white border-none transition-colors"
            >
              <div className="bg-teal-300 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
              <div className="bg-teal-300 bg-opacity-20 h-[107%] w-[104%] rounded-xl -z-20 absolute top-0 left-0"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  Get ETH on testnet
                  <ArrowRight className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-emerald-100">
                  Get testnet tokens to use when testing your smart contracts.
                </p>
              </CardContent>
            </a>
          </div>

          <Card className="relative bg-pink-500 bg-opacity-35 rounded-tr-sm rounded-bl-sm text-white border-none h-full w-full max-w-xl self-start h-[360px]">
            <div className="bg-pink-500 bg-opacity-20 h-[104%] w-[103%] md:h-[103%] md:w-[102%] rounded-xl -z-20 absolute right-0 bottom-0"></div>
            <div className="bg-pink-500 bg-opacity-20 h-[104%] w-[103%] md:h-[103%] md:w-[102%] rounded-xl -z-20 absolute top-0 left-0"></div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Add your own functionality
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-7">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Guides</h3>
                <div className="space-y-2">
                  {[
                    {url: "https://docs.metamask.io/sdk/guides/manage-networks/", text: "Manage networks"},
                    {url: "https://docs.metamask.io/sdk/guides/handle-transactions/", text: "Handle transactions"},
                    {url: "https://docs.metamask.io/sdk/guides/interact-with-contracts/", text: "Interact with smart contracts"},
                  ].map((item) => (
                    <a
                      href={item.url}
                      key={item.text}
                      target="_blank"
                      className="flex items-center gap-2 w-fit text-white text-opacity-80 cursor-pointer transition-colors"
                    >
                      <span className="hover:mr-1 duration-300">{item.text}</span>
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Examples</h3>
                <div className="space-y-1">
                  {[
                    {url: "https://github.com/MetaMask/metamask-sdk-examples/tree/main/examples/quickstart", text: "Next.js + Wagmi"},
                  ].map((item) => (
                    <a
                      href={item.url}
                      key={item.text}
                      target="_blank"
                      className="flex items-center gap-2 w-fit text-white text-opacity-80 cursor-pointer transition-colors"
                    >
                      <span className="hover:mr-1 duration-300">{item.text}</span>
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
