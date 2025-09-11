import { MessageSquare, Star, StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Samantha",
    role: "Marketing Manager",
    feedback:
      "Fantastic experience! The team was professional, efficient, and really understood our needs. Highly recommended.",
    rating: 5,
  },
  {
    name: "Hilal Ahmed Butt",
    role: "Entrepreneur",
    feedback:
      "I had the privilege of working with Ms. Manjot and her company on my app’s development. Their professionalism, dedication, and attention to detail made the process seamless and successful.I wholeheartedly recommend her and her team to anyone seeking a dependable, skilled, and quality-driven development partner.",
    rating: 4,
  },
  {
    name: "Ravinder Kumar",
    role: "Business Owner",
    feedback:
      "Working with this team has been a game-changer for our business. Their expertise, attention to detail, and commitment to delivering results exceeded our expectations. The communication was seamless and the final product looks and performs even better than we imagined. I highly recommend them to anyone looking for a reliable and innovative partner.",
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
