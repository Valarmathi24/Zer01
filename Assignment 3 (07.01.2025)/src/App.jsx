import React from 'react'
import Header from './assets/components/Header'
import Description from './assets/components/Description'
import ImageSection from './assets/components/ImageSection'
import Footer from './assets/Footer'

function App() {
  return (
    <div className="bg-gradient-radial from-blue-100 via-purple-100 to-purple-200 min-h-screen">
      <div className="container mx-auto p-8">
        <Header />
        <main>
          <section className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Animal World</h1>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <ImageSection />
            <Description />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;