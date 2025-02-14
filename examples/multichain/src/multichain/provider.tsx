import { createContext, type ReactNode, type FC, useMemo } from "react";
import { MetamaskMultichain } from "@metamask/sdk-multichain";

export const MultichainContext = createContext<MetamaskMultichain | null>(null);

type Props = {
  children: ReactNode;
};

export const MultichainProvider: FC<Props> = ({ children }) => {
  const client = useMemo(() => new MetamaskMultichain(), []);

  return (
    <MultichainContext.Provider value={client}>
      {children}
    </MultichainContext.Provider>
  );
};
