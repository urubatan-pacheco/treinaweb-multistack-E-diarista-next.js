import {
  CadastroClienteFormDataInterface,
  CredenciaisInterface,
  LoginFormDataInterface,
  NovaDiariaFormDataInterface,
  PagamentoFormDataInterface,
} from "data/@types/FormInterface";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaService } from "data/services/FormSchemaService";
import { ServicoInterface } from "data/@types/ServicoInterface";
import useApi from "../useApi.hook";
import { DiariaInterface } from "data/@types/DiariaInterface";
import { ValidationService } from "data/services/ValidationService";
import { DateService } from "data/services/DateService";

export default function useContratacao() {
  const [step, setStep] = useState(1),
    [hasLogin, setHasLogin] = useState(false),
    [loginError, setLoginErro] = useState(""),
    breadcrumbItems = ["Detalhes da diária", "Identificação", "Pagamento"],
    serviceForm = useForm<NovaDiariaFormDataInterface>({
      resolver: yupResolver(
        FormSchemaService.address().concat(FormSchemaService.detalheServico())
      ),
    }),
    cleintForm = useForm<CadastroClienteFormDataInterface>({
      resolver: yupResolver(
        FormSchemaService.userData().concat(FormSchemaService.newContact())
      ),
    }),
    loginForm = useForm<LoginFormDataInterface<CredenciaisInterface>>({
      resolver: yupResolver(FormSchemaService.login()),
    }),
    paymentForm = useForm<PagamentoFormDataInterface>({
      resolver: yupResolver(FormSchemaService.payment()),
    }),
    servicos = useApi<ServicoInterface[]>("/api/servicos").data,
    dadosFaxina = serviceForm.watch("faxina"),
    tipoLimpeza = useMemo<ServicoInterface>(() => {
      if (servicos && dadosFaxina?.servico) {
        const selectedServico = servicos.find(
          (servico) => servico.id === dadosFaxina.servico
        );

        if (selectedServico) {
          return selectedServico;
        }
      }
      return {} as ServicoInterface;
    }, [servicos, dadosFaxina?.servico]),
    { totalTime } = useMemo<{ totalTime: number }>(() => {
      return { totalTime: calcularTempoServico(dadosFaxina, tipoLimpeza) };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      tipoLimpeza,
      dadosFaxina,
      dadosFaxina?.quantidade_banheiros,
      dadosFaxina?.quantidade_cozinhas,
      dadosFaxina?.quantidade_outros,
      dadosFaxina?.quantidade_quartos,
      dadosFaxina?.quantidade_quintais,
      dadosFaxina?.quantidade_salas,
    ]);

  useEffect(() => {
    if (
      dadosFaxina &&
      ValidationService.hora(dadosFaxina.hora_inicio) &&
      totalTime >= 0
    ) {
      serviceForm.setValue("faxina.hora_inicio", dadosFaxina?.hora_inicio, {
        shouldValidate: true,
      });
      serviceForm.setValue(
        "faxina.data_atendimento",
        dadosFaxina?.data_atendimento,
        {
          shouldValidate: true,
        }
      );
      serviceForm.setValue(
        "faxina.hora_termino",
        DateService.addHours(dadosFaxina?.hora_inicio as string, totalTime),
        {
          shouldValidate: true,
        }
      );
    } else {
      serviceForm.setValue("faxina.hora_termino", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    totalTime,
    dadosFaxina?.data_atendimento,
    dadosFaxina?.hora_inicio,
    dadosFaxina?.hora_termino,
  ]);

  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    console.log(data);
  }

  function onClientFormSubmit(data: CadastroClienteFormDataInterface) {
    console.log(data);
  }

  function onLoginFormSubmit(
    data: LoginFormDataInterface<CredenciaisInterface>
  ) {
    console.log(data);
  }

  function onPaymentFormSubmit(data: PagamentoFormDataInterface) {
    console.log(data);
  }

  function calcularTempoServico(
    dadosFaxina: DiariaInterface,
    tipoLimpeza: ServicoInterface
  ): number {
    let total = 0;
    if (dadosFaxina && tipoLimpeza) {
      total += tipoLimpeza.horas_banheiro * dadosFaxina.quantidade_banheiros;
      total += tipoLimpeza.horas_cozinha * dadosFaxina.quantidade_cozinhas;
      total += tipoLimpeza.horas_outros * dadosFaxina.quantidade_outros;
      total += tipoLimpeza.horas_quarto * dadosFaxina.quantidade_quartos;
      total += tipoLimpeza.horas_quintal * dadosFaxina.quantidade_quintais;
      total += tipoLimpeza.horas_sala * dadosFaxina.quantidade_salas;
    }
    return total;
  }

  return {
    step,
    breadcrumbItems,
    serviceForm,
    onServiceFormSubmit,
    servicos,
    hasLogin,
    setHasLogin,
    cleintForm,
    onClientFormSubmit,
    setStep,
    loginForm,
    onLoginFormSubmit,
    loginError,
    paymentForm,
    onPaymentFormSubmit,
  };
}
