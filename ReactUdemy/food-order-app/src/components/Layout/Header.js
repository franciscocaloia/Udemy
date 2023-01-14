import mealsImg from "../../Assets/meals.jpg";
import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
const StyledImgCnt = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;

const Header = ({toggleShowCart}) => {
  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCartButton toggleShowCart={toggleShowCart}/>
      </StyledHeader>
      <StyledImgCnt>
        <img src={mealsImg} alt="mealsImg" />
      </StyledImgCnt>
    </>
  );
};

export default Header;
