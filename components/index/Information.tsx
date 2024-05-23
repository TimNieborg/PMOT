import { ImagePlus, NotepadText, Store } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Headline from "../Headline";

export function Information() {
  const t = useTranslations("Homepage.information");
  return (
    <div className="mt-20">
      <Headline Text="Pagina's" />
      <div className="flex flex-col bg-primary rounded-lg md:flex-row mx-auto px-4 sm:px-2 py-4 max-w-7xl justify-between">
        <div className="text-center p-4 my-2">
          <Store className="mx-auto my-2" size={40} />
          <h1 className="text-xl font-bold">{t("webshopTitle")}</h1>
          <p className="text-center my-2">
            {t("webshopSubtitle")}
          </p>
          <Button variant={"secondary"}>{t("cta")}</Button>
        </div>
        <div className="text-center p-4 my-2">
          <ImagePlus className="mx-auto my-2" size={40} />
          <h1 className="text-xl font-bold">{t("mediaTitle")}</h1>
          <p className="text-center my-2">{t("mediaSubtitle")}</p>
          <Button variant={"secondary"}>{t("cta")}</Button>
        </div>
        <div className="text-center p-4 my-2">
          <NotepadText className="mx-auto my-2" size={40} />
          <h1 className="text-xl font-bold">{t("publicationsTitle")}</h1>
          <p className="text-center my-2">
            {t("publicationsSubtitle")}
          </p>
          <Button variant={"secondary"}>{t("cta")}</Button>
        </div>
      </div>
    </div>
  );
}
