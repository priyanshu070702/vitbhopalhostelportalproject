import React from "react";

export default function NotFound({ errorImage }) {
  return (
    <div className="section" style={centre}>
      <img src={errorImage} alt="error 404" style={style} />
    </div>
  );
}

const style = {
  width: "65%",
  marginTop: "4%",
};

const centre = {
  textAlign: "center",
};
