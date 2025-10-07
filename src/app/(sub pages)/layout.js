import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
      <Image
        src="/logo.png"
        alt="Logo Club G12"
        width={100}
        height={100}
        className="hidden lg:block fixed bottom-4 right-2.5 w-[85px] h-[85px] animate-slide-from-bottom"
      />
    </main>
  );
}
