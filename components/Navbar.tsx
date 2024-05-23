import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import LanguageSelector from "./LanguageSelector";
import "@fontsource/roboto";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "@/lib/Link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";
import { Categories } from "./Categories";
export function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="top-0 right-0 left-0 z-40 bg-primary drop-shadow-lg shadow-lg">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-2 py-4 max-w-7xl">
        <nav className="md:flex md:flex-row flex-col md:items-center gap-6 md:gap-5 lg:gap-6 hidden font-medium text-lg md:text-sm">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg md:text-base"
          >
            <Image src="/logo.png" alt="Logo" height={100} width={200} />
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="gap-6 grid font-medium text-lg">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <Image src="/logo.png" alt="Logo" height={100} width={200} />
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("items.home")}
              </Link>
              <Link
                href="/webshop"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("items.webshop")}
              </Link>
              <Link
                href="/media"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("items.media")}
              </Link>
              <Link
                href="/publications"
                className="text-muted-foreground hover:text-foreground"
              >
                {t("items.publications")}
              </Link>
              <Categories translations={t("categories")} />
              <LanguageSelector />
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4 md:ml-auto w-full">
          <form className="sm:flex-initial flex-1 mx-auto">
            <div className="relative">
              <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("search")}
                className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px]"
              />
            </div>
          </form>
          <Link href="/webshop/shoppingcart" className="hover:text-foreground">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <SignedOut>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 rounded-full"
                >
                  <CircleUser className="w-6 h-6" />
                  <span className="sr-only">Toggle language menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/sign-in" className="flex items-center gap-2">
                    {t("signin")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sign-up" className="flex items-center gap-2">
                    {t("signup")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedOut>
          <SignedIn>
            <ClerkLoading>
              <Skeleton className="w-[30px] h-[30px] rounded-full" />
            </ClerkLoading>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="bg-secondary hidden sm:block">
        <div className="flex justify-between items-center mx-auto px-4 sm:px-2 py-3 max-w-7xl">
          <div className="flex gap-1 text-white">
            <Categories translations={t("categories")} />
          </div>
          <div className="flex gap-5 text-white font-roboto">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              {t("items.home")}
            </Link>
            <Link
              href="/webshop"
              className="text-muted-foreground hover:text-foreground"
            >
              {t("items.webshop")}
            </Link>
            <Link
              href="/media"
              className="text-muted-foreground hover:text-foreground"
            >
              {t("items.media")}
            </Link>
            <Link
              href="/publications"
              className="text-muted-foreground hover:text-foreground"
            >
              {t("items.publications")}
            </Link>
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
