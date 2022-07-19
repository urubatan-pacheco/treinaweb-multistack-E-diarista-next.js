import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import {
  Wave,
  SectionContainer,
  SectionTitle,
  SectionSubTitle,
  AccondionStyled,
} from "./_frequent-question.styled";

const FrequestQuestion = () => {
  return (
    <SectionContainer>
      <Wave src={"/img/home/waves.svg"} />
      <Container>
        <SectionTitle>Ainda está com dúvidas ?</SectionTitle>
        <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>
        <AccondionStyled>
          <AccordionSummary expandIcon={<i className="twf-minus" />}>
            <Typography color={"primary"}>dwada</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>dwadawdad</Typography>
          </AccordionDetails>
        </AccondionStyled>
      </Container>
    </SectionContainer>
  );
};

export default FrequestQuestion;
