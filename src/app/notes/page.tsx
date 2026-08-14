import Tag from "../../components/Tag";
import PlaceholderNote from "../../components/PlaceholderNote";
import { notesPlaceholder } from "../../constants";

export const metadata = {
  title: "Notes — Michael Foss",
};

export default function NotesPage() {
  return (
    <section className="pt-[64px] pb-[64px]">
      <p className="text-micro font-semibold tracking-label text-amber-400 uppercase">Notes</p>
      <h1 className="mt-[16px] font-display text-display-2 font-medium text-paper-0">
        Notes on platforms, migrations and automation.
      </h1>
      <div className="mt-[22px]">
        <PlaceholderNote>Layout only — no posts written yet.</PlaceholderNote>
      </div>

      <div className="mt-[44px] border-t border-ink-600">
        {notesPlaceholder.map((note, i) => (
          <article
            key={i}
            className="grid grid-cols-1 items-baseline gap-[16px] border-b border-ink-600 py-[22px] md:grid-cols-[120px_1fr_140px]"
          >
            <p className="text-meta text-paper-400">{note.date}</p>
            <div>
              <h3 className="text-h3 font-semibold text-paper-300">{note.title}</h3>
              <p className="mt-1 max-w-[520px] text-body-sm text-paper-400">{note.standfirst}</p>
            </div>
            <div className="md:text-right">
              <Tag>{note.category}</Tag>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
