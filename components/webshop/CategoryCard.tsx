import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "@/lib/Link";
import Image from "next/image";

interface CardProps {
    ImageUrl: string;
    Title: string;
    CategorySlug: string;
}

export function CategoryCard({ ImageUrl, Title, CategorySlug }: CardProps) {
    return (
        <Card
            className="w-72 bg-primary rounded-lg 
    hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            <Link href={`/webshop/${CategorySlug}`}>
                <Image
                    src={ImageUrl}
                    alt="Product"
                    className="w-full h-72 object-contain rounded-t-lg"
                    width={288}
                    height={288}
                />
                <CardHeader className="my-10">
                    <CardTitle className="text-center">{Title}</CardTitle>
                </CardHeader>
            </Link>
        </Card>
    );
}
