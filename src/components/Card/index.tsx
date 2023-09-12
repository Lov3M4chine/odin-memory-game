import { useEffect, useState } from 'react'

type CardProps = {
  resetKey: number
  imageId: string
  imageText: string
  onCardClick: () => void
  onGameReset: () => void
}

const Card: React.FC<CardProps> = ({
  resetKey,
  imageId,
  imageText,
  onCardClick,
  onGameReset
}) => {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    setIsClicked(false)
  }, [resetKey])

  const handleCardClick = () => {
    if (!isClicked) {
      onCardClick()
      setIsClicked(true)
    } else {
      onGameReset()
    }
  }

  return (
    <button
      onClick={handleCardClick}
      className="flex w-60 flex-col items-center justify-center rounded-xl bg-slate-300 p-3"
    >
      <img
        className="h-52"
        src={`https://images-assets.nasa.gov/image/${imageId}/${imageId}~orig.jpg`}
        alt={imageText}
      />
      <p className="mt-auto pt-2">{imageText}</p>
    </button>
  )
}

export default Card
