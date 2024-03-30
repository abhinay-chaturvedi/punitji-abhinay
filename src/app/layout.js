// import UserContextProvider from "@/contexts/user/context";
import "./globals.css";
import { Inter } from "next/font/google";
import UserContextWithAuthGaurd from "@/contexts/user";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HHH Immgigration",
  description: "We offer best immigration service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <UserContextProvider>{children}</UserContextProvider> */}
        <Toaster position="bottom-right" richColors closeButton />
        <UserContextWithAuthGaurd>{children}</UserContextWithAuthGaurd>
        {/* {children} */}
      </body>
    </html>
  );
}
