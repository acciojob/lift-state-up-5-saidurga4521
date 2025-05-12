import React, { useState } from "react";
import "./../styles/App.css";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
    </div>
  );
};

export default App;
