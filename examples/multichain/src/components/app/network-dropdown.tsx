import { createListCollection } from "@chakra-ui/react";
import { NETWORKS } from "../../constants.tsx";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select.tsx";

const networks = createListCollection({ items: NETWORKS });

type NetworkDropdownProps = {
  network: string;
  onNetworkChange: (value: string) => void;
};

export const NetworkDropdown = ({
  network,
  onNetworkChange,
}: NetworkDropdownProps) => {
  return (
    <NativeSelectRoot size="lg" width="150px">
      <NativeSelectField
        value={network}
        onChange={(e) => onNetworkChange(e.target.value)}
        bg="white"
        color="black"
        borderRadius="sm"
        border="none"
        fontWeight="medium"
      >
        {networks.items.map((network) => (
          <option key={network.value} value={network.value}>
            {network.label}
          </option>
        ))}
      </NativeSelectField>
    </NativeSelectRoot>
  );
};
