import Ornament from './Ornament'
import { siteData } from '../data/siteData'

export default function Hero() {
  return (
    <section className="min-h-max my-20 flex items-center justify-center px-6 relative">
      <div className="max-w-3xl text-center">
        <Ornament className="mb-2">
          <span className="text-2xl  sm:text-6xl tracking-[0.35em] uppercase text-gold">R&K</span>
        </Ornament>


        <p className="font-display italic text-2xl md:text-3xl mt-6 text-ink">
          {siteData.heroTagline}
        </p>

        <p className="mt-8 text-base md:text-lg font-light max-w-xl mx-auto leading-loose text-ink">
          {siteData.heroText}
        </p>

      </div>
    </section>
  )
}
