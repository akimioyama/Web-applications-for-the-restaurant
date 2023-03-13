import React, { useState, useEffect } from "react";
import { SingIn } from "../components/login/SingIn";
import { useCookies } from "react-cookie";
import { AccMain } from "../components/AccMain";

function Acc() {
  const [cookies, setCookie, removeCookie] = useCookies(["role"]);

  return (
    <div className="acc">
      {cookies.role == "admin" ? (
        <AccMain />
      ) : (
        <SingIn  />
      )}
    </div>
  );
}

export { Acc };
