import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  .error-modal__header {
    background: #4f005f;
    padding: 1rem;
    h2 {
      margin: 0;
      color: white;
    }
  }
  .error-modal__content {
    padding: 1rem;
  }
  .error-modal__actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ErrorModal = ({ closeModal, title, content }) => {
  return (
    <div>
      <Backdrop onClick={closeModal} />
      <StyledCard>
        <header className="error-modal__header">
          <h2>{title}</h2>
        </header>
        <div className="error-modal__content">{content}</div>
        <footer className="error-modal__actions">
          <Button onClick={closeModal}>Ok</Button>
        </footer>
      </StyledCard>
    </div>
  );
};
export default ErrorModal;
