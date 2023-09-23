import { useEffect } from "react";
import { awarenessSolutions } from "../data";
import Navbar from "./Navbar";

const Awareness = () => {
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
            The solution to the lack of awareness regarding climate change and
            sustainable living practices involves a concerted effort to provide
            accessible and engaging educational resources while fostering a
            culture of environmental consciousness. Here are some key solutions:
          </p>
          <div className="md:w-full mx-auto mt-10">
            {awarenessSolutions?.map((solution, index) => (
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
            Addressing the lack of awareness requires a multifaceted approach
            that involves education, engagement, and collaboration among
            governments, educational institutions, civil society, businesses,
            and the media. Raising awareness and understanding of climate change
            and sustainable living practices is essential to drive positive
            environmental and societal change.
          </p>
        </div>
      </section>
    </>
  );
};

export default Awareness;
