import React, { useState } from "react";
import { MyModal } from "../components/UI/Modal/MyModal";
import { SS } from "../components/UI/SS/SS"

function Main() {

    function openInfo(newQ) {
      setModalActive(true)
    }
    const [modalActive, setModalActive] = useState(false)

  return (
    <div class="main">
       
      <div class="map">
        <div class="up">
          <div class="q"></div>
          <div class="b"></div>
          <div class="w"></div>
          <SS openInfo={openInfo}>1</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>2</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>3</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>4</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>5</SS>
        </div>
        <div class="bottom">
          <div class="w"></div>
          <SS openInfo={openInfo}>6</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>7</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>8</SS>
          <div class="w"></div>
          <SS openInfo={openInfo}>9</SS>
        </div>
      </div>
      
    </div>
  );
}

export {Main};
