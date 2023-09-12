type CardProps = {
  imageId: string
  imageText: string
  onCardClick: () => void
}

const Card: React.FC<CardProps> = ({ imageId, imageText, onCardClick }) => {
  return (
    <button
      onClick={onCardClick}
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
