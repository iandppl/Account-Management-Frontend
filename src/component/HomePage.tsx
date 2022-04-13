import React from "react";

const HomePage = (props: any) => {
  return (
    <div>
      HomePage
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

export default HomePage;
