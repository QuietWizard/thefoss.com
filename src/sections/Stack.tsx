import LogoMarquee from "../components/LogoMarquee";
import { stackLogos } from "../constants";

const Stack = () => {
  return (
    <section className="pt-[64px]">
      <LogoMarquee logos={stackLogos} />
    </section>
  );
};

export default Stack;
