import { generateCards } from 'utils'

function App() {
  const cards = generateCards()
  return (
    <>
      <div className="absolute -z-10 h-screen w-screen bg-game-bg bg-cover"></div>
      <div className="flex justify-center ">
        <div className="w-fit justify-center rounded-xl bg-slate-800 p-3 text-6xl text-white">
          Celestial Bodies Memory Game
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6">{cards}</div>
    </>
  )
}

export default App
