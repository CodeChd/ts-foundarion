type ButtonProps = {
  //call specfic event by defining this type...
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>,  id: number) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={(ev) => handleClick(ev,1)}>Click</button>
    </div>
  );
};

export default Button;
