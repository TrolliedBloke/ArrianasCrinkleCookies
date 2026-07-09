import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-pink-300 text-white shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-6 text-sm">
        <p className="flex items-center gap-2 font-semibold">
          <span aria-hidden>🍪</span>
          Arriana&#39;s Crinkle Cookies
        </p>
        <div className="flex gap-6 font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/order" className="hover:underline">
            Order
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <p className="text-white/80">
          &copy; {new Date().getFullYear()} Made with 🤍 and crinkles.
        </p>
      </div>
    </footer>
  );
}
