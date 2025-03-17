import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { gql } from "~/gql";

const GET_PAGES = gql(`
  query GET_PAGES {
    pageCollection {
      items {
        _id
        title
      }
    }
  }
`);

function App() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(GET_PAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {data!.pageCollection!.items.map(
          (page) => page && <li key={page._id}>{page.title}</li>
        )}
      </ul>
    </>
  );
}

export default App;
