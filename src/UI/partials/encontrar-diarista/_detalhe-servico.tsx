import { Divider, Tooltip, Typography } from "@mui/material";
import { ServicoInterface } from "data/@types/ServicoInterface";
import React, { PropsWithChildren } from "react";
import { useFormContext, Controller } from "react-hook-form";
import ItemCounter from "UI/components/inputs/ItemCounter/ItemCounter";
import ToggleButtonGroup, {
  ToggleButton,
} from "UI/components/inputs/ToggleButtonGroup/ToggleButtonGroup";
import { AddressForm } from "UI/components/inputs/UserForm/UserForm";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import { ItemsContainer } from "./_detalhe-servico.styled";
import { FormValues } from "data/@types/forms/FormValue";

interface DetalheServicoProps {
  servicos?: ServicoInterface[];
}

const houseParts = [
  {
    singular: "Cozinha",
    plural: "Cozinhas",
    name: "quantidade_cozinhas",
  },
  { singular: "Sala", plural: "Salas", name: "quantidade_salas" },
  {
    singular: "Banheiro",
    plural: "Banheiros",
    name: "quantidade_banheiros",
  },
  { singular: "Quarto", plural: "Quartos", name: "quantidade_quartos" },
  {
    singular: "Quintal",
    plural: "Quintais",
    name: "quantidade_quintais",
  },
  { singular: "Outros", plural: "Outros", name: "quantidade_outros" },
];

const DetalheServico: React.FC<DetalheServicoProps> = ({ servicos = [] }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div>
      <Typography sx={{ fontWeight: "bold", pb: 2 }}>
        Qual tipo de limpeza você precisa?
      </Typography>
      <Controller
        name={"faxina.servico"}
        defaultValue={servicos[0]?.id}
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            exclusive
            value={field.value}
            onChange={(_event, value) =>
              field.onChange(value ?? servicos[0]?.id)
            }
          >
            {servicos.map((servico) => (
              <ToggleButton key={servico.id} value={servico.id}>
                <i className={servico.icone ?? "twf-cleaning-1"} />
                {servico.nome}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      />

      <Divider sx={{ my: 5 }} />
      <AddressForm />
    </div>
  );
};

export default DetalheServico;
