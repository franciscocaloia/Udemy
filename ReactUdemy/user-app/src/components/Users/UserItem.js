import styled from "styled-components";
const StyledUserItem = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
`;
const UserItem = ({ username, age }) => {
  return <StyledUserItem>{`${username} (${age} years)`}</StyledUserItem>;
};
export default UserItem;
