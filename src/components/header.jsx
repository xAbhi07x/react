import reactImg from "../assets/react-core-concepts.png"; //better way to load image in react

const reactDescription = ["Crucial", "Core", "Fundamental"];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  //the javascript code
  const description = reactDescription[genRandom(2)];

  //the jsx code
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
