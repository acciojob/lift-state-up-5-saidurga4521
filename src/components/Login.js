import React from "react";

const Login = ({ isLoggedIn, setisLoggedIn }) => {
  const handleClick = () => {
    setisLoggedIn(true);
  };
  return (
    <div>
      {!isLoggedIn && (
        <div>
          <input type="text" />
          <input type="Password" />
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Login
          </button>
        </div>
      )}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default Login;
