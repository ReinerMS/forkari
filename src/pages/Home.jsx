import Hero from '../components/Hero'
import LetterSection from '../components/LetterSection'
import FallingPetals from '../components/FallingPetals'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Efecto visual global de fondo */}
      <FallingPetals />
      
      <div className="mx-auto max-w-5xl space-y-16">
        <Hero />
        <LetterSection />
      </div>
    </div>
  )
}