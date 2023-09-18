import heroImg from "../assets/hero-img.png"

const Hero = () => {
  return (
    
    <section className="container mx-auto pt-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-24 md:mt-[150px] p-3">
          <h1 className="font-semibold">Promoting the science of ecology and care across the world</h1>
          <p className="my-4">Empowering individuals to live more sustainably, contribute to the circular economy, and make a positive impact on our planet.</p>
          <button className="bg-primary text-gray-100 mt-2">Save the Planet</button>
        </div>
        <div className="mt-10 md:mt-32">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero