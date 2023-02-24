Baseado no Projeto desenvolvido durante a imersão Multi Stack da TreinaWeb utilizando Java e Spring Boot. Obtido com o git clone -b "semana-15" git@github.com:treinaweb/treinaweb-multistack-E-diarista-next.js.git Para demonstrar os problemas de integração com o front-end.

## Inciando

Primeiro clone, configure e inicie o backend em https://github.com/urubatan-pacheco/multistack-ediaristas-java (branch main para a situação atual do código da treinaweb na semana 15, branch sugestoes para as minha visão da solução dos problemas de integração backend/frontend)
Segundo, configure e rode o development server:

Crie o arquivo .env.local, neste exemplo estou considerando backend e frontend rodando no localhost:
NEXT_PUBLIC_API = "http://127.0.0.1:8080"
Na primeira vez:

```bash
npm install
npm run dev
```

Nas proximas apenas:

```bash

npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser.
