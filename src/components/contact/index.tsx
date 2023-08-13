import React from 'react';
import IconRow from '~/components/common/IconRow';
import emailLogo from '../../../public/email-logo.png';
import githubLogo from '../../../public/github-logo.png';
import linkedInLogo from '../../../public/linkedin-logo.png';

const CONTACT_DETAILS = [
  {
    alt: 'email icon',
    link: 'mailto:copayne@gmail.com',
    src: emailLogo,
  },
  {
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/copayne/',
    src: linkedInLogo,
  },
  {
    alt: 'github icon',
    link: 'https://github.com/copayne',
    src: githubLogo,
  },
];

const Contact = () => (
  <div className="container flex flex-col items-center w-full h-full">
    <p  className="text-3xl sm:text-4xl text-light-background dark:text-dark-background font-thin mt-2 mb-10">
      Contact
    </p>
    <IconRow
      icons={CONTACT_DETAILS}
      justify="center"
    />
  </div>
);

export default Contact;