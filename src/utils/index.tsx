import Card from 'components/Card/index'

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

const imageIndices = shuffledIndices(11)
console.log(imageIndices)

const nasaImgs = [
  { Saturn: 'PIA21047' },
  { 'Farside View of Moon': 'PIA00304}' },
  { Mercury: 'PIA11245' },
  { 'Venus Ultra-Violet': 'PIA00271' },
  { 'Venus Computer Simulated': 'PIA00271' },
  { 'Earth and Moon': 'PIA00342' },
  { Jupiter: 'PIA01370' },
  { Uranus: 'PIA18182' },
  { Neptune: 'PIA00046' },
  { 'Neptune Rings': 'PIA01493' },
  { Pluto: 'PIA19708' }
]

export function generateCards() {
  return imageIndices.map((index) => <Card key={index} index={index} />)
}
