"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ToastButtonProps {
  Text: string;
}

export default function ToastButton({ Text }: ToastButtonProps) {
  return (
    <Button
      variant="secondary"
      className="flex items-center gap-2"
      onClick={() => toast("Product toegevoegd aan winkelwagen.")}
    >
      <ShoppingCart />
      {Text}
    </Button>
  );
}
