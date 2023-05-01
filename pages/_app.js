import gsap from "gsap/dist/gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";

import '@/styles/globals.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(MorphSVGPlugin);
  console.log(MorphSVGPlugin);
}

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
