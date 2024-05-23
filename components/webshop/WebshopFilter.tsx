import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentProps<typeof Slider>;

export function WebshopFilter({ className, ...props }: SliderProps) {
  return (
    <div>
      <p className="text-lg font-semibold mb-3">Leeftijd</p>
      <div className="flex justify-between gap-6">
        <div>
          <p className="text-sm">Vanaf</p>
          <div className="border border-3 rounded-md border-gray-400">
            <p className="px-9 py-2 text-center">4</p>
          </div>
        </div>
        <div>
          <p className="text-sm">Tot</p>
          <div className="border border-3 rounded-md border-gray-400">
            <p className="px-9 py-2 text-center">14</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Slider
          defaultValue={[100]}
          max={100}
          step={1}
          className={cn("w-[100%]", className)}
          {...props}
        />
      </div>
      <div className="mt-5">
        <Input type="email" placeholder="🔎 Zoek in producten" />
      </div>
      <div className="mt-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Merken</AccordionTrigger>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Archa
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Artec
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Genii
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Gigo
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              IQ Key
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Lasy
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Thames & Kosmos
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Modelbakstenen
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Stekuworld
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Hoffmann & Hammer
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Overige
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Natuurkunde
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Onderwerpen</AccordionTrigger>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Houtwerk
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Rekenen
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Hoogbegaafdheid
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Werkbanken & Tafels
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Gereedschap
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Aanbiedingen
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Lesboeken
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Gigo techniek
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Brick &quot;R&quot; Knowledge
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Gigo Learning Lab
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Onderwijssubsidies
            </AccordionContent>
            <AccordionContent className="flex items-center hover:underline gap-2">
              <Checkbox id="terms" />
              Robotica
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
