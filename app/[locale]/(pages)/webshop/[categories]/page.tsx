"use client";

import ProductCard from "@/components/webshop/ProductCard";
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
import { WebshopFilter } from "@/components/webshop/WebshopFilter";
import Headline from "@/components/Headline";
import StrapiHelper from "@/app/helpers/strapiHelper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface IcategoryData {
  categories: string;
  Name: string;
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
    Description: string;
    Price: number;
    Articlenumber: string;
  };
}

function ProductsPage({
  params,
}: {
  params: { locale: string; categories: string };
}) {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState<IcategoryData | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const locale = params.locale;

  useEffect(() => {
    // Zoek de categorie op basis van de slug
    async function searchCategoryInfo(param: { categories: string }) {
      const strapiHelper = new StrapiHelper();

      try {
        const res = await strapiHelper.getStrapiData({
          query: `/categories?locale=${locale}&filters[slug][$eq]=${param.categories}`,
        });

        const data = res.data;

        if (data) {
          setCategoryData(data[0].attributes);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error fetching Strapi data:", error);
      }
    }

    async function searchProducts(param: { categories: string }) {
      const strapiHelper = new StrapiHelper();

      try {
        const res = await strapiHelper.getStrapiData({
          query: `/products?locale=${locale}&filters[category\][slug][$eqi]=${param.categories}&populate=*`,
        });

        const data = res.data;

        if (data) {
          console.log(data);
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

    searchCategoryInfo(params);
    searchProducts(params);
  }, [params, locale]);

  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
      <div>
        <div>
          <Breadcrumb className="pb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/webshop">Webshop</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{params.categories}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 mt-12">
          <div id="filter-system" className="mt-">
            <WebshopFilter />
          </div>
          <div>
            <Headline
              Text={
                categoryData ? (
                  categoryData.Name
                ) : (
                  <Skeleton width={200} height={30} />
                )
              }
            />
            <div id="products" className="flex flex-wrap gap-6">
              {products.map((product, index) => {
                return loading ? (
                  <Skeleton key={index} width={200} height={200} />
                ) : (
                  <ProductCard
                    key={index}
                    ImageData={product.attributes.Images.data[0].attributes.url}
                    Title={product.attributes.Title}
                    Price={product.attributes.Price.toString()}
                    Category={params.categories}
                    ArticleNumber={product.attributes.Articlenumber}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
