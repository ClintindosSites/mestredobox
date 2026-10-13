import Contatos from "./components/Contatos";
import Hero from "./components/Hero";
import ModelosBox from "./components/ModelosBox";
import PorqueEscolher from "./components/PorqueEscolher";

export default function Home() {
  return (
    <>
      <Hero />
      <ModelosBox />
      <PorqueEscolher />
      <Contatos />
    </>
  );
}
