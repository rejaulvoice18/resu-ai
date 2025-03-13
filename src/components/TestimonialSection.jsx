import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Resu AI helped me land my dream job!",
      author: "John Doe",
      image:
        "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132067/static/erik-lucatero-d2msdujjl2g-unsplashjpg_1677132070_42397.jpg",
    },
    {
      id: 2,
      text: "The AI-powered suggestions were incredibly helpful and insightful.",
      author: "Jane Smith",
      image:
        "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132067/static/prince-akachi-l3ihxodmyhq-unsplashjpg_1677132070_25995.jpg",
    },
    {
      id: 3,
      text: "Highly recommend Resu AI to anyone looking for a job.",
      author: "David Lee",
      image:
        "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132065/static/aiony-haust-3tll_97hnjo-unsplashjpg_1677132070_98905.jpg",
    },
    {
      id: 4,
      text: "The resume templates are modern and professional looking.",
      author: "Sarah Jones",
      image:
        "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475528/static/erik-lucatero-d2msdujjl2g-unsplashhrd1_1740475524_60311.jpg",
    },
    {
      id: 5,
      text: "Resu AI made the resume building process so much easier.",
      author: "Michael Brown",
      image:
        "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475544/static/erik-lucatero-d2msdujjl2g-unsplashxllv_1740475541_10974.jpg",
    },
    {
      id: 6,
      text: "I received more interview calls after using Resu AI.",
      author: "Emily Wilson",
      image:
        "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475562/static/erik-lucatero-d2msdujjl2g-unsplashzjtv_1740475560_71871.jpg",
    },
  ];

  return (
    <div className="bg-black py-14">
      <div className=" text-white py-12 px-5 flex flex-col items-center w-10/12 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row gap-5 ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl p-6 bg-gray-800 flex  items-center gap-3"
            >
              <div className="w-[52px] h-[52px] ">
                <img
                  src={testimonial.image}
                  className="w-[52px] h-[52px] rounded-full object-cover "
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <FaQuoteLeft className="inline-block mr-2" />
                <span className="">{testimonial.text}</span>
                <FaQuoteRight className="inline-block ml-2" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-sky-500 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-sky-700">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
