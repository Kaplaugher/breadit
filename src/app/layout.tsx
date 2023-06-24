// app/layout.tsx
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F*CK this game",
  description: "place to shit on games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        className={cn(
          "bg-white text-slate-900 antialiased light",
          inter.className
        )}
        lang="en"
      >
        <body className="min-h-screen pt-12 bg-slate-50 antialiased ">
          <Navbar />
          <div className="container max-w-7xl mx-auto h-full pt-12 ">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
