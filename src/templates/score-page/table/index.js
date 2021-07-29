import { useContext } from "react";
import { StateContext } from "contexts/app.context";
import "./style.scss";

const Table = ({ name, phone }) => {
  const appState = useContext(StateContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>name</th>
          <th>phone</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="name">{name}</td>
          <td data-title="phone">{phone}</td>
          <td data-title="score">{appState.victoryPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
