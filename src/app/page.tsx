import type { Metadata } from "next";
import { About } from "components/About";
import { Usage } from "components/Usage";

export const metadata: Metadata = {
  title: "React Culqi Next| hebertdev",
  description:
    "Una biblioteca de React para la integración con el procesador de pagos Culqi, compatible con Next.js",
  openGraph: {
    type: "website",
    url: "https://react-culqi.hebertdev.net/",
    title: "React Culqi Next | hebertdev",
    description:
      "Una biblioteca de React para la integración con el procesador de pagos Culqi, compatible con Next.js",
    images: [
      {
        url: "https://raw.githubusercontent.com/hebertdev/react-culqi-next/master/culqiV4.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <About />
      <Usage />
    </>
  );
}
