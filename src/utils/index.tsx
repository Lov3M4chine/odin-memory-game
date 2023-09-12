export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function shuffledIndices(length: number) {
  const indices = Array.from({ length }, (_, i) => i)

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = indices[i]
    indices[i] = indices[j]
    indices[j] = temp
  }

  return indices
}

export const nasaImgs = [
  { text: 'Saturn', id: 'PIA21047' },
  { text: 'Farside View of Moon', id: 'PIA00304' },
  { text: 'Mercury', id: 'PIA11245' },
  { text: 'Venus Ultra-Violet', id: 'PIA01544' },
  { text: 'Venus Computer Simulated', id: 'PIA00271' },
  { text: 'Earth and Moon', id: 'PIA00342' },
  { text: 'Jupiter', id: 'PIA01370' },
  { text: 'Uranus', id: 'PIA18182' },
  { text: 'Neptune', id: 'PIA00046' },
  { text: 'Neptune Rings', id: 'PIA01493' },
  { text: 'Pluto', id: 'PIA19708' }
]
