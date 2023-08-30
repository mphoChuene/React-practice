import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Query from "./Query";

const Home = () => {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        <Query />
      </QueryClientProvider>
    </div>
  );
};

export default Home;
