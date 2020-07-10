import React from "react";
import "./DataFieldMenu.scss";
import CloseCircle from "../elements/CloseCircle/CloseCircle";

type DataFieldMenuProps = {
  dataObj: any;
  isOpen: Boolean;
  collapse: any;
};
const DataFieldMenu = (props: DataFieldMenuProps) => {
  const { dataObj, isOpen, collapse } = props;
  return (
    <div className={`data-field-container ${isOpen ? "toggle" : "collapse"}`}>
      <div className={`fields ${isOpen ? "visible" : "hidden"}`}>
        <div>Fields:</div>
        {Object.keys(dataObj).map((field: string) => (
          <div className="obj-key">{field}</div>
        ))}
      </div>
      <div className="collapse-btn" onClick={() => collapse(!isOpen)}>
        <CloseCircle />
      </div>
    </div>
  );
};

export default DataFieldMenu;
