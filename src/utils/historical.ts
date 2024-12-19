import type { HistoricalEvent } from '../types/historical';

export function getHistoricalEvents(): HistoricalEvent[] {
  return [
    {
      year: 2001,
      title: "Lanzan Argentum Online",
      description: "En 2001 sale el primer videojuego de rol multijugador masivo en línea argentino, titulado Argentum Online",
      icon: "🎮"
    },
    {
      year: 1974,
      title: "Nace el Altair 8800",
      description: "En 1974, le empresa \"Micro Instrumentación y Sistemas de Telemetría\" (MITS) lanza el Altair 8800. El Altair 8800 es un microordenador basado en la CPU Intel 8080",
      icon: "💻"
    },
    {
      year: 1901,
      title: "Nace el padre del Fax y escáner",
      description: "En 1901 nace en Baviera, Alemania, Rudolf Hell, inventor y Doctor en Electrotecnia de la Alta Escuela Técnica de Múnich. Considerado padre de Fax y del escáner",
      icon: "📠"
    }
  ];
}