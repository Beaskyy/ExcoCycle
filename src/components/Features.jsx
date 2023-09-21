import { AiOutlineStop } from "react-icons/ai";
import { GiNuclearWaste } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <section className="bg-slate-100 py-6">
      <div className="container mx-auto p-4 mt-10">
        <h2 className="mb-4">Key Challenges</h2>
        <p>
          At ExcoCycle, we believe that every small action can make a big
          difference.
        </p>
        <div className="md:w-3/4 mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-16">
            <div className="card group hover:bg-slate-800 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h6 className="group-hover:text-white">Waste Generation</h6>
                <div className="flex justify-center items-center w-10 h-10 bg-slate-800 group-hover:bg-gray-200 p-2 rounded-full">
                  <GiNuclearWaste
                    size={30}
                    className="text-white group-hover:text-slate-800"
                  />
                </div>
              </div>
              <p className="group-hover:text-gray-200 mb-4">
                Excessive waste production due to the disposal of items that
                still hold value or can be recycled or upcycled effectively.
              </p>
              <Link
                to="/waste-generation"
                className="py-2 px-6 text-gray-500 border group-hover:border-none rounded-full group-hover:bg-slate-100"
              >
                Solution
              </Link>
            </div>
            <div className="card group hover:bg-slate-800 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h6 className="group-hover:text-white">
                  Limited Recycling Engagement
                </h6>
                <div className="flex justify-center items-center w-10 h-10 bg-slate-800 group-hover:bg-gray-200 p-2 rounded-full">
                  <FaRecycle
                    size={30}
                    className="text-white group-hover:text-slate-800"
                  />
                </div>
              </div>
              <p className="group-hover:text-gray-200">
                Inadequate recycling participation among individuals, leading to
                missed opportunities for responsible waste management.
              </p>
            </div>
            <div className="card group hover:bg-slate-800 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h6 className="group-hover:text-white">Lack of Awareness</h6>
                <div className="flex justify-center items-center w-10 h-10 bg-slate-800 group-hover:bg-gray-200 p-2 rounded-full">
                  <AiOutlineStop
                    size={30}
                    className="text-white group-hover:text-slate-800"
                  />
                </div>
              </div>
              <p className="group-hover:text-gray-200">
                Limited access to educational resources and information on
                climate change and sustainable living practices.
              </p>
            </div>
            <div className="card group hover:bg-slate-800 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h6 className="group-hover:text-white">Fragmented Community</h6>
                <div className="flex justify-center items-center w-10 h-10 bg-slate-800 group-hover:bg-gray-200 p-2 rounded-full">
                  <HiMiniUserGroup
                    size={30}
                    className="text-white group-hover:text-slate-800"
                  />
                </div>
              </div>
              <p className="group-hover:text-gray-200">
                A lack of a cohesive and engaged community focused on
                sustainability, making it difficult for individuals to connect,
                share knowledge, and inspire one another.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
