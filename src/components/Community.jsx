import { useEffect } from "react";
import { communitySolutions } from "../data";
import Navbar from "./Navbar";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-6">
        <div className="container mx-auto p-4 mt-20">
          <h2 className="mb-4">Solutions to fragmented community</h2>
          <p className="w-full md:w-3/5">
            The solution to a fragmented community lacking cohesion and
            engagement in sustainability efforts involves fostering a sense of
            unity, creating platforms for collaboration, and promoting shared
            values and goals. Here are some key solutions to address this issue:
          </p>
          <div className="md:w-full mx-auto mt-10">
            {communitySolutions?.map((solution, index) => (
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
            Fostering a cohesive and engaged community focused on sustainability
            requires ongoing effort, effective communication, and a shared
            commitment to creating a more eco-conscious and resilient community.
            By building connections and empowering individuals, communities can
            drive positive change toward a sustainable future.
          </p>
        </div>
      </section>
    </>
  );
};

export default Community;
