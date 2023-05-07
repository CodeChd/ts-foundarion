import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Naythan",
    last: "Win",
  };

  const namesList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Annakin",
      last: "SkyWalker",
    },
  ];

  return (
    <div className="gap">
      <section>
        <Greet name="cj" messageCount={10} isloggedIn={false} />
      </section>
      <section>
        <Person name={personName} />
      </section>
      <section>
        <PersonList names={namesList} />
      </section>
      <section>
        <Status status="success"/>
      </section>
    </div>
  );
}

export default App;
