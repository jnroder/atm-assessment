import CreditCardSprite from './assets/creditcard_sprite.png'

/*
interface Props {
  cardType: string;
}
*/

const CardIndicator = () => {
  //const cardTypes = ['star', 'pulse', 'maestro', 'mastercard', 'plus', 'visa']

  return (
    <div className="card-indicator">
      <img src={CreditCardSprite} alt="Credit Card Type Indicator" />
    </div>
  )
}

export default CardIndicator
