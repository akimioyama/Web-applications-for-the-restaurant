import React, { useEffect, useState } from "react";
import { SS } from "./UI/SS/SS";

const Map = ({info, ...props}) => {

  function openInfo(newQ) {
    setModalActive(true);
  }
  const [modalActive, setModalActive] = useState(false);
  const [ss, setSS] = useState([])

  useEffect(() => {
    if(info[0]?.isFree != undefined){
      setSS(info)
    }
  }, [info])

  return (
    <div className="map">
      <div className="up">
        <div className="q"></div>
        <div className="b"></div>
        <div className="w"></div>
        <SS openInfo={openInfo} table={ss[0]}>
          {info[0]?.id}
        </SS>
        <div className="ww"></div>
        <SS openInfo={openInfo} table={ss[1]}>
          {info[1]?.id}
        </SS>
        <div className="ww"></div>
        <SS openInfo={openInfo} table={ss[2]}>
          {info[2]?.id}
        </SS>
        <div className="w"></div>
      </div>
      <div className="bottom">
        <div className="w"></div>
        <SS openInfo={openInfo} table={ss[3]}>
          {info[3]?.id}
        </SS>
        <div className="ww"></div>
        <SS openInfo={openInfo} table={ss[4]}>
          {info[4]?.id}
        </SS>
        <div className="ww"></div>
        <SS openInfo={openInfo} table={ss[5]}>
          {info[5]?.id}
        </SS>
        <div className="ww"></div>
        <SS openInfo={openInfo} table={ss[6]}>
          {info[6]?.id}
        </SS>
        <div className="w"></div>
      </div>
    </div>
  );
};

export { Map };
