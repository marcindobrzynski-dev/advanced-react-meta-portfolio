import type { Project } from "./types.ts";
import stoicWisdomImg from "../../assets/stoic-wisdom-mockup-1_v1.webp";
import recreatedYouTubeImg from "../../assets/recreated-youtube-mockup-1_v1.webp";

const projects: Project[] = [
  {
    title: "Stoic Stack",
    description: "A MindOS beta that builds empowerment, productivity, and mental health that AI can't replace in a developer's life.",
    image: "https://via.placeholder.com/150",
    link: "https://stoicstack.com/"
  },
  {
    title: "Stoic Wisdom Blog",
    description: "A blog about Stoic philosophy and how it can be applied to daily life.",
    image: stoicWisdomImg,
    link: "https://stoickiemadrosci.pl/"
  },
  {
    title: "Recreated YouTube",
    description: "A hobby project replicating the YouTube homepage. Created in HTML, CSS, and JavaScript to showcase front-end skills.",
    image: recreatedYouTubeImg,
    link: "https://marcindobrzynski.pl/projekty/odtworzony-serwis-youtube"
  },
];

export { projects };
