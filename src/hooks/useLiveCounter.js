import { useEffect, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function computeElapsed(fromDate) {
  const now = new Date()
  let diff = now - fromDate

  if (diff < 0) {
    return { started: false, text: 'En proceso' }
  }

  // 1. Calcular meses y años exactos caminando en el calendario
  let months = (now.getFullYear() - fromDate.getFullYear()) * 12 + (now.getMonth() - fromDate.getMonth())
  
  // Ajustamos la fecha base sumándole los meses completos transcurridos
  let baseWithMonths = new Date(fromDate)
  baseWithMonths.setMonth(baseWithMonths.getMonth() + months)

  // Si al sumar los meses nos pasamos de la fecha actual, restamos un mes
  if (baseWithMonths > now) {
    months--
    baseWithMonths = new Date(fromDate)
    baseWithMonths.setMonth(baseWithMonths.getMonth() + months)
  }

  // 2. El tiempo restante se calcula en base a esa nueva fecha ajustada
  const remainingDiff = now - baseWithMonths
  const totalSeconds = Math.floor(remainingDiff / 1000)
  
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  // 3. Formatear el texto final incluyendo los meses si son mayores a 0
  const monthsText = months > 0 ? `${months} ${months === 1 ? 'mes' : 'meses'}, ` : ''
  const daysText = `${days} ${days === 1 ? 'día' : 'días'}`

  return {
    started: true,
    months,
    days,
    hours,
    minutes,
    seconds,
    text: `${monthsText}${daysText}, ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
  }
}

/**
 * Cuenta el tiempo transcurrido desde `dateString` y se actualiza cada segundo.
 * @param {string} dateString - fecha ISO, p.ej. "2025-12-06T00:00:00"
 */
export function useLiveCounter(dateString) {
  // Nota: Creamos el objeto Date dentro de un useMemo o la función para evitar 
  // recrearlo innecesariamente si dateString no cambia.
  const [elapsed, setElapsed] = useState(() => computeElapsed(new Date(dateString)))

  useEffect(() => {
    const fromDate = new Date(dateString)
    
    // Sincronizar inmediatamente al cambiar el dateString
    setElapsed(computeElapsed(fromDate))

    const id = setInterval(() => {
      setElapsed(computeElapsed(fromDate))
    }, 1000)
    
    return () => clearInterval(id)
  }, [dateString])

  return elapsed
}