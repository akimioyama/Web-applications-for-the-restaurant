import React from "react";

const SingIn = ({take}) => {
  const login = () => {
    const api = ""


    
  };

  return (
    <div>
      <div className="SingIn">
        <div className="signin_left">
          <div>login</div>
          <div>password</div>
        </div>
        <div className="signin_rigth">
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="password" name="" id="" />
          </div>
        </div>
      </div>
      <div className="signin_btn">
        <button className="btn" onClick={login}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export { SingIn };
