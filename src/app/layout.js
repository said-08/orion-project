import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Carpeta digital del Club de Aventureros Orión.",
    default: "Carpeta digital del Club de Aventureros Orión.",
  },
  description: "Carpeta digital del Club de Aventureros Orión.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <Image
          src="/camporee-logo-orion.png"
          alt="Logo Camporee"
          width={100}
          height={100}
          className="hidden lg:block fixed bottom-2 left-2.5 w-[85px] h-[100px] animate-slide-from-bottom"
        />
        <div id="my-modal" />
      </body>
    </html>
  );
}
