import Link from "next/link";

export default function Success() {
  return (
    <main className="max-w-xl mx-auto py-16 px-6 text-center">
      <div className="shadow-2xl rounded-2xl border-2 border-white px-8 py-10">
        <span className="text-5xl" aria-hidden>
          🍪
        </span>
        <h1 className="text-3xl font-bold mt-4 mb-4 text-white">
          Order Placed!
        </h1>
        <p className="text-white/90">
          Thank you for your order! We&apos;ll be in touch soon to arrange
          delivery.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/50 active:translate-y-0"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
