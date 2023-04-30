
import MoonIcon from '@iconscout/react-unicons/icons/uil-moon';
import SunIcon from '@iconscout/react-unicons/icons/uil-sun';
import { useDarkMode } from "~/stores/DarkMode";

const DarkMode = () => {
  const darkMode = useDarkMode((state: { darkMode: boolean; }) => state.darkMode);
  const update = useDarkMode(state => state.update);

  return (
    <button onClick={() => update(!darkMode)}>
      {
        darkMode
          ? <MoonIcon className="text-dark-primary w-10 h-10 mx-1 my-1 hover:text-dark-primary-light" />
          : <SunIcon className="text-light-secondary w-10 h-10 mx-1 my-1 hover:text-light-secondary-dark" />
      }
    </button>
  )
} 

export default DarkMode;