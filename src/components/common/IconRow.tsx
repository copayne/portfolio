import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import clsx from 'clsx';

export interface Icon {
  alt: string,
  label?: string,
  link?: string,
  src: StaticImageData,
  thumb?: StaticImageData,
}

interface IconRow {
  icons: Array<Icon>,
  size?: number,
  justify?: string,
}
  
const IconRow: React.FC<IconRow> = ({ icons, justify = '', size = 46 }) => (
  <div
    className={
      clsx(
        "container flex justify-center sm:justify-start items-center flex-wrap max-w-sm",
        justify === 'center' && 'justify-center',
      )
    }
  >
    {
    icons.map(icon => (
      <div
        key={icon.alt}
        className="w-20 flex flex-col justify-center items-center my-2 mx-4"
        >
        <a href={icon?.link} target="_blank">
          <Image
            src={icon.src}
            height={size}
            width={size}
            alt={icon.alt}
            title={icon.alt}
          />
        </a>
        { icon.label && <p className="text-light-secondary dark:text-dark-secondary text-sm">{icon.label}</p> }
      </div>
    ))
    }
  </div>
);

export default IconRow;