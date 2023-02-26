import Counter from "./components/Counter";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";
import UserProfile from "./components/UserProfile.js";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {auth.isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
