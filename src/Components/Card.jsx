export default function Card({ items }) {
  const { title, price, rating, image } = items;
  const { rate, count } = rating;

  const renderStars = (rate) => {
    const stars = Math.round(rate);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-200">
      <img
        src={image}
        className="w-full h-60 object-cover mb-4 rounded-lg shadow-md"
        alt="Product"
      />
      <h1 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
        {title}
      </h1>
      <div className="text-xl text-green-600 font-bold mb-1">{price}$</div>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500">{renderStars(rate)}</span>
        <span className="text-gray-600 text-sm ml-2">({count} reviews)</span>
      </div>
    </div>
  );
}
