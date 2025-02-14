import { Box } from "@chakra-ui/react";

export function BackgroundNoise() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
      bgImage="url('/noise.svg')"
      bgRepeat="repeat"
      bgSize="550px"
      opacity="0.25"
      _before={{
        content: '""',
        position: "absolute",
        width: "2500px",
        height: "2500px",
        borderRadius: "full",
        filter: "blur(100px)",
        left: "50%",
        top: "-2000px",
        transform: "translateX(-50%)",
        bg: "white",
        opacity: "0.5",
        zIndex: "-100",
      }}
    />
  );
}
