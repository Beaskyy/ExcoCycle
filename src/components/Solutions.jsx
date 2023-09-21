import { useEffect } from "react";
import { wasteSolutions } from "../data";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6">
      <div className="container mx-auto p-4 mt-20">
        <h2 className="mb-4">Solutions</h2>
        <p className="w-full md:w-3/5">
          The solution to excessive waste generation, particularly due to the
          disposal of items that still hold value or can be recycled or upcycled
          effectively, involves a combination of strategies and actions at
          different levels of society. Here are some key solutions:
        </p>
        <div className="md:w-full mx-auto mt-10">
          {wasteSolutions?.map((solution, index) => (
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
        <p className="w-full md:w-[600px]">In conclusion, Solving the problem of excessive waste generation requires a multifaceted approach involving individuals, businesses, governments, and organizations working together to reduce waste and promote sustainable practices.</p>
      </div>
    </section>
  );
};

export default Solutions;
