import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import DebugInfo from "@/components/debug-info";
import { SocketProvider } from "@/components/socket-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Omegle clone",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "bg-background font-sans antialiased min-h-screen",
                    inter.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SocketProvider>
                        <Header />
                        <main className="px-4 md:px-10">{children}</main>
                        <DebugInfo />
                    </SocketProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
