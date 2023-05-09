import {Lists} from '../const/types'


type NamesList = {
  names:Lists[]; //implies an array of objects and objects inside Lists types

  // names: { 
  //   first: string;
  //   last: string;
  // }[]; //implies an array of objects
};

const PersonList = ({ names }: NamesList) => {
  return (
    <div>
      {names.map((e) => (
        <h2 key={e.first}>
          {e.first} {e.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
