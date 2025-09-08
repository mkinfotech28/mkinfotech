import { MessageSquare, Star, StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    feedback:
      "MK INFOTECH transformed our online presence. Their solutions are efficient, reliable, and tailored to our needs. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Entrepreneur",
    feedback:
      "The team is professional and responsive. Our website maintenance and support have never been smoother!",
    rating: 4,
  },
  {
    name: "Emily Davis",
    role: "Small Business Owner",
    feedback:
      "Their expert guidance helped us scale quickly and maintain consistent uptime. Excellent service and support!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="p-10 bg-white flex flex-col items-center">
      <h2 className="text-xl md:text-3xl font-bold mb-8 text-center">
        What Our Clients Say
      </h2>

      <div className="max-w-3xl text-center mb-12 px-4">
        <p className="text-lg text-gray-700 mb-4">
          We take pride in building strong relationships with our clients by
          delivering top-notch solutions and unmatched support.
        </p>
        <p className="text-gray-600">
          Here’s what some of our satisfied clients have to say about working
          with us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700 text-sm italic mb-4 text-center">
                “{testimonial.feedback}”
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-md font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
              <div className="flex justify-center space-x-1">
                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-yellow-400" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
