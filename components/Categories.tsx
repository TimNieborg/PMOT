"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import StrapiHelper from "@/app/helpers/strapiHelper";
import Link from "@/lib/Link";
import { useTranslations } from "next-intl";

interface Data {
  attributes: {
    Name: string;
    slug: string;
  };
}

export function Categories({ translations }: { translations: string }) {
  const t = useTranslations("Navbar");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);

  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "en";

  useEffect(() => {
    const getStrapiData = async () => {
      const strapiHelper = new StrapiHelper();

      try {
        const res = await strapiHelper.getStrapiData({
          query: `/categories?locale=${locale}`,
        });

        const data = res.data;

        if (data) {
          setData(data);
          setLoading(false);
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching Strapi data:", error);
      }
    };

    if (locale) {
      getStrapiData();
    }
  }, [locale]);

  return (
    <Sheet key="left">
      <SheetTrigger asChild>
        <p className="flex items-center font-roboto cursor-pointer gap-1">
          <Menu />
          {t("categories")}
        </p>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-4">
          <Image src="/logo.png" alt="Logo" height={75} width={150} />
        </SheetHeader>
        <Separator className="my-4" />
        <ScrollArea className="w-full h-full rounded-md pb-16">
          {data.map((item, index) => (
            <Link key={index} href={`/webshop/${item.attributes.slug}`}>
              <div className="grid gap-4 py-2">
                <div className="flex justify-between hover:bg-gray-100 py-4 px-2 mr-5 rounded-md">
                  <p>{item.attributes.Name}</p>
                  <ChevronRight />
                </div>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
