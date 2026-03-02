import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import type { HeaderLinks, SocialLinks } from './types';

const socials: SocialLinks[] = [
  {
    icon: faGithub,
    url: 'https://github.com/marcindobrzynski-dev/',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/marcindobrzynski-dev/',
  },
  {
    icon: faEnvelope,
    url: 'mailto:contact@marcindobrzynski.com',
  }
];

const headerLinks: HeaderLinks[] = [
  {
    label: 'Marcin Renald Dobrzyński',
    url: 'https://marcindobrzynski.pl/',
  },
  {
    label: 'Home',
    url: '#home-section',
    icon: faHome,
  },
  {
    label: 'Projects',
    url: '#projects-section',
  },
  {
    label: 'Contact me',
    url: '#contact-me-section',
  },
];

export { socials, headerLinks };
