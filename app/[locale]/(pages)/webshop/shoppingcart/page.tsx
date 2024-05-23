import React from "react";
import { Trash } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

function ShoppingCart() {
  const t = useTranslations("Shoppingcart");
  return (
    <section className=" mx-auto px-4 sm:px-2 max-w-5xl mt-14">
      <h1 className="mb-2 text-xl text-black font-medium font-monserrat">
        {t("summary")}
      </h1>
      <div className="grid md:gap-8 md:grid-cols-2">
        <div className="grid col-span-1">
          <div>
            <div className=" max-w-sreen border-t border-gray-300">
              <ul>
                <li className="flex px-4 py-6 sm:px-6 border-t border-gray-300">
                  <div className="flex-shrink-0">
                    <img
                      src="https://pmot.nl/wp-content/uploads/2016/02/1184-pack-300x300.jpg"
                      alt="product"
                      className="hidden sm:flex w-20 sm:w-24 sm:h-full rounded-md"
                    />
                  </div>
                  <div className="ml-6 flex flex-1 flex-col ">
                    <div className="flex justify-between">
                      <div className="min-w-0 ">
                        <h1 className="font-medium text-gray-700 hover:text-gray-800">
                          Gigo 1184 Elektriciteitset
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                          Vanaf 6 jaar. De ideale startset over elektriciteit.
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <p className="font-medium text-gray-900 hidden sm:flex">
                          €32.00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 justify-end mt-4">
                      <p className="sm:hidden font-medium text-gray-900">
                        €32.00
                      </p>

                      <button
                        type="button"
                        className="flex items-center gap-3 px-1 py-1 border rounded-md border-gray-300 "
                      >
                        <span className="border-r border-gray-300 px-2">-</span>
                        <span>2</span>
                        <span className="border-l border-gray-300 px-2">+</span>
                      </button>
                      <button
                        type="button"
                        className="flex p-2.5 items-center justify-centertext-black hover:text-gray-500"
                      >
                        <span className="sr-only">Remove</span>
                        <Trash color="#353535" className="hover:text-white" />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-md bg-white shadow-sm">
          <div className="space-y-6 px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm">{t("subtotal")}</p>
              <p className="text-sm font-medium text-gray-900">€64.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">{t("shipping")}</p>
              <p className="text-sm font-medium text-gray-900">€6.00</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-6">
              <dt className="text-base font-medium">{t("total")}</dt>
              <dd className="text-base font-medium text-gray-900">€70.00</dd>
            </div>
          </div>
          <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
            <Button variant="secondary" className="w-full">
              {t("confirm_order")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
