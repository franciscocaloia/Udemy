import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth.js";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  function logout() {
    dispatch(authActions.logout());
  }
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
