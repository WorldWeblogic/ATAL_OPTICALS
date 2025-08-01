import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Reasons to consider lenses",
      answer:
        "If you are just considering getting contacts for the first time, you have already been wearing glasses for a while. You are probably already aware of some of the advantages that contact lenses have over glasses. However, you should read on to see other areas where lenses are superior.",
    },
    {
      question: "Better vision overall",
      answer:
        'Because contact lenses are positioned on your eye, rather than sitting away from the eyes like glasses, you will enjoy much better peripheral vision, and thereby a wider view in general. You will be able to see far better when you move your eyes to either side, as you are always still looking through the center of the lens. This is called the "optic zone," and contacts have the obvious advantage, as when you wear glasses you can only enjoy this zone when looking straight ahead.In addition to peripheral advantages, contact lenses also allow you to see things in a way that is more like having perfect vision. Glasses can distort your vision, giving you a false perception of the size and position of everything you are looking at. For example, corrective glasses for nearsighted people make things appear smaller, while glasses for the farsighted cause the wearer to see everything as larger than it actually is.',
    },
    {
      question: "Less annoying effects from weather and movement",
      answer:
        "One of the most annoying things about glasses is how they are affected by the weather and by your own body heat. Every glasses wearer knows how annoying it can be to deal with rain. Almost as bad is when you walk outside on a humid day, or walk inside from a cold outdoors, and your glasses fog up. Likewise, when you try to exercise or do some other activity that works up a sweat, your glasses can not only become steamy so that you cant see clearly, but they can also start to slide down your nose.Besides sliding around due to sweat, glasses may bounce around on your face or even fall off when you are running and doing other physical activity. Imagine the freedom your contact lenses will give you from all of these unpleasant circumstances.",
    },
    {
      question: "More convenient and comfortable",
      answer:
        "Glasses can be uncomfortable in general, not only in the above mentioned conditions. They may feel heavy on your nose after a while, or they can rub you the wrong way behind your ears. And its nearly impossible to wear the latest style in sunglasses when you have to wear your regular specs all the time. Even if you go for some prescription sunglasses, there are differences between those and regular sunglasses. There are fewer styles to choose from, and the lenses must be flatter to avoid distortion.",
    },
    {
      question: "Are contact lenses right for you?",
      answer:
        "Despite all the wonderful characteristics of the contact lens, some people simply do not care for them. If you do want to wear contacts, however, chances are that you can. No matter if you are nearsighted, farsighted, or have astigmatism or presbyopia, there are lenses available to suit your needs. Contacts are obviously more convenient for when you are doing physical activities, and the best part is that when you do not feel like using them, you can always take them out and wear your glasses instead.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="flex mb-20">
        <div className="mr-6">
          <div className="bg-red-600 p-10 rounded-xl mt-10 ml-26 min-w-xl">
            <p className="text-white text-4xl">
              <span className="font-bold mr-4">Book</span>Eye Exam
            </p>
            <hr className="text-white text-xl mt-2 w-56"></hr>
            <div className="flex">
              <div className="flex flex-col mt-10 mr-26">
                <label className="text-white text-xl">Name</label>
                <input
                  type="text"
                  className="outline-none border-b-2 text-white w-52"
                />
              </div>
              <div className="flex flex-col mt-10">
                <label className="text-white text-xl">Your Email</label>
                <input
                  type="text"
                  className="outline-none border-b-2 text-white w-52"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col mt-10 mr-26">
                <label className="text-white text-xl">Phone Number</label>
                <input
                  type="number"
                  className="outline-none border-b-2 text-white w-52"
                />
              </div>
              <div className="flex flex-col mt-10">
                <label className="text-white text-xl">
                  Choose Our location
                </label>
                <input
                  type="text"
                  className="outline-none border-b-2 text-white w-52"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col mt-10 mr-26">
                <label className="text-white text-xl">City</label>
                <input
                  type="text"
                  className="outline-none border-b-2 text-white w-52"
                />
              </div>
              <div className="flex flex-col mt-10">
                <label className="text-white text-xl">Postal Code</label>
                <input
                  type="number"
                  className="outline-none border-b-2 text-white w-52"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col mt-10 ">
                <label className="text-white text-xl">Address</label>
                <input
                  type="text"
                  className="outline-none border-b-2 text-white w-132"
                />
              </div>
            </div>
            <button className="bg-white p-3 mt-6 rounded-xl text-xl font-semibold flex items-center hover:cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              Submit
              <span className="ml-4 p-2 rounded-lg bg-black hover:bg-white hover:text-black">
                <FaArrowRight className="hover:rotate-[-45deg] text-white hover:text-black" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="max-w-5xl mx-auto p-6 min-h-[500px] bg-white mt-10 mr-10">
            <h1 className="text-3xl font-bold mb-3 text-red-600">FAQ</h1>
            <p className="text-4xl">
              Frequently Asked <span className="font-bold">Questions</span>
            </p>
            <hr className="w-102 mb-6 mt-2"></hr>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center focus:outline-none hover:cursor-pointer">
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${openIndex === index
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
