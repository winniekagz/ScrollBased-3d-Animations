import { About } from "./components/About"
import { BuyNow } from "./components/BuyNow"
import CanvasContainer from "./components/CanvasContainer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

function App() {


  return (
    <main className="overflow-x-hidden">
			<div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
				<CanvasContainer />
			</div>
			<Header />
			<Hero />
			<About />
			<BuyNow />
		</main>
  )
}

export default App
