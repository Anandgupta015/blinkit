import categories from "../data/categories";

const iconMap = {
  fruits: "🍎",
  dairy: "🥛",
  snacks: "🍟",
  beverages: "🥤",
  household: "🧴",
};

function CategoryIcons({ selected, onSelect }) {
  return (
    <section className="mb-4">
      <div className="mb-2 text-xs font-semibold text-gray-700">
        Shop by Category
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex min-w-[80px] flex-col items-center rounded-2xl border px-3 py-2 text-center text-[11px] ${
              selected === cat.id
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-100 bg-white text-gray-700"
            }`}
          >
            <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-lg">
              {iconMap[cat.id] || "🛒"}
            </div>
            <span className="line-clamp-2 leading-tight">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryIcons;
