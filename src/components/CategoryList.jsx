import categories from '../data/categories'

function CategoryList({ selected, onSelect }) {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 py-3 text-sm">
        <button
          onClick={() => onSelect('all')}
          className={`whitespace-nowrap rounded-full px-4 py-1 ${
            selected === 'all'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`whitespace-nowrap rounded-full px-4 py-1 ${
              selected === cat.id
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
