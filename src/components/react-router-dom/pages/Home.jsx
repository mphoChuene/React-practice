import React, { useContext } from "react";
import { AppContext } from "../Routers";

const Home = () => {
  const { username } = useContext(AppContext);
  return <div>this is the Home page {username}</div>;
};

export default Home;
