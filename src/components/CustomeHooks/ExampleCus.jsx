import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ExampleCus = () => {
  const { data: catData } = useQuery(["cat"], async () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
    <div>
      <h2>{catData?.fact}</h2>
    </div>
  );
};

export default ExampleCus;
