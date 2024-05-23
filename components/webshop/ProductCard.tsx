import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "@/components/ui/button";
import ToastButton from "../ToastButton";
import Image from "next/image";
import { priceFormatter } from "@/lib/utils";
import Link from "@/lib/Link";

interface ProductProps {
    ImageData: string;
    Title: string;
    Price: string;
    Category: string;
    ArticleNumber: string;
}

function ProductCard({ ImageData, Title, Price, Category, ArticleNumber }: ProductProps) {
    return (
        <Card className="w-80 rounded-lg">
            <Link href={`/webshop/${Category}/${ArticleNumber}`} className="">
                <Image
                    src={ImageData}
                    alt="Product"
                    className="w-full h-72 rounded-t-lg"
                    width={320}
                    height={320}
                />
                <CardHeader>
                    <CardTitle>{Title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mt-3 text-lg">{priceFormatter(Price)}</p>
                </CardContent>
            </Link>
                <CardFooter>
                    <div className="flex justify-between items-center gap-x-2">
                        <ToastButton Text="" />
                        <Link href={`/webshop/${Category}/${ArticleNumber}`} className="">
                        <Button variant="outline">Bekijken</Button>
                        </Link>

                    </div>
                </CardFooter>
        </Card>
    );
}

export default ProductCard;
