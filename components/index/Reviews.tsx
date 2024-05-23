"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import Headline from "../Headline";
import StrapiHelper from "@/app/helpers/strapiHelper";

interface Review {
  attributes: {
    Name: string;
    Country: string;
    Date: string;
    review: string;
    stars: number;
  };
}

function renderStars(amount: number) {
  let stars = [];

  for (let i = 0; i < amount; i++) {
    stars.push(<Star className="fill-yellow-400 text-yellow-400" />);
  }
  return stars;
}

export function Reviews() {
  const [loading, setLoading] = useState(true);
  const [ReviewsList, setReviewsList] = useState<Review[]>([]);

  useEffect(() => {
    const getStrapiData = async () => {
      const strapiHelper = new StrapiHelper();

      try {
        const res = await strapiHelper.getStrapiData({
          query: `/testimonials`,
        });

        const data = res.data;

        if (data) {
          setReviewsList(data);
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
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto px-4 sm:px-2 py-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl mt-20"
    >
      <Headline Text="Reviews" />
      <CarouselContent>
        {(loading && (
          <div className="flex flex-wrap gap-8 justify-center">
            <Skeleton width={400} height={400} />
            <Skeleton width={400} height={400} />
            <Skeleton width={400} height={400} />
          </div>
        )) ||
          ReviewsList.map((review, index) => (
            <CarouselItem
              key={index}
              className="pl-4 sm:pl-0 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center p-6">
                    <div className="my-4 text-center">
                      <div className="flex gap-2 items-center">
                        <Image
                          src={"/" + review.attributes.Country + ".png"}
                          className="rounded-full"
                          alt="Logo"
                          height={15}
                          width={25}
                        />
                        <p className="text-md">{review.attributes.Name}</p>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">
                        {review.attributes.Date}
                      </p>
                      <div className="flex py-4">
                        {renderStars(review.attributes.stars)}
                      </div>
                    </div>
                    <p className="text-center text-wrap line-clamp-[8]">
                      &quot;{review.attributes.review}
                      &quot;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:h-12 sm:w-12 sm:flex" />
      <CarouselNext className="hidden sm:h-12 sm:w-12 sm:flex" />
    </Carousel>
  );
}
