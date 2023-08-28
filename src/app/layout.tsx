import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "jvillegasl - NextJS 13 CRUD",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={
                    inter.className +
                    " bg-slate-800 text-slate-100 container mx-auto p-4 grid gap-4"
                }
            >
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
