import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Groceries in 10 minutes",
    subtitle: "Fruits, veggies, milk, bread & more",
    badge: "Superfast Delivery",
    bg: "from-green-500 to-emerald-400",
  },
  {
    id: 2,
    title: "Snacks & Munchies",
    subtitle: "Chips, chocolates, biscuits & more",
    badge: "Evening Cravings",
    bg: "from-orange-500 to-amber-400",
  },
  {
    id: 3,
    title: "Household Essentials",
    subtitle: "Cleaners, detergents & daily use items",
    badge: "Monthly Bachat",
    bg: "from-sky-500 to-cyan-400",
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section className="mb-4">
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${current.bg} px-4 py-5 text-white shadow-md`}
      >
        <div className="max-w-md">
          <div className="mb-2 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-lime-300" />
            {current.badge}
          </div>
          <h2 className="text-xl font-extrabold sm:text-2xl">
            {current.title}
          </h2>
          <p className="mt-1 text-xs text-lime-50 sm:text-sm">
            {current.subtitle}
          </p>
          <p className="mt-3 text-[11px] font-medium text-lime-100">
            No minimum order • Best prices • Everyday essentials
          </p>
        </div>

        {/* dots */}
        <div className="mt-4 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
