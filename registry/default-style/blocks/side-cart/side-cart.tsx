import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react"
import * as React from "react"
import {Label} from "@/components/ui/label";

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface SideCartProps extends React.HTMLAttributes<HTMLDivElement> {
  cartItems: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  variant?: "simple-list" | "detailed-controls" | "checkout-ready";
}

export default function SideCart({
  cartItems,
  isOpen,
  onClose,
  variant = "detailed-controls",
  className,
  ...props
}: SideCartProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 5.00 : 0; // Example fixed shipping
  const taxRate = 0.08; // Example tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const [discountCode, setDiscountCode] = React.useState("");
  const [discountApplied, setDiscountApplied] = React.useState(0);

  const applyDiscount = () => {
    if (discountCode === "SAVE10") { // Simple mock discount
      setDiscountApplied(subtotal * 0.10);
    } else {
      setDiscountApplied(0);
    }
  };

  const currentTotal = total - discountApplied;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      )}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-96 bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
        {...props}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close cart</span>
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4" />
                <p>Your cart is empty.</p>
                <Link href="/products">
                  <Button variant="link" onClick={onClose}>Start Shopping</Button>
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover aspect-square"
                  />
                  <div className="flex-1 grid gap-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    {variant === "detailed-controls" && (
                      <div className="flex items-center gap-2 mt-1">
                        <Button variant="outline" size="icon" className="h-6 w-6">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input type="number" value={item.quantity} className="w-12 h-6 text-center text-xs" readOnly />
                        <Button variant="outline" size="icon" className="h-6 w-6">
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4 border-t space-y-3">
              {variant === "checkout-ready" && (
                <div className="grid gap-2">
                  <Label htmlFor="discount">Discount Code</Label>
                  <div className="flex gap-2">
                    <Input id="discount" placeholder="Enter code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
                    <Button onClick={applyDiscount}>Apply</Button>
                  </div>
                  {discountApplied > 0 && (
                    <p className="text-sm text-green-500">Discount applied: -${discountApplied.toFixed(2)}</p>
                  )}
                </div>
              )}

              <div className="space-y-1 text-sm">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax ({taxRate * 100}%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {discountApplied > 0 && (
                  <div className="flex items-center justify-between text-green-500">
                    <span>Discount</span>
                    <span>-${discountApplied.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between font-bold text-lg border-t pt-2 mt-2">
                  <span>Total</span>
                  <span>${currentTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button size="lg" className="w-full">Proceed to Checkout</Button>
                <Button variant="outline" className="w-full" onClick={onClose}>Continue Shopping</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
