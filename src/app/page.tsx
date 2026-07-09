import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
            Handmade Crinkle Cookies, Baked With Love
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-md">
            Soft, chewy, and dusted in powdered sugar &mdash; a taste of home
            in every box. Peanut free, always.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/order"
              className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/50 active:translate-y-0"
            >
              Order Now
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-white/20 px-6 py-3 font-semibold text-white border-2 border-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/30 active:translate-y-0"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-4 border-white rounded-2xl shadow-2xl shrink-0">
          <Image
            src="/arriana-headshot.jpeg"
            alt="Arriana Cylthiel Cruz"
            width={260}
            height={260}
            priority
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="mt-16 shadow-2xl rounded-2xl border-2 border-white px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Meet The Creator
        </h2>
        <p className="text-lg text-white leading-relaxed">
          Crinkle Cookies may have originated in the U.S., but they became a
          beloved treat in the Philippines, where my mom remembers enjoying
          them as a rare and special dessert from her childhood. I started
          baking them whenever she craved a taste of home, and in early 2024,
          I turned that love into a small home business.
        </p>
      </section>
    </div>
  );
}
