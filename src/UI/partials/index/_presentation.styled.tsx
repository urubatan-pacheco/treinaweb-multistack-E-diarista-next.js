import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const SectionContainer = styled("section")`
  min-height: 250px;
  background-image: url("/img/home/living-room.svg");
  background-position: right center;
  margin-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: flex;
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    background-position: center;
  }
`;

export const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "title" "descricao" "button";

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 450px minmax(200px, 450px);
    grid-template-rows: 125px 55px 60px;
    grid-template-areas:
      "title picture"
      "descricao picture"
      "button picture";
    gap: ${({ theme }) => theme.spacing(4)};
    align-items: "center";
    align-content: "center";
    justify-content: "space-between";
    min-height: 450px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    align-content: center;
    max-width: 350px;
  }
`;

export const SectionTitle = styled("h1")`
  margin: 0;
  position: relative;
  grid-area: title;

  em {
    font-style: inherit;
  }

  .twf-search {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.grey[200]};
    border-radius: 50px;
    padding: ${({ theme }) => theme.spacing(2)};
    transform: translate(25%, -25%);
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    border: 4px solid ${({ theme }) => theme.palette.grey[200]};
    border-radius: 60px;
    padding: ${({ theme }) => theme.spacing(4, 8)};
    line-height: 30px;

    em {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: normal;
    .twf-search {
      display: none;
    }
  }
`;
