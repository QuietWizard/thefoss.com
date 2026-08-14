import SectionHeader from "../components/SectionHeader";
import ContactPanel from "./ContactPanel";

const ContactSection = () => {
  return (
    <section className="pt-[96px] pb-[96px]">
      <SectionHeader sub="💬 Have questions or ideas? Let's talk! 🚀" title="Get in Touch" />
      <div className="mt-[44px]">
        <ContactPanel />
      </div>
    </section>
  );
};

export default ContactSection;
