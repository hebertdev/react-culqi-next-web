import type { Metadata } from "next";
import "./globals.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderSimple } from "components/Header";
import { Footer } from "components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <HeaderSimple />
          <>{children}</>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
