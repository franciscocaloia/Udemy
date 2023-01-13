import styled from "styled-components";
import UserItem from "./UserItem";
const StyledUserList = styled.ul`
  padding: 0;
  width: 90%;
  max-width: 40rem;
  margin: auto;
`;
const UserList = ({ users }) => {
  const userList = users.map((user) => (
    <UserItem key={user.id} username={user.username} age={user.age} />
  ));
  return (
    <StyledUserList>
      {users.length ? userList : <h2>No users found</h2>}
    </StyledUserList>
  );
};
export default UserList;
