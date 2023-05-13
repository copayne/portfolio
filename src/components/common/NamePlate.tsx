import clsx from 'clsx';

interface NamePlateProps {
  size: string,
}

const NamePlate = ({ size = 'medium' }: NamePlateProps) => (
  <div className="flex border-2 border-light-primary dark:border-dark-primary">
    <p
      className={clsx(
        'font-semibold bg-light-background dark:bg-dark-background',
        size === 'medium' && "mx-1 px-1 sm:text-[2rem]",
        size === 'small' && "mx-1 px-1 sm:text-sm",
      )}
    >
      Cody
    </p>
    <p
      className={clsx(
        "px-1 font-semibold bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background transition-all",
        size === 'medium' && "px-1 sm:text-[2rem]",
        size === 'small' && 'px-1 sm:text-sm',
      )}
    >
        Payne
    </p>
  </div>
);

export default NamePlate;