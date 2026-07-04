import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import LayoutController from "@/components/LayoutController";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutController>
          {children}
        </LayoutController>
      </body>
    </html>
  );
}