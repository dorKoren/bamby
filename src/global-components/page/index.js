import { useEffect, memo } from "react";
import "./style.scss";

const Page = ({ children, className, title, backgroundImg }) => {
  useEffect(() => {
    document.title = `${title} | Guess The Word`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div
      className={`page ${className}`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="page__wrapper">{children}</div>
    </div>
  );
};

export default memo(Page);
