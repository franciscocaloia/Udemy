import { useState } from "react";
import styled from "styled-components";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";

const StyledContainer = styled.div`
  margin: 20px auto;
  width: 90%;
  max-width: 600px;
`;
const App = () => {
  const [users, setUsers] = useState([]);
  const onNewUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <StyledContainer>
      <NewUser onNewUser={onNewUser} />
      <Users users={users} />
    </StyledContainer>
  );
};

export default App;
