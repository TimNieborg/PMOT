"use client";

import React, { useEffect, useState } from "react";
import StrapiHelper from "@/app/helpers/strapiHelper";
import { CategoryCard } from "./CategoryCard";

interface Category {
  attributes: {
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    slug: string;
    Name: string;
  };
}

export function GetCategories() {
  const [loading, setLoading] = useState(true);
  const [CategoriesList, setCategoriesList] = useState<Category[]>([]);
  useEffect(() => {
    const getStrapiData = async () => {
      const strapiHelper = new StrapiHelper();
      try {
        const res = await strapiHelper.getStrapiData({
          query: `/categories?locale=nl&populate=*`,
        });
        const data = res.data;
        if (data) {
          setCategoriesList(data);
          setLoading(false);
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching Strapi data:", error);
      }
    };
    getStrapiData();
  }, []);

  return (
    <>
      {CategoriesList.map((category, index) => {
        return (
          <CategoryCard
            key={index}
            ImageUrl={category.attributes.Image.data.attributes.url}
            CategorySlug={category.attributes.slug}
            Title={category.attributes.Name}
          />
        );
      })}
    </>
  );
}
