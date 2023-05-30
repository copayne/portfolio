import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import clsx from 'clsx';

interface Icon {
  alt: string,
  label?: string,
  link?: string,
  src: StaticImageData,
}

interface IconRow {
  icons: Array<Icon>,
  justify?: string,
}
  
const IconRow: React.FC<IconRow> = ({ icons, justify = '' }) => (
  <div
    className={
      clsx(
        "container flex items-center flex-wrap max-w-sm",
        justify === 'center' && 'justify-center',
      )
    }
  >
    {
    icons.map(icon => (
      <div
        key={icon.label}
        className="w-20 flex flex-col justify-center items-center my-2 mx-4"
        >
        <a href={icon?.link} target="_blank">
          <Image
            src={icon.src}
            height="46"
            width="46"
            alt={icon.alt}
          />
        </a>
        { icon.label && <p className="text-light-secondary dark:text-dark-secondary text-sm">{icon.label}</p> }
      </div>
    ))
    }
  </div>
);

export default IconRow;