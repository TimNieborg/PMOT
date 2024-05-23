import React from 'react';
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations("Homepage.contact");
  return (
    <section className="h-fit bg-white grid md:grid-cols-2 lg:gap-12 lg:my-20 my-10 gap-8 w-full px-4 py-8 lg:p-8 rounded-md">
      <div className="flex-col justify-start items-start gap-6 inline-flex my-auto px-4 lg:px-16">
        <div className="rounded-2xl justify-start items-center gap-4 inline-flex">
          <Mail color="#BC201B" />
          <Link href="mailto:info@pmot.nl" className="underline text-xl">
            info@pmot.nl
          </Link>
        </div>

        <div className="rounded-2xl border -ml-4 md:-ml-6 border-secondary justify-start items-center gap-4 px-4 py-1 md:px-6 md:py-3 flex">
          <Phone color="#BC201B" />
          <Link href="tel:+31 (0)597 591596" className="underline font-medium">
            +31 (0)597 591596
          </Link>
        </div>
        <div className="rounded-2xl justify-start items-center gap-4 inline-flex">
          <MapPin color="#BC201B" />
          <p className="text-blacktext-xl font-medium font-roboto">
            Torenstraat 13 9679 BN Scheemda
          </p>
        </div>
      </div>
      <form className="px-8 lg:px-16 flex-col justify-center items-start rounded-md flex">
        <div className="w-full h-full py-12 lg:py-16 flex flex-col gap-4">
          <h1 className="text-neutral-900 mb-3 text-2xl sm:text-3xl md:text-5xl font-semibold font-['Roboto']">
            {t("get_contact")}
          </h1>
          <div className=" flex-col justify-start items-start flex gap-6">
            <input
              type="text"
              placeholder={t("name")}
              className="h-11 px-2 w-full bg-white rounded-lg border border-gray-500"
            />
            <input
              type="email"
              placeholder={t("email")}
              className="px-2 flex-grow-1 h-11 w-full bg-white rounded-lg border border-gray-500"
            />
            <textarea
              placeholder={t("message")}
              className=" px-2 h-36 w-full p-3 bg-white rounded-lg border border-gray-500"
            ></textarea>
          </div>
          <Button variant="secondary">{t("cta")}</Button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm
