import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

const App = () => {
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
        <Status status="success" />
      </section>
      <section>
        <Heading>Placeholder</Heading>
      </section>
      <Button
        handleClick={(ev, id) => {
          console.log("Clicked",ev, id);
        }}
      />

      <Input handleChange={e => console.log(e)} value="hello"/>
      
{/* ts will automatically give an error for non valid value or property also including typos from the rest of the app */}
{/* display: 0 */}
      <Container styles={{border: "solid 1px black", padding: "1rem"}}/>
    </div>
  );
};

export default App;
