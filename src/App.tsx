import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomCursor />
          <Header />
          <Hero />
          <Products />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App