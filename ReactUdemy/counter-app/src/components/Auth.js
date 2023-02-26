import classes from "./Auth.module.css";
import { authActions } from "../store/auth.js";
import { useDispatch } from "react-redux";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => {
  return value.trim() !== "";
};
const Auth = () => {
  const dispatch = useDispatch();
  function authUser(e) {
    e.preventDefault();
    dispatch(authActions.login({ email: emailValue }));
  }
  const { inputValue: emailValue, inputChangeHandler: emailChangeHandler } =
    useInput(isNotEmpty);
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={authUser}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              value={emailValue}
              onChange={emailChangeHandler}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
