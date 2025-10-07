import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import AnimatedLogo from "@/components/AnimatedLogo";

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
        <AnimatedLogo />
        <div id="my-modal" />
      </body>
    </html>
  );
}
