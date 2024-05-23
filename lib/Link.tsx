'use client';

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

function Link({
    href,
    children,
    ...props
}: {
    href: string;
    children: React.ReactNode;
    [key: string]: any;
}) {
    const pathname = usePathname();
    const locale = pathname.split("/")[1] || "en";

    return (
        <NextLink
            {...props}
            href={`/${locale}${href}`}
            as={`/${locale}${href}
    `}
        >
            {children}
        </NextLink>
    );
}

export default Link;
