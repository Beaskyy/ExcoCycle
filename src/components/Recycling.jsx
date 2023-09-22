import { useEffect } from "react";
import { recyclingSolutions } from "../data";
import Navbar from "./Navbar";

const Recycling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-6">
        <div className="container mx-auto p-4 mt-20">
          <h2 className="mb-4">Solutions</h2>
          <p className="w-full md:w-3/5">
            The solution to limited recycling engagement, where there is
            inadequate participation among individuals, involves a combination
            of strategies and initiatives aimed at increasing awareness,
            convenience, and motivation for recycling. Here are some key
            solutions:
          </p>
          <div className="md:w-full mx-auto mt-10">
            {recyclingSolutions?.map((solution, index) => (
              <div key={index}>
                {index % 2 === 0 && (
                  <div
                    className={`flex justify-between gap-10 items-center md:flex-row flex-col mb-28`}
                  >
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="mb-4">{solution.title}</h2>
                      <p>{solution.description}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={solution.image}
                        alt="rrr"
                        className="rounded-2xl"
                        width={1200}
                      />
                    </div>
                  </div>
                )}
                {index % 2 !== 0 && (
                  <div className="flex justify-between gap-10 items-center md:flex-row flex-col-reverse mb-28">
                    <div className="">
                      <img
                        src={solution.image}
                        alt="waste reduction"
                        className="rounded-2xl"
                        width={1200}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <h2 className="mb-4">{solution.title}</h2>
                      <p>{solution.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="w-full md:w-[600px]">
            Addressing limited recycling engagement requires a holistic approach
            that involves governments, businesses, communities, and individuals
            working together to make recycling more accessible, convenient, and
            appealing. It also requires ongoing efforts to raise awareness and
            educate the public about the importance of recycling and responsible
            waste management.
          </p>
        </div>
      </section>
    </>
  );
};

export default Recycling;
