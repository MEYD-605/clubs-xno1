import Image from "next/image"

export const metadata = {
  title: "About | No.1",
  description: "Learn about No.1 - One Human, Many Powers",
}

export default function AboutPage() {
  const skills = ["Artificial Intelligence", "Photography", "Mixology", "Product Design", "UI/UX", "Business Strategy"]

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mb-16">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="About No.1" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-playfair text-white font-bold mb-4">About</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            The story behind No.1 and the philosophy of combining multiple disciplines.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-8">The Story</h2>
            <p className="text-gray-600 mb-4">
              No.1 represents the philosophy that one person can master multiple disciplines and harness the power of
              technology to create unique experiences and solutions.
            </p>
            <p className="text-gray-600 mb-4">
              With a background spanning technology, art, and hospitality, I've developed a unique approach that
              combines technical expertise with creative vision and exceptional service.
            </p>
            <p className="text-gray-600 mb-8">
              My mission is to demonstrate how the integration of diverse skills and advanced AI systems can create
              innovative solutions and experiences that stand out in today's world.
            </p>
            <h3 className="text-xl font-bold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image src="/placeholder.svg?height=1200&width=800" alt="Portrait of No.1" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-24 bg-gray-100 p-8 md:p-16">
        <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Multidisciplinary Approach</h3>
            <p className="text-gray-600">
              Breaking down the barriers between different fields to create unique solutions and experiences.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Human + Technology</h3>
            <p className="text-gray-600">
              Leveraging AI and advanced systems to enhance human capabilities and create new possibilities.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quality Over Quantity</h3>
            <p className="text-gray-600">
              Focusing on excellence in every project and product, with attention to detail and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Journey</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold">2018</h3>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-lg font-bold mb-2">The Beginning</h4>
              <p className="text-gray-600">
                Started exploring the intersection of technology and creativity, laying the foundation for No.1.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold">2020</h3>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-lg font-bold mb-2">Expansion into Photography</h4>
              <p className="text-gray-600">
                Developed a professional photography practice, specializing in portrait and commercial work.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold">2021</h3>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-lg font-bold mb-2">Mixology & Hospitality</h4>
              <p className="text-gray-600">
                Trained in professional bartending and began offering specialized event services.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold">2023</h3>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-lg font-bold mb-2">AI Integration</h4>
              <p className="text-gray-600">
                Incorporated advanced AI systems to enhance all aspects of the business and create new opportunities.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold">2024</h3>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-lg font-bold mb-2">No.1 Launch</h4>
              <p className="text-gray-600">
                Officially launched the No.1 brand, bringing together all disciplines under one unified identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-24">
        <div className="bg-black text-white p-8 md:p-16">
          <h2 className="text-3xl font-playfair font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="mb-8">
                Interested in working together or have questions about my services? Feel free to reach out.
              </p>
              <div className="space-y-4">
                <p>Email: hello@no1.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Location: Bangkok, Thailand</p>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border border-white focus:outline-none focus:border-electric-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black border border-white focus:outline-none focus:border-electric-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-black border border-white focus:outline-none focus:border-electric-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 font-medium hover:bg-electric-blue hover:text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
