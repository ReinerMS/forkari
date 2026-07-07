import DatesSection from '../components/DatesSection'
import InProgressBadge from '../components/InProgressBadge'

export default function Citas() {
  return (
    <div className="mx-auto max-w-6xl text-white animate-fade-in">
      {/* Puedes agregar un título o decoración superior elegante si quieres */}
      <div className="text-center mb-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#ff758c]">
          Nuestros Momentos
        </span>
        <h1 className="mt-2 text-2xl font-bold sm:text-4xl text-[#ff758c] text-shadow-md">
          Hitos en nuestra relación
        </h1>
      </div>

      {/* Aquí inyectamos tus componentes ya creados */}
      <div className="">
        <DatesSection />
      </div>
    </div>
  )
}