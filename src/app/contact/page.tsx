import BookingBlock from "../../components/BookingBlock";
import ContactPanel from "../../sections/ContactPanel";

export const metadata = {
  title: "Contact — Michael Foss",
};

export default function ContactPage() {
  return (
    <section className="pt-[64px] pb-[64px]">
      <div className="max-w-[720px]">
        <p className="text-micro font-semibold tracking-label text-amber-400 uppercase">Contact</p>
        <h1 className="mt-[16px] font-display text-[32px] leading-[1.1] font-medium tracking-h text-paper-0 sm:text-[40px] md:text-display-2">
          Get in Touch — Let&rsquo;s Connect
        </h1>
        <p className="mt-[22px] text-lede text-paper-200">
          💬 Have questions or ideas? Let&rsquo;s talk! 🚀 Book a time directly, or send a note and I&rsquo;ll come
          back to you.
        </p>
      </div>

      <div className="mt-[44px]">
        <BookingBlock />
      </div>

      <div className="mt-[44px]">
        <ContactPanel />
      </div>
    </section>
  );
}
