import { useState, lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//@ts-expect-error - This is a remote component
import ViteRemote from "viteRemote/App";
// import { init, loadRemote } from "@module-federation/enhanced/runtime";
// import React from "react";
// import ReactDOM from "react-dom";

// init({
//   name: "rspackHost",
//   remotes: [
//     {
//       name: "viteRemote",
//       type: "module",
//       entryGlobalName: "viteRemote",
//       // shareScope: "default",
//       // mf-manifest.json is a file type generated in the new version of Module Federation build tools, providing richer functionality compared to remoteEntry
//       // Preloading depends on the use of the mf-manifest.json file type
//       entry: "http://localhost:3001/remoteEntry.js",
//       alias: "app1"
//     }
//   ],
//   shared: {
//     react: {
//       version: "^18.2.0",
//       scope: "default",
//       lib: () => React,
//       shareConfig: {
//         singleton: true,
//         requiredVersion: "^18.2.0"
//       }
//     },
//     "react-dom": {
//       version: "^18.2.0",
//       scope: "default",
//       lib: () => ReactDOM,
//       shareConfig: {
//         singleton: true,
//         requiredVersion: "^18.2.0"
//       }
//     }
//   }
// });

// const ViteRemote = await loadRemote("viteRemote/App");
// console.log(ViteRemote);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
      <h2>Vite Remote</h2>
      <div style={{ border: "1px solid red" }}>
        <Suspense fallback="Loading Vite Remote">
          <ViteRemote />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
