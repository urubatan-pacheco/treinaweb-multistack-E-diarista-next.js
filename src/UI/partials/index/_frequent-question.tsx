import {
  Wave,
  SectionContainer,
  SectionTitle,
  SectionSubTitle,
} from "./_frequent-question.styled";

const FrequestQuestion = () => {
  return (
    <SectionContainer>
      <Wave src={"/img/home/waves.svg"} />
      <SectionTitle>Ainda está com dúvidas ?</SectionTitle>
      <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>
    </SectionContainer>
  );
};

export default FrequestQuestion;
