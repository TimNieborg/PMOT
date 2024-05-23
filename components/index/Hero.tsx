"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import StrapiHelper from "@/app/helpers/strapiHelper";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function Hero() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "en"; // default to 'en' if locale is not found

  const t = useTranslations("Homepage.header");

  useEffect(() => {
    const getStrapiData = async () => {
      const strapiHelper = new StrapiHelper();

      try {
        const res = await strapiHelper.getStrapiData({
          query: `/hero?locale=${locale}`,
        });

        const data = res.data?.attributes;

        if (data) {
          setTitle(data.title);
          setSubtitle(data.subtitle);
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
    <section className="dark:bg-gray-800 w-full md:px-4 mx-auto md:max-w-5xl lg:max-w-5xl xl:max-w-7xl dark:text-gray-100 mt-5 sm:mt-12">
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="sm:pr-5">
          <div className="sm:pr-12">
            <h1 className="text-xl md:text-4xl font-bold mt-4 text-tertiary md:mt-0">
              {loading ? <Skeleton width={700} height={50} /> : title}
            </h1>
            <p className="mt-5 mb-8 text-lg sm:mb-12 text-left">
              {loading ? <Skeleton count={4} width={700} /> : subtitle}
            </p>
          </div>

          <div className="text-center flex flex-end sm:text-left">
            <Link
              href="#"
              className="px-5 py-3 text-md font-semibold border rounded-md bg-secondary text-white"
            >
              {t("cta")}
            </Link>
            <Link
              href="#"
              className="px-6 py-3 ml-3 text-md font-semibold border rounded-md outline outline-gray-200 outline-1 text-black"
            >
              {t("cta_shop")}
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://cdn.vox-cdn.com/thumbor/EuDyAxLrF4EZFo5KIJLTDQ35HUk=/0x0:2364x1330/1200x800/filters:focal(993x476:1371x854)/cdn.vox-cdn.com/uploads/chorus_image/image/52627899/lego_boost_design_products_technology_robots_dezeen_hero.0.jpg"
            alt="Hero Image"
            className="object-contain rounded-md w-full sm:w-[1200px] md:w-[1800px]"
          />
        </div>
      </div>
    </section>
  );
}
