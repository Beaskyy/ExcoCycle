import heroImg from "../assets/hero-img.png"

const Hero = () => {
  return (
    
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-4 md:mt-20">
          <h1 className="text-6xl font-semibold">Promoting the science of ecology and care across the world</h1>
          <p className="my-4">Empowering individuals to live more sustainably, contribute to the circular economy, and make a positive impact on our planet.</p>
          <button className="bg-[#367E02] text-lime-100 mt-2">Save the Planet</button>
        </div>
        <div className="mt-10">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero