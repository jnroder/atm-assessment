interface CardIndicatorProps {
  cardType: string | undefined
}

const CardIndicator = ({ cardType }: CardIndicatorProps) => {
  {
    /* Uses CSS to manipulate the sprite image to show the active card type */
  }
  const activeClassName = `active-card-indicator ${
    cardType || 'hidden'
  } relative`

  return (
    <div className="card-indicator w-[470px] h-[50px] mx-auto mt-2">
      <div className={activeClassName}></div>
    </div>
  )
}

export default CardIndicator
