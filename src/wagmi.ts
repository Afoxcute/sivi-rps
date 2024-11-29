import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  taikoHekla,
} from "wagmi/chains";
import { http } from 'wagmi';
// import { taikoHekla as taikotemp } from "viem/_types/chains";


export const config = getDefaultConfig({
  appName: 'RockPaperScissors',
  projectId: '6ff8eb59587cd5a38c24cc85d30763ea',
  chains: [
    taikoHekla,
    // taikotemp
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
  transports: {
    [taikoHekla.id]: http(
      'https://rpc.hekla.taiko.xyz'
    ),
  },
});
