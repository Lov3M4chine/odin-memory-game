import { useState } from 'react'
import { nasaImgs, shuffledIndices } from 'utils'
import Card from './Card'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [currentIndices, setCurrentIndices] = useState(() =>
    shuffledIndices(11)
  )

  const reshuffleCards = () => {
    setCurrentScore((prevScore) => prevScore + 1)
    setCurrentIndices(shuffledIndices(11))
  }

  const resetGame = () => {
    reshuffleCards()
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
    setCurrentScore(0)
    setCurrentIndices(shuffledIndices(11))
  }

  return (
    <>
      <div className="absolute -z-10 h-screen w-screen bg-game-bg bg-cover"></div>
      <div className="flex justify-center gap-6">
        <div className="w-fit justify-center rounded-xl bg-slate-800 p-3 text-6xl text-white">
          Celestial Bodies Memory Game
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="rounded-xl bg-green-400 p-2">
            Current Score: {currentScore}
          </div>
          <div className="rounded-xl bg-blue-400 p-2">
            Best Score: {bestScore}
          </div>
        </div>
      </div>
      <div
        id="cardContainer"
        className="flex flex-wrap justify-center gap-6 p-6"
      >
        {currentIndices.map((index) => {
          const image = nasaImgs[index]
          return (
            <Card
              key={index}
              imageId={image.id}
              imageText={image.text}
              onCardClick={reshuffleCards}
              onGameReset={resetGame}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
