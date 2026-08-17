"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactExperience = dynamic(() => import("./ContactExperience"), { ssr: false });

/**
 * The 3D scene (three.js + react-three-fiber + drei) is a ~900KB chunk.
 * Code-split via next/dynamic and gated behind an IntersectionObserver so it
 * only downloads once the panel is actually about to scroll into view,
 * instead of shipping on every Home/Contact page load.
 */
const ContactExperienceLazy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return <div ref={ref} className="h-full w-full">{visible && <ContactExperience />}</div>;
};

export default ContactExperienceLazy;
