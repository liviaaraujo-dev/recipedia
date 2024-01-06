import { AboutUs } from "./components/AboutUs";
import { BannerSmartphone } from "./components/BannerSmartphone";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
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
        <Community />
        <BannerSmartphone />
      </main>
      <Footer />
     
    </>
  )
}

export default App;

