const offers = [
  {
    id: 1,
    title: "Up to 50% off",
    desc: "Snacks & munchies",
    tag: "Trending",
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    desc: "Cold drinks & juices",
    tag: "Limited",
  },
  {
    id: 3,
    title: "₹99 Store",
    desc: "Daily essentials",
    tag: "Budget",
  },
  {
    id: 4,
    title: "Flat 25% off",
    desc: "Home cleaners",
    tag: "Household",
  },
];

function OffersStrip() {
  return (
    <section className="mb-4">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-700">
        <span>Best Offers for You</span>
        <span className="text-[11px] text-green-600">View all</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="min-w-[150px] rounded-2xl bg-gradient-to-br from-yellow-100 via-white to-amber-50 p-3 shadow-sm"
          >
            <div className="text-[10px] font-semibold text-amber-700">
              {offer.tag}
            </div>
            <div className="mt-1 text-xs font-bold text-gray-900">
              {offer.title}
            </div>
            <div className="mt-0.5 text-[11px] text-gray-600">
              {offer.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OffersStrip;
