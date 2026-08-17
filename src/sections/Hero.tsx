import Image from "next/image";
import StatusPill from "../components/StatusPill";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { availability, calendlyUrl, positioningLede } from "../constants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[64px] pb-[64px] text-center md:pt-[96px]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-190px] h-[520px] w-[900px] max-w-none -translate-x-1/2"
        style={{ background: "var(--glow-hero)" }}
      />
      <Reveal start="top 95%" className="relative flex flex-col items-center">
        <StatusPill>{availability}</StatusPill>
        <Image
          src="/images/headshot.jpg"
          alt="Michael Foss"
          width={350}
          height={350}
          priority
          className="mt-[22px] aspect-square w-[350px] max-w-full rounded-full border border-amber-700 object-cover"
        />
        <h1 className="mt-[22px] max-w-[900px] text-balance font-display text-[42px] leading-[1.1] font-medium tracking-[-.02em] text-paper-0 md:text-display-1">
          I turn complexity into <em className="text-amber-400 italic">clarity.</em>
        </h1>
        <p className="mt-[22px] max-w-[660px] text-lede text-paper-200">{positioningLede}</p>
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[13px]">
          <Button href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a 30 minute call
          </Button>
          {/* <Button href="/work" variant="ghost" arrow>
            See the work
          </Button> */}
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
