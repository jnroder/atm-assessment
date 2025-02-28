import Sign from './Sign'
import CardIndicator from './CardIndicator'
import './App.css'

function App() {
  return (
    <div className="inline-block mt-47 mx-auto w-full max-w-[856px]">
      <Sign />
      <div className="facade">
        <CardIndicator cardType="" />
      </div>
    </div>
  )
}

export default App
