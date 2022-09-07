import React from "react";
import Greet from "../greet";
import Counter from "../counter";

const resources = {
  components: {
    App: ({ children }) => (
      <div className="App">
        <header className="App-header">{children}</header>
      </div>
    ),

    Logo: () => <img src={"/logo.svg"} className="App-logo" alt="logo" />,

    Tagline: () => (
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    ),

    Flex: ({ children }) => (
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", margin: 30 }}
      >
        {children}
      </div>
    ),

    FlexItem: ({ component = null, blurb = "" }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "0.2px solid pink",
          padding: 30,
          marginLeft: -1,
          maxWidth: "50%",
        }}
      >
        <div style={{ minHeight: 10 }}>
          <div>
            <pre style={{ fontSize: "1rem", fontWeight: 400, height: 100 }}>{blurb}</pre>
          </div>
          <div>{component}</div>
        </div>
      </div>
    ),
  },

  descriptions: {
    example1: `COUNTER COMPONENT
    This example uses the typical redux setup with Provider
    and Store to manage state in a simple counter app.
    `,
    example2: `GREET COMPONENT
    This example uses React's useReducer to simplify
    using redux to manage state in a simple example
    that makes fetch calls to an api and demonstrates
    how the tests can still run when the api is not available.
    `,
  },
};
const { App, Logo, Tagline, Flex, FlexItem } = resources.components;

export default function () {
  const { example1, example2 } = resources.descriptions;

  return (
    <App>
      <Logo />
      <Tagline />
      <pre>
        The purpose of this app is to demonstrate how to test
        <br />
        react/redux apps using the Testing Library/React and Jest
      </pre>
      <Flex>
        <FlexItem blurb={example1} component={<Counter />} />
        <FlexItem blurb={example2} component={<Greet url="/greeting" />} />
      </Flex>
    </App>
  );
}
