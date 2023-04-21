import React from "react";

type Props = {
  img: string;
  title: string;
  body: string;
  buttonText: string;
};

function HelperSection({ img, title, body, buttonText }: Props) {
  return (
    <div className="helper-section">
      <img src={img} alt={title}></img>
      <div className="helper-section-body">
        <h1>{title}</h1>
        <p>{body}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default HelperSection;
