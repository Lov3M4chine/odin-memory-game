import { useState } from 'react'
import { nasaImgs, shuffledIndices } from 'utils'
import Card from './Card'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [resetKey, setResetKey] = useState(Date.now())

  const [currentIndices, setCurrentIndices] = useState(() =>
    shuffledIndices(11)
  )

  const reshuffleCards = () => {
    setCurrentScore((prevScore) => prevScore + 1)
    setCurrentIndices(shuffledIndices(11))
  }

  const resetGame = () => {
    reshuffleCards()
    if (currentScore > 10) {
      alert('Wow!!! You actually beat the game. Awesome job!')
    }
    if (currentScore > bestScore) {
      alert('Congrats!!! You beat your high score.')
      setBestScore(currentScore)
    } else {
      alert('Oh no! Try again.')
    }
    setCurrentScore(0)
    setCurrentIndices(shuffledIndices(11))
    setResetKey(Date.now())
  }

  return (
    <div className="m-0 max-h-full min-h-screen max-w-full bg-game-bg bg-cover p-0">
      <div className="flex flex-wrap justify-center gap-6 max-sm:w-screen max-sm:gap-3">
        <div className="rounded-xl bg-slate-800 p-3 text-6xl text-white max-sm:text-lg">
          Celestial Bodies Memory Game
        </div>
        <div className="flex flex-col justify-center gap-1 max-sm:flex-row max-sm:text-xs">
          <div className="rounded-xl bg-green-400 p-2 ">
            Current Score: {currentScore}
          </div>
          <div className="rounded-xl bg-blue-400 p-2 max-sm:text-xs">
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
              resetKey={resetKey}
              imageId={image.id}
              imageText={image.text}
              onCardClick={reshuffleCards}
              onGameReset={resetGame}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
