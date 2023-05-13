import { FaSun} from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { useDarkMode } from "~/stores/DarkMode";
import clsx from 'clsx';

interface DarkModeProps {
  size: string,
}

const DarkMode = ({ size = 'medium' }: DarkModeProps) => {
  const darkMode = useDarkMode((state: { darkMode: boolean; }) => state.darkMode);
  const update = useDarkMode(state => state.update);

  return (
    <button onClick={() => update(!darkMode)}>
      {
        darkMode
          ? (
          <FaRegMoon
            className={clsx(
              "text-dark-primary w-7 h-7 hover:text-dark-primary-light transition-all",
              size === 'medium' && 'mx-1 my-1 sm:w-10 sm:h-10',
              size === 'small' && 'sm:w-7 h-7',
            )}
          />
          ) : (
            <FaSun
              className={clsx(
                "text-light-secondary w-7 h-7 hover:text-light-secondary-dark transition-all",
                size === 'medium' && 'mx-1 my-1 sm:w-10 sm:h-10',
                size === 'small' && 'sm:w-7 h-7',
              )}
            />
          )
      }
    </button>
  )
} 

export default DarkMode;