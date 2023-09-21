import React from "react";
import Navbar from "./Navbar";
import aboutImg from "../assets/about-us.png";

const About = () => {
  return (
    <main>
      <Navbar />
      <section className="container mx-auto pt-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-24 md:mt-[120px] p-3">
            <h1 className="font-semibold">Who we are</h1>
            <p className="my-4">
              ExcoCycle is a comprehensive and innovative sustainability-focused
              application designed to empower individuals to live more
              sustainably, contribute to the circular economy, and make a
              positive impact on our planet.
            </p>
            <p>
              At its core, ExcoCycle serves as a multifaceted platform that
              brings together a vibrant community of eco-conscious individuals,
              creating a synergy of positive environmental change.
            </p>
            <button className="bg-primary text-gray-100 mt-6">
              Learn more
            </button>
          </div>
          <div className="md:mt-10 md:ml-32">
            <img src={aboutImg} alt="about-img" className="rounded-xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
