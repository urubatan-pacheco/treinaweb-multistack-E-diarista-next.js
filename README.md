Baseado no Projeto desenvolvido durante a imersão Multi Stack da TreinaWeb utilizando Java e Spring Boot. Obtido com o git clone -b "semana-15" git@github.com:treinaweb/treinaweb-multistack-E-diarista-next.js.git   Para demonstrar os problemas de integração com o front-end.

## Inciando
Primeiro clone, configure e inicie o backend em https://github.com/urubatan-pacheco/multistack-ediaristas-java (branch main para a situação atual do código da treinaweb na semana 15, branch sugestoes para as minha visão da solução dos problemas de integração backend/frontend)
Segundo, configure e rode o development server:

Crie o arquivo .env.local, neste exemplo estou considerando backend e frontend rodando no localhost:
NEXT_PUBLIC_API = "http://127.0.0.1:8080"

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
