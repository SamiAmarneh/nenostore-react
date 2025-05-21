
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Chef",
    content: "The kitchen knife set is incredible! Professional quality at a great price. I use these daily and they've made cooking so much more enjoyable.",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "DIY Enthusiast",
    content: "The power drill exceeded my expectations. It's powerful, the battery lasts for ages, and the included bits are high quality. Perfect for all my home projects.",
    avatar: "https://i.pravatar.cc/150?img=53"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Interior Designer",
    content: "I recommend Neno Store to all my clients. Their organization products are stylish and functional, and the customer service is always wonderful.",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neno-dark mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-neno-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
              <div className="mt-4 flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
