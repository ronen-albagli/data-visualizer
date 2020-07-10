import React from "react";
import "./Table.scss";
import zoonInImg from "../../assets/images/search.png";
import zoonOutImg from "../../assets/images/lens.png";
import TableColumn from "./TableColumn/TableColumn";

class DashboardTable extends React.Component<any, any> {
  state = {
    headers: [],
  };

  componentDidMount() {
    this.setState(() => ({ headers: Object.keys(this.props.data[0]) }));
  }

  render() {
    const { headers } = this.state;
    const columnWith = 100 / Object.keys(headers).length;
    console.log("headers", headers);
    return (
      <div className="dashboard-table">
        <table>
          <tr className="table-header">
            {headers &&
              headers.length > 0 &&
              headers.map((elem: string) => (
                <td style={{ width: `${columnWith}%` }}>{elem}</td>
              ))}
          </tr>
          {this.props.data.map((elem: any) => {
            return (
              <TableColumn
                element={elem}
                width={columnWith}
                headers={headers}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default DashboardTable;
