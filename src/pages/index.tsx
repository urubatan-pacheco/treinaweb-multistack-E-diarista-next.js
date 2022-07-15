import Advantages from "@patials/index/_advantages";
import Presentation from "@patials/index/_presentation";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "",
    },
  };
};

const Index: NextPage<{ title: string }> = (props) => {
  return (
    <div>
      <Presentation />
      <Advantages />
    </div>
  );
};

export default Index;
