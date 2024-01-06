import { AboutUs } from "./components/AboutUs";
import { BannerSmartphone } from "./components/BannerSmartphone";
import { Header } from "./components/Header"
import { Home } from "./components/Home";
import { Recipes } from "./components/Recipes";

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Recipes/>
        <AboutUs />
        <BannerSmartphone />
      </main>
     
    </>
  )
}

export default App;

