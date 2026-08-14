import GlowCard from "../components/GlowCard";
import ContactForm from "../components/ContactForm";
import ContactExperience from "../components/ContactExperience";

const ContactPanel = () => {
  return (
    <div className="grid grid-cols-1 items-stretch gap-[44px] lg:grid-cols-[5fr_7fr]">
      <GlowCard padding="p-[44px]">
        <ContactForm />
      </GlowCard>
      <div className="min-h-[420px] w-full overflow-hidden rounded-lg border border-amber-700 bg-gradient-to-b from-[#B8762C] to-[#8A5620]">
        <ContactExperience />
      </div>
    </div>
  );
};

export default ContactPanel;
