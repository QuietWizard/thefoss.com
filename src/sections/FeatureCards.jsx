import {abilities} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const FeatureCards = () => {
  return (
    <section className="w-full padding-x-lg mt-20">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc}) => (
          <GlowCard card={title}>
            <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={title} />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
              <p className="text-white-50 text-lg">{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  )
}
export default FeatureCards
