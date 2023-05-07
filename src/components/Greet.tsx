//Create props for Greet
type GreetProps = {
  name: string;
  messageCount: number;
  isloggedIn: boolean;
};

//Props is only allowed to recieve string data type
const Greet = (props: GreetProps) => {
  return (
    <div className="container">
      {props.isloggedIn ? (
        <h2>
          Welcome {props.name} You have {props.messageCount} unread messages!
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};

export default Greet;
