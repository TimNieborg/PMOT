import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "@/lib/Link";
import { GetCategories } from "@/components/webshop/GetCategories";

function CategorieList() {
    return (
        <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Link href="/webshop">Webshop</Link>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    <GetCategories />
                </div>
            </div>
        </main>
    );
}

export default CategorieList;
