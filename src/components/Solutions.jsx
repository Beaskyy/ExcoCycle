import rrr from "../assets/rrr.png"
import wasteReduction from "../assets/waste-reduction.png"
import epr from "../assets/products.jpg"
import recycle from "../assets/recycle.png"
import seperation from "../assets/seperation.png"
import compost from "../assets/compost.jpg"
import cleanup from "../assets/cleanup.png"

const Solutions = () => {
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
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col mb-28">
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-4">Reduce, Reuse, Recycle</h2>
              <p>
                Encourage individuals and businesses to follow the "reduce,
                reuse, recycle" hierarchy. Reduce the consumption of single-use
                products, reuse items whenever possible, and ensure proper
                recycling of materials.
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={rrr}
                alt="rrr"
                className="rounded-2xl"
                width={1200}
              />
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col-reverse mb-28">
            <div className="">
              <img
                src={wasteReduction}
                alt="waste reduction"
                className="rounded-2xl"
                width={1200}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h2 className="mb-4">Waste Reduction Education</h2>
              <p>
                Implement educational programs that raise awareness about the
                environmental impact of excessive waste generation and teach
                people how to reduce waste in their daily lives.
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col mb-28">
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-4">Extended Producer Responsibility (EPR)</h2>
              <p>
                Hold manufacturers responsible for the entire life cycle of
                their products, including their disposal. This encourages
                companies to design products with recyclability and
                sustainability in mind.
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={epr}
                alt=""
                className="rounded-2xl"
                width={1200}
              />
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col-reverse mb-28">
            <div className="">
              <img
                src={recycle}
                alt=""
                className="rounded-2xl"
                width={1200}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h2 className="mb-4">Mandatory Recycling Programs</h2>
              <p>
                Enforce recycling programs in communities and businesses to
                ensure that recyclable materials are properly sorted and
                collected.
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col mb-28">
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-4">Waste Separation and Collection</h2>
              <p>
                Improve waste separation and collection systems to make it
                easier for people to recycle and dispose of waste correctly.
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={seperation}
                alt=""
                className="rounded-2xl"
                width={1200}
              />
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col-reverse mb-28">
            <div className="">
              <img
                src={compost}
                alt=""
                className="rounded-2xl"
                width={1200}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h2 className="mb-4">Composting</h2>
              <p>
                Promote composting of organic waste to reduce the amount of
                organic matter sent to landfills and incinerators.
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center md:flex-row flex-col mb-28">
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-4">Community Engagement</h2>
              <p>
              Engage communities in waste reduction efforts through local initiatives, clean-up events, and community gardens.
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={cleanup}
                alt=""
                className="rounded-2xl"
                width={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
