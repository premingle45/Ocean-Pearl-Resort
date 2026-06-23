export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-6 bg-emerald-700 text-white gap-4">
        <h1 className="text-xl md:text-2xl font-bold">
          Ocean Pearl Resort
        </h1>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          <li>Home</li>
          <li>Villas</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd')] bg-cover bg-center flex items-center justify-center text-center text-white">
        <div className="bg-black/40 p-5 md:p-10 rounded-xl mx-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Ocean Pearl Resort
          </h1>

          <p className="text-base md:text-xl mb-6">
            Experience tropical luxury, crystal clear beaches and unforgettable vacations.
          </p>

          <button className="bg-emerald-500 hover:bg-emerald-400 px-8 py-3 rounded-lg font-semibold">
            Book Your Stay
          </button>
        </div>
      </section>

      {/* Villas */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Luxury Beach Villas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Ocean Villa</h3>
            <p>Wake up to stunning ocean views every morning.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Sunset Suite</h3>
            <p>Enjoy breathtaking sunsets from your private balcony.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Family Villa</h3>
            <p>Spacious accommodation for the whole family.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          Resort Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6"
            alt="Resort"
            className="rounded-xl w-full h-64 object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
            alt="Pool"
            className="rounded-xl w-full h-64 object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Beach"
            className="rounded-xl w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-emerald-700 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Resort Activities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 border rounded-lg">🏄 Water Sports</div>
          <div className="p-6 border rounded-lg">🌴 Beach Walks</div>
          <div className="p-6 border rounded-lg">🍹 Pool Bar</div>
          <div className="p-6 border rounded-lg">🔥 Night Events</div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Guest Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <p className="italic">"A perfect getaway with exceptional service."</p>
            <p className="mt-4 font-semibold">— Sarah L.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <p className="italic">"The villas are stunning and the beach is just steps away."</p>
            <p className="mt-4 font-semibold">— Daniel K.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
 