import jar from "../../../assets/images/jar.png";
import moneyJar from "../../../assets/images/moneyJar.png";
import React from "react";

const style = require("./Jar.module.css");

export const JarSubmit = React.memo((props) => {
  return (
    <div>
      {props.view === "jar" && (
        <img alt={"Jar"} className={style.jarSubmit} src={jar} />
      )}
      {props.view === "moneyJar" && (
        <img alt={"moneyJar"} className={style.jarSubmit} src={moneyJar} />
      )}
    </div>
  );
});
