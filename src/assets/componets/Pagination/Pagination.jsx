import { ButtonStyled } from "./StyledButton";
const Pagination = ({ prev, next, onPreviuos, onNext }) => {
  const handlePrevious = () => {
    onPreviuos();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <div className="flex my-5 gap-10">
      {prev ? (
        <div className="border-solid border-2 p-2">
          {<ButtonStyled onClick={handlePrevious}>previous</ButtonStyled>}
        </div>
      ) : null}
      {next ? (
        <div className="border-solid border-2 p-2 px-5">
          <ButtonStyled onClick={handleNext}>next</ButtonStyled>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
