import graffitiImage from './assets/graffiti.png'
const Sign = () => {
  return (
    <div className="sign h-76 rounded-3xl relative">
      <img
        className="w-104 absolute top-16 right-13"
        src={graffitiImage}
        alt="Grafitto"
      />
    </div>
  )
}
export default Sign
