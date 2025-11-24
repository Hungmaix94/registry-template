import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default-style/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/default-style/ui/card"
import { Input } from "@/registry/default-style/ui/input"

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle?: string;
  cartItems: CartItem[];
  variant?: "summary" | "full" | "empty";
}

export default function Cart({ sectionTitle, cartItems, variant = "full", className, ...props }: CartProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00; // Example fixed shipping
  const taxRate = 0.08; // Example tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  if (variant === "empty" || cartItems.length === 0) {
    return (
      <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
        <div className="container px-4 md:px-6 text-center">
          <Card className="max-w-md mx-auto p-8 flex flex-col items-center gap-4">
            <ShoppingCartIcon className="h-16 w-16 text-muted-foreground" />
            <CardTitle className="text-2xl font-bold">Your cart is empty</CardTitle>
            <CardDescription className="text-muted-foreground">
              Looks like you haven't added anything to your cart yet.
            </CardDescription>
            <Link href="/products">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        {sectionTitle && (
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{sectionTitle}</h2>
            </div>
          </div>
        )}

        {variant === "summary" && (
          <Card className="max-w-xl mx-auto p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">{cartItems.length} items</span>
            </div>
            <div className="text-lg font-semibold">${total.toFixed(2)}</div>
            <Link href="/cart">
              <Button size="sm">View Cart</Button>
            </Link>
          </Card>
        )}

        {variant === "full" && (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Shopping Cart</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover aspect-square"
                      />
                      <div className="flex-1 grid gap-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          className="w-16 text-center"
                          readOnly // For demonstration purposes
                        />
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
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
                  <div className="flex items-center justify-between font-bold text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full mt-4">Proceed to Checkout</Button>
                  <Link href="/products" className="w-full">
                    <Button variant="outline" className="w-full mt-2">Continue Shopping</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
