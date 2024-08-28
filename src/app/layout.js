import { Inter } from "next/font/google";
import "./globals.css";
import Providers from './providers';
import {NextUIProvider} from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iTVT Hub | iTVT + More",
  description: "iTVT Hub | All Channels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark text-foreground bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
