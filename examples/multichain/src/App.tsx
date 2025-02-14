"use client";

import { useState } from "react";
import { Container, Flex, Box, Image, Link, Button } from "@chakra-ui/react";
import { useMultichain } from "./multichain/hooks.ts";
import { ExternalLink } from "lucide-react";
import { toaster } from "./components/ui/toaster";
import { BackgroundNoise } from "./components/layout/background.tsx";
import { EXTENSION_ID, NETWORKS } from "./constants.tsx";
import { NetworkDropdown } from "./components/app/network-dropdown.tsx";
import { NotConnectedState } from "./components/app/not-connected-state.tsx";
import { CardContainer } from "./components/app/card-container.tsx";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentNetwork, setCurrentNetwork] = useState(NETWORKS[0].value);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const client = useMultichain();

  const handleConnect = async () => {
    try {
      const connected = await client.connect({ extensionId: EXTENSION_ID });

      if (connected) {
        const session = await client.createSession({
          requiredScopes: {
            "eip155:1": {
              methods: [],
              notifications: [],
            },
            "eip155:59144": {
              methods: [],
              notifications: [],
            },
          },
        });

        console.log("[handleConnect] session", session);

        setIsConnected(true);

        if (session.sessionScopes["eip155:1"]?.accounts?.[0]) {
          const address =
            session.sessionScopes["eip155:1"].accounts[0].split(":")[2];
          setUserAddress(address);
        }
      }
    } catch (error) {
      console.error("[handleConnect] failed to connect:", error);
      setIsConnected(false);
    }
  };

  const handleDisconnect = () => {
    client.disconnect();
    setIsConnected(false);
  };

  const handleSignMessage = async () => {
    try {
      const result = await client.invokeMethod({
        scope: "eip155:1",
        request: {
          method: "personal_sign",
          params: [
            "0x506c65617365207369676e2074686973206d65737361676520746f20636f6e6669726d20796f7572206964656e746974792e",
            userAddress,
          ],
        },
      });

      console.log("[signMessage] result", result);

      toaster.create({
        title: "Message Signed",
        description: "Your message was successfully signed",
        type: "success",
        duration: 4000,
      });
    } catch (error) {
      toaster.create({
        title: "Signing Failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        type: "error",
        duration: 4000,
      });
    }
  };

  const handleFetchBlockNumber = async () => {
    try {
      const result = await client.invokeMethod({
        scope: currentNetwork,
        request: {
          method: "eth_blockNumber",
          params: [],
        },
      });

      console.log("[fetchBlockNumber] result", result);

      const blockNum = Number.parseInt(result as string, 16).toLocaleString(); // Convert hex to decimal and format

      toaster.create({
        title: "Block Number Retrieved",
        description: `Latest block number: ${blockNum}`,
        type: "success",
        duration: 4000,
      });
    } catch (error) {
      console.error("[fetchBlockNumber] failed to fetch block number:", error);

      toaster.create({
        title: "Failed to Fetch Block Number",
        description:
          error instanceof Error ? error.message : "An error occurred",
        type: "error",
        duration: 4000,
      });
    }
  };

  const handleNetworkChange = (value: string) => {
    setCurrentNetwork(value);
  };

  return (
    <>
      <BackgroundNoise />

      <Container w="5xl" h="100vh">
        <Flex align="center" justify="space-between" py={10}>
          <Image src="/metamask-logo.svg" alt="Logo" height="40px" />
          <Flex gap={4} align="center">
            {isConnected && (
              <NetworkDropdown
                network={currentNetwork}
                onNetworkChange={handleNetworkChange}
              />
            )}

            <Button
              onClick={isConnected ? handleDisconnect : handleConnect}
              type="button"
              colorScheme="blue"
              size="lg"
            >
              {isConnected ? "Disconnect" : "Connect Wallet"}
            </Button>
          </Flex>
        </Flex>

        <Box mt={4} mx="auto" maxW="5xl">
          {isConnected ? (
            <Flex direction="column" gap={8}>
              <CardContainer
                title="Wallet Actions"
                description="Try out these wallet interactions using the MetaMask Multichain SDK"
              >
                <Flex gap={4} wrap="wrap">
                  <Button
                    onClick={handleSignMessage}
                    colorScheme="gray"
                    size="lg"
                  >
                    Sign Message
                  </Button>
                  <Button
                    onClick={handleFetchBlockNumber}
                    colorScheme="gray"
                    size="lg"
                  >
                    Fetch Latest Block
                  </Button>
                </Flex>
              </CardContainer>

              <CardContainer
                title="Learn More"
                description="Learn more about the MetaMask Multichain SDK"
              >
                <Flex direction="column" gap={3}>
                  <Link
                    href="https://docs.metamask.io/sdk/"
                    target="_blank"
                    color="blue.400"
                    gap={2}
                  >
                    Documentation <ExternalLink size={16} />
                  </Link>
                  <Link
                    href="https://github.com/MetaMask/metamask-sdk"
                    target="_blank"
                    color="blue.400"
                    gap={2}
                  >
                    GitHub Repository <ExternalLink size={16} />
                  </Link>
                  <Link
                    href="https://docs.metamask.io/sdk/reference/"
                    target="_blank"
                    color="blue.400"
                    gap={2}
                  >
                    API Reference <ExternalLink size={16} />
                  </Link>
                </Flex>
              </CardContainer>
            </Flex>
          ) : (
            <NotConnectedState />
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;
