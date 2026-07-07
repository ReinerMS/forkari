import TravelsSection from '../components/TravelsSection'

export default function Viajes() {
  return (
    <div className="mx-auto max-w-6xl text-white">
      <div className="mb-5 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#ff758c]">
          Explorando juntos
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-[#fc8b9e]">
          Nuestros Viajes
        </h1>
        <p className="mt-2 text-sm text-[#ff758c]">Cada lugar se vuelve mágico si voy contigo</p>
      </div>

      {/* Renderiza tu sección de viajes existente */}
      <TravelsSection />
    </div>
  )
}