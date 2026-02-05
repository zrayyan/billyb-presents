export default function Bio() {
  return (
    <section id="contact" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Graffiti Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/graffiti-bg.jpg)',
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-gray-50/80"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About BillyB</h2>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              [Short personal bio placeholder - BillyB is a passionate event producer specializing in live concerts and parties.
              With years of experience in the music industry, BillyB brings creativity and expertise to every event,
              from talent booking to custom art installations. Committed to creating unforgettable experiences for concert-goers.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}