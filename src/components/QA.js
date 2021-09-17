import { useState } from "react";

function QA({ title, content }) {
  const [activeState, setActiveState] = useState("collapsible");

  const changeState = () => {
    setActiveState(activeState === "collapsible" ? "active" : "collapsible");
  };

  let styles = {
    content: {
      maxHeight: activeState === "collapsible" ? 0 : 100,
      overflowY: "scroll",
      transition: "max-height 0.2s ease-out",
      scrollbarWidth: 'none'
    },
  };

  return (
    <div className="QA-container">
      <h2>{title}</h2>
      <div className="buttonCont">
        <button className={activeState} onClick={changeState}></button>
      </div>
      <div style={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default QA;
