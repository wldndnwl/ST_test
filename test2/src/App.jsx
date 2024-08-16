import React from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      {/* <h1>My Website</h1> */}
      <Header title="My Website" />
      {/* <p>Welcome to my website!</p> */}
      <Content />
      {/* <footer>© 2024 My Website</footer> */}
      <Footer year={2024} />
    </div>
  );
}

export default App;
