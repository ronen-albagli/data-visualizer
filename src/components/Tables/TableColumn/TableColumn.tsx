import React, { useState } from "react";
import zoonInImg from "../../../assets/images/search.png";
import zoonOutImg from "../../../assets/images/lens.png";
import ReactJson from "react-json-view";

type TableColumn = {
  width: number;
  headers: Array<string>;
  element: any;
};

const TableColumn = (props: TableColumn) => {
  const [isOpen, setOpen] = useState(false);
  const { width, headers, element } = props;
  const renderTableColumns = () =>
    headers.map((header: any, index: number) => (
      <td
        style={{ width: `${width}%` }}
        onClick={index == 0 ? () => setOpen(!isOpen) : () => {}}
      >
        <div className="table-field"> {element[header]}</div>
        <div className="table-actions">
          <img src={zoonOutImg} alt="" />
          <img src={zoonInImg} alt="" />
        </div>
      </td>
    ));
  return (
    <div className={`column-container  ${isOpen ? "toggle" : "collapse"}`}>
      <tr>
        {renderTableColumns()}

        <div className={`column-json ${isOpen ? "toggle" : "collapse"}`}>
          <ReactJson src={element} />
        </div>
      </tr>
    </div>
  );
};

export default TableColumn;
