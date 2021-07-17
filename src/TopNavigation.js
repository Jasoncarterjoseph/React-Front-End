import React from "react";
import "./index.css";
import { faCloud, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopNavigation() {
  return (
    <div>
      <div className="mainheader">
        <div className="right">
          <div className="text">
            <h2>
              Code Editor {"\u00A0"}
              <FontAwesomeIcon size="s" color="#fff" icon={faCode} />
            </h2>
          </div>
        </div>
        <div>
          <br />
          <div className="buttons">
            <a target="_blank" href="#">
              <button className="Topbutton1">
                <FontAwesomeIcon color="#ADAFBC" icon={faCloud} />{"\u00A0"}
                SHARE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
