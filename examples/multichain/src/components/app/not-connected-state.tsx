import { Flex, Box, Text } from "@chakra-ui/react";

export function NotConnectedState() {
  return (
    <Flex direction="column" align="center" justify="center" minH="300px" p={8}>
      <Box fontSize="4xl" mb={4}>
        🔒
      </Box>
      <Text fontSize="xl" color="gray.200" fontWeight="medium">
        Not connected
      </Text>
      <Text color="gray.400" mt={2}>
        Connect your wallet to get started
      </Text>
    </Flex>
  );
}
