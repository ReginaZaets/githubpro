import { Link } from "react-router-dom";
import { paths } from "../lib/paths";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <Link to={paths.MAIN}>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
