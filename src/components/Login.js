import React from "react";

const Login = ({ isLoggedIn, setisLoggedIn }) => {
  const handleClick = () => {
    setisLoggedIn(true);
  };
  return (
    <div>
      {!isLoggedIn && (
        <form>
          <input type="text" />
          <input type="Password" />
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Login
          </button>
        </form>
      )}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default Login;
