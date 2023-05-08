// import { ReactNode } from "react";

// type Props = {
//     children: ReactNode; // other method to get children
//   };

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Heading;
