"use client";

import React, { useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "@/lib/Link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronUp, ShoppingCart } from "lucide-react";
import ToastButton from "@/components/ToastButton";
import StrapiHelper from "@/app/helpers/strapiHelper";
import { priceFormatter } from "@/lib/utils";
import { BlocksRenderer, BlocksContent } from "@strapi/blocks-react-renderer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface iParams {
    params: {
        locale: string;
        categories: string;
        details: string;
    };
}

interface IProduct {
    attributes: {
        Images: {
            data: {
                attributes: {
                    url: string;
                };
            }[];
        };
        Title: string;
        Description: BlocksContent;
        Price: number;
        Articlenumber: string;
        stock: number;
    };
}

export default function ProductDetails({ params }: iParams) {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState<IProduct[]>([]);
    const locale = params.locale;

    useEffect(() => {
        async function searchProducts(param: { details: string }) {
            const strapiHelper = new StrapiHelper();
            try {
                const res = await strapiHelper.getStrapiData({
                    query: `/products?locale=${locale}&filters[Articlenumber][$eq]=${param.details}&populate=*`,
                });

                const data = res.data;

                if (data) {
                    setProducts(data);
                    setLoading(false);
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error("Error fetching Strapi data:", error);
            }
        }

        searchProducts(params);
    }, [params, locale]);

    const content: BlocksContent = products[0]?.attributes.Description;

    return (
        <main className="mx-auto px-4 sm:px-2 py-4 max-w-7xl">
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <Link href="/webshop">
                                    Webshop
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <Link href={`/webshop/${params.categories}`}>
                                    {params.categories}
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    {products[0]?.attributes.Title}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-40 mt-14">
                    <div>
                        {
                          loading ? (
                            <Skeleton count={1} height={400} width={400} />
                          ) : (
                            <Image
                                src={products[0]?.attributes.Images.data[0]
                                  .attributes.url}
                                alt={products[0]?.attributes.Title}
                                width={400}
                                height={400}
                                className="rounded-lg"
                            />
                          )
                        }
                    </div>
                    <div>
                        <div>
                            <h1 className="text-xl text-center sm:text-left mb-3">
                                {loading ? (
                                    <Skeleton count={1} />
                                ) : (
                                    products[0]?.attributes.Title
                                )}
                            </h1>
                            <Separator className="my-4" />
                        </div>
                        <div>
                            <p className="text-secondary font-bold text-xl text-center sm:text-left">
                                {
                                  loading ? ( <Skeleton count={1} /> ) :
                                priceFormatter(
                                    products[0]?.attributes.Price.toString()
                                )
                                
                                
                              }
                            </p>
                            <p className="font-semibold my-5 text-gray-700 text-center sm:text-left">
                                Beschikbaarheid: &nbsp;
                                <span className={
                                    products[0]?.attributes.stock > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                          
                                }>
                                    {
                                    loading ? (
                                        <Skeleton count={1} />
                                    ) : (
                                    products[0]?.attributes.stock > 0
                                        ? "Op voorraad"
                                        : "Niet op voorraad"
                                    )
                                      }
                                </span>
                            </p>
                        </div>
                        <div>
                            <h1 className="font-semibold text-md text-center sm:text-left">
                                Beschrijving
                            </h1>
                            <Separator className="my-4" />
                            <p className="w-full sm:w-[500px] text-sm text-center sm:text-left">
                            {loading ? (
                        <Skeleton count={5} />
                    ) : (    <BlocksRenderer
                                    content={content}
                                    blocks={{
                                        paragraph: ({ children }) => {
                                            return (
                                                <p className="py-2">
                                                    {children}
                                                </p>
                                            );
                                        },
                                    }}
                                />
                            )}
                            </p>
                        </div>
                        <div className="flex justify-center sm:justify-normal gap-3 mt-2">
                            <div className="">
                                <Button
                                    variant="outline"
                                    className="mt-5 p-3 py-2 flex gap-1 items-center"
                                >
                                    <span>1</span>
                                    <ChevronUp className="rotate-180 text-black" />
                                </Button>
                            </div>
                            <div className="mt-5">
                                <ToastButton Text="In winkelwagen" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
