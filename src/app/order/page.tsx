"use client";
import { useState } from "react";
import { products } from "@/lib/products";

type Product = { id: string; name: string; price: number };

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (product: Product) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border-2 border-white/70 bg-white/10 px-4 py-3">
      <span className="font-medium text-white">{product.name}</span>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-white/80 text-sm">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => onAdd(product)}
          className="text-sm bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-lg transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ProductSection({
  title,
  items,
  onAdd,
}: {
  title: string;
  items: Product[];
  onAdd: (product: Product) => void;
}) {
  return (
    <section className="shadow-2xl px-5 py-5 rounded-2xl border-2 border-white">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default function Order() {
  const sixPc = products.filter((p) => p.category === "6pc");
  const twelvePc = products.filter((p) => p.category === "12pc");
  const mix = products.filter((p) => p.category === "mix");

  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index: number) {
    setCart(cart.filter((_, i) => i !== index));
  }

  async function handleCheckout() {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const data = await response.json();
    window.location.href = data.url;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-2 text-white">Place an Order</h1>
      <p className="text-white/80 mb-1">
        Pick your cookies and we&#39;ll handle the rest 🍪
      </p>
      <p className="text-white/80 mb-8">
        * All Products Made Peanut Free in a Peanut Free Environment!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <ProductSection
            title="6 Piece Boxes"
            items={sixPc}
            onAdd={addToCart}
          />
          <ProductSection
            title="12 Piece Boxes"
            items={twelvePc}
            onAdd={addToCart}
          />
          <ProductSection
            title="Mix and Match Boxes"
            items={mix}
            onAdd={addToCart}
          />
        </div>

        <div className="lg:sticky lg:top-24 shadow-2xl rounded-2xl p-5 flex flex-col gap-3 border-2 border-white bg-white/10">
          <h2 className="font-semibold text-lg text-white">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-white/70 text-sm">
              Your cart is empty &mdash; add some cookies to get started!
            </p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm text-white"
                >
                  <span>{item.name}</span>
                  <div className="flex items-center gap-4">
                    <span>${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-200 hover:text-red-100 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/40 pt-3 flex items-center justify-between font-semibold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/50 active:translate-y-0"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
