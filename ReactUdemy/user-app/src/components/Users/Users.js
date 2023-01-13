import styled from "styled-components";
import Card from "../UI/Card";
import UserList from "./UserList";
const StyledCard = styled(Card)`
  padding: 10px;
  margin: 10px;
`;
const Users = ({ users }) => {
  return (
    <StyledCard>
      <UserList users={users} />
    </StyledCard>
  );
};
export default Users;
