import { Contract } from "ethers";
import { useMemo } from "react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import ABI from "../abis/Greeting.json";

const address = "0xf22063aC68185A967eb71a2f5b877336b64bF9E1";

const useGreetingContract = () => {
  const { state } = useWeb3Context() as IWeb3Context;

  return useMemo(
    () => state.signer && new Contract(address, ABI, state.signer),
    [state.signer]
  );
};

export default useGreetingContract;
