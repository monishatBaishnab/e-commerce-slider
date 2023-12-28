import Slider from "./components/HeaderSlider/Slider"
import BestSallers from "./components/ProductsContainer/BestSallers"

function App() {

  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-10">
      <Slider />
      <BestSallers />
    </div>
  )
}

export default App
