import {
  ContaienrStyled,
  SectionContainer,
  SectionTitle,
} from "./_presentation.styled";

const Presentation = () => {
  return (
    <SectionContainer>
      <ContaienrStyled>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>
      </ContaienrStyled>
    </SectionContainer>
  );
};

export default Presentation;
