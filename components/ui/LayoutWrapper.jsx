"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login");

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="mt-10">{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}