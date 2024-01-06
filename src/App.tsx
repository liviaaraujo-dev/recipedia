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
      </main>
     
    </>
  )
}

export default App;

