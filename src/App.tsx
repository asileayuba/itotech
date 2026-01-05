import { Suspense, lazy } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"

// Lazy load below-the-fold components to improve initial load time
const Services = lazy(() => import("@/components/Services").then(module => ({ default: module.Services })))
const Features = lazy(() => import("@/components/Features").then(module => ({ default: module.Features })))
const Founders = lazy(() => import("@/components/Founders").then(module => ({ default: module.Founders })))
const Programs = lazy(() => import("@/components/Programs").then(module => ({ default: module.Programs })))
const Testimonials = lazy(() => import("@/components/Testimonials").then(module => ({ default: module.Testimonials })))
const CTASection = lazy(() => import("@/components/CTASection").then(module => ({ default: module.CTASection })))
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })))

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Helmet>
          <title>ITOTECH - Empowering Young Minds Through Technology</title>
          <meta name="description" content="Unlock your potential with hands-on training in software engineering, data science, and product design at ITOTECH." />
          <meta name="keywords" content="ITOTECH, tech education, software engineering, data science, product design, Africa, technology training" />
          <meta property="og:title" content="ITOTECH - Empowering Young Minds Through Technology" />
          <meta property="og:description" content="Unlock your potential with hands-on training in software engineering, data science, and product design at ITOTECH." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <Header />

        <main>
          <Hero />

          <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
            <Services />
            <Features />
            <Programs />
            <Founders />
            <Testimonials />
            <CTASection />
          </Suspense>
        </main>

        <Suspense fallback={<div className="py-8 text-center">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  )
}

export default App
