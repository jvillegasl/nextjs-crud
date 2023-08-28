"use client";

import { usePathname } from "next/navigation";

function getTitle(pathname: string) {
    if (pathname.startsWith("/details/")) return "Todo Details";

    if (pathname === "/") return "Todo's List";

    if (pathname === "/new") return "Create Todo";

    if (pathname.startsWith("/edit/")) return "Edit Todo";
}

export function Header() {
    const pathname = usePathname();

    return (
        <header className="text-2xl pb-4 border-b border-gray-500">
            {getTitle(pathname)}
        </header>
    );
}
