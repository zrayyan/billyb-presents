interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

const services: Service[] = [
  {
    title: "End-to-End Solutions",
    description: "Complete event production from concept to execution for concerts and parties.",
    icon: "🎯",
    link: "/services/end-to-end",
    color: "blue"
  },
  {
    title: "Talent Booking",
    description: "Professional talent sourcing and booking for live performances.",
    icon: "🎤",
    link: "/services/talent",
    color: "purple"
  },
  {
    title: "Venue Procurement",
    description: "Securing the perfect venues for concerts and events.",
    icon: "🏛️",
    link: "/services/venue",
    color: "green"
  },
  {
    title: "Screen Printing",
    description: "Custom screen printing services for bands and venue merchandise.",
    icon: "🖨️",
    link: "/services/printing",
    color: "red"
  },
  {
    title: "Custom Art Walls",
    description: "Design, build, and install custom art installations for events.",
    icon: "🎨",
    link: "/services/art-walls",
    color: "indigo"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Graffiti Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: 'url(/images/graffiti-bg-2.jpg)',
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-white/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event solutions tailored to your vision
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className={`w-20 h-20 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className={`inline-block bg-${service.color}-600 text-white px-6 py-2 rounded-lg hover:bg-${service.color}-700 transition duration-300 font-medium`}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}