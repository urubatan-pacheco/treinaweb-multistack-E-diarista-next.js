import { createContext } from "react";

export const ExternalServiceContext = createContext({});

export const ExternalServiceProvider = () => {
  let a = 5;

  function setA() {
    a = 5;
  }

  return (
    <ExternalServiceContext.Provider value={{ value: a, funcao: setA }}>
      {/* <MeuComponente /> */}
    </ExternalServiceContext.Provider>
  );
};
