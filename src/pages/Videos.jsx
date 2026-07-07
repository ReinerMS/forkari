import VideoGallery from '../components/VideoGallery'

export default function Videos() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ff536e]">
          Momentos en Movimiento
        </span>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-stone-800 sm:text-4xl">
          Nuestra Galería de Recuerdos
        </h1>
        <p className="mt-2 text-sm font-medium text-stone-600/80">
          Un pequeño espacio para revivir las risas y aventuras que hemos grabado.
        </p>
      </div>

      {/* Render del componente mapeado */}
      <VideoGallery />
    </div>
  )
}