import {
  ContaienerStyled,
  SectionButton,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "./_presentation.styled";

const Presentation = () => {
  return (
    <SectionContainer>
      <ContaienerStyled>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>

        <SectionSubtitle>
          São mais de 5.000 profissionais esperando por você!
        </SectionSubtitle>

        <SectionButton
          href="/encontrar-diarista"
          mui={{ variant: "contained" }}
        >
          Encontrar um(a) diarista
        </SectionButton>
      </ContaienerStyled>
    </SectionContainer>
  );
};

export default Presentation;
