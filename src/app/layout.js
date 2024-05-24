import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "../components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zchat",
  description: "Chat with Friends and groups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TooltipProvider>

      {children}
      </TooltipProvider>
      </body>
    </html>
  );
}
