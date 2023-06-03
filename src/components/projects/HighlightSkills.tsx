import React from 'react';
import Image from 'next/image';
import { type Icon } from '../common/IconRow';

interface HighlightSkills {
  skills: Array<Icon>,
}

const HighlightSkills: React.FC<HighlightSkills> = ({ skills }) => (
  <div className="container flex">
    {
    skills.map(skill => (
      <div
        key={skill.alt}
        className="mr-5"
      >
        <a href={skill?.link} target="_blank">
          <Image
            src={skill.src}
            height="25"
            width="25"
            alt={skill.alt}
            title={skill.alt}
          />
        </a>
      </div>
    ))
    }
  </div>
);

export default HighlightSkills;