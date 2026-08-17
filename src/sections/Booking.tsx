import SectionHeader from "../components/SectionHeader";
import BookingBlock from "../components/BookingBlock";

interface BookingProps {
  sub?: string;
  title?: string;
  align?: "center" | "left";
}

const Booking = ({ sub = "🗓️ Let's find a time", title = "Book a Call With Me", align = "center" }: BookingProps) => {
  return (
    <section className="pt-[96px]">
      <SectionHeader sub={sub} title={title} align={align} />
      <div className="mt-[44px]">
        <BookingBlock />
      </div>
    </section>
  );
};

export default Booking;
