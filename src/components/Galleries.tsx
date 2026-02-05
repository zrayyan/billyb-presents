export default function Galleries() {
  return (
    <section id="galleries" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Galleries</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our stunning wedding decorations and delicious food presentations
          </p>
        </div>

        {/* Wedding Decoration Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Wedding Decorations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder images - replace with actual images */}
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Wedding Decoration 1</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Wedding Decoration 2</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Wedding Decoration 3</span>
            </div>
          </div>
        </div>

        {/* Food Gallery */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Food Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder images - replace with actual images */}
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Food Item 1</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Food Item 2</span>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Food Item 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}