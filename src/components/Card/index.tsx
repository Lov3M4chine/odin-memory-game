import React from 'react'

type CardProps = {
  index: number
}

const Card: React.FC<CardProps> = ({ index }) => {
  return (
    <button className=" w-60 rounded-xl bg-slate-300 p-3">
      <img
        className=""
        src="https://images-assets.nasa.gov/image/PIA21047/PIA21047~orig.jpg"
        alt={`Staring at Saturn ${index}`}
      />
      <p className="flex justify-center pt-2">Staring at Saturn</p>
    </button>
  )
}

export default Card
