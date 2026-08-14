import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-[96px] border-t border-ink-600">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-[30px] px-5 py-[44px] md:px-[48px]">
        <div className="flex items-center gap-[11px]">
          <img src="/images/headshot.jpg" alt="Michael Foss" className="h-10 w-10 rounded-full border border-amber-700 object-cover" />
          <div>
            <p className="font-display text-[21px] font-medium text-paper-0">Michael Foss</p>
            <p className="text-meta text-paper-300">thefoss.com · michaelfoss.me</p>
          </div>
        </div>

        <div className="flex items-center gap-[11px]">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-card border border-ink-600 bg-ink-800 transition-all duration-500 hover:border-amber-700 hover:bg-ink-750"
            >
              <img src={social.imgPath} alt={social.name} className="h-[18px] w-[18px] opacity-75 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <p className="text-meta text-paper-300">© {new Date().getFullYear()} Michael Foss. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
