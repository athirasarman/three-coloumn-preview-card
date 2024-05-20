import "./App.css";
import Column from "./column";
import sedans from "./assets/images/icon-sedans.svg";
import suvs from "./assets/images/icon-suvs.svg";
import luxury from "./assets/images/icon-luxury.svg";

function App() {
  const columnDetails = [
    {
      logo: sedans,
      title: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      logo: suvs,
      title: "SUVs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      logo: luxury,
      title: "Luxury",
      description:
        "  Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];
  const listItems = columnDetails.map((col) => (
    <Column
      logo={col.logo}
      title={col.title}
      description={col.description}
    ></Column>
  ));
  return (
    <div className="App">
      <div className="three-column-container">{listItems}</div>
    </div>
  );
}

export default App;
