import "./App.css";
import { CatList } from "./components/CatList";
import { DogList } from "./components/DogList";

const catData = [
  {
    name: "Whiskers",
    chipNumber: "13579",
  },
  {
    name: "Fang",
    chipNumber: "82672",
  },
  {
    name: "Beetle",
    chipNumber: "02468",
  },
];

const dogData = [
  {
    name: "Wishbone",
    favoriteToy: "Squeaker",
    chipNumber: "82373",
  },
  {
    name: "Taxi",
    favoriteToy: "Ball",
    chipNumber: "29238",
  },
  {
    name: "Bench",
    favoriteToy: "Bone",
    chipNumber: "72902",
  },
];

function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={catData}></CatList>
      <h1>The Dog Corral</h1>
      <DogList dogs={dogData}></DogList>
    </main>
  );
}

export default App;
