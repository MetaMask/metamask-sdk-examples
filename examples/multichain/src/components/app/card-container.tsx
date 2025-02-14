import { Box, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function CardContainer({ title, description, children }: Props) {
  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" bg="rgba(20, 20, 21, 0.44)">
      <Text fontSize="xl" color="white" fontWeight="medium">
        {title}
      </Text>
      {description && (
        <Text color="gray.400" mt={2}>
          {description}
        </Text>
      )}
      <Box mt={4}>{children}</Box>
    </Box>
  );
}
