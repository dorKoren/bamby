import { Link } from "react-router-dom";
import "./style.scss";

const CommonLinkBtn = ({ children, className, to }) => {
  return (
    <Link className={`common-link-btn ${className}`} to={to}>
      {children}
    </Link>
  );
};

export default CommonLinkBtn;
