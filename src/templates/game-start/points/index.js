import { memo } from "react";
import "./style.scss";

const Points = ({ title, points }) => {
  return <div className="points">{`${title}: ${points}`}</div>;
};

export default memo(Points);
