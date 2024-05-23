import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <div className="bg-primary mt-12">
            <div className="mx-auto px-4 sm:px-2 py-4 max-w-7xl">
                <div className="flex flex-col gap-8 md:gap-0  items-center  md:flex-row justify-between my-24">
                    <div className="mx-auto md:mx-0">
                        <Image
                            src="/logo-big.png"
                            alt="Logo"
                            height={100}
                            width={200}
                        />
                    </div>
                    <div className="flex flex-col items-center mt-12 max-w-xs sm:mt-0">
                        <div className="p-1 w-full max-w-xs">
                            <h1 className="font-bold text-lg md:text-xl text-center">
                                {t("newsletterTitle")}
                            </h1>
                            <p className="mt-1 text-center">
                                {t("newsletterSubTitle")}
                            </p>
                        </div>
                        <div className="flex w-full max-w-xs items-center space-x-2 mt-2 sm:mt-4">
                            <Input type="email" placeholder={t("form.email")} />
                            <Button type="submit" variant={"secondary"}>
                                {t("form.subscribe")}
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:justify-center sm:flex-row text-left gap-9 mt-6 sm:mt-0">
                        <div>
                            <h1 className="font-bold text-xl mb-1">{t("data")}</h1>
                            <ul>
                                <li>PMOT</li>
                                <li>Torenstraat 13</li>
                                <li>9679 BN Scheemda</li>
                                <li>Nederland</li>
                                <li>+31 (0)597 591596</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl mb-1">
                                {t("information")}
                            </h1>
                            <Link
                                href="mailto:info@pmot.nl"
                                className="text-muted-foreground hover:text-tertiary"
                            >
                                info@pmot.nl
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-tertiary"
                            >
                                {t("company-information")}
                            </Link>
                            <Link
                                href="https://www.facebook.com/PMOT.nl"
                                className="text-muted-foreground hover:text-tertiary"
                                target="_blank"
                            >
                                Facebook
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/pim-van-dort-7a2ba210"
                                className="text-muted-foreground hover:text-tertiary"
                                target="_blank"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-tertiary"
                            >
                                KVK: 02057913
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <div className="mx-auto px-4 sm:px-2 max-w-7xl text-center">
                    <div className="py-2">
                        <p className="text-muted-foreground text-white">
                            © {new Date().getFullYear()} PMOT - All rights reserved
                        </p>
                        <small className="text-muted-foreground text-slate-200 text-xs">
                            Made with ❤️ by{" "} Noorderpoort students
                        </small>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}
