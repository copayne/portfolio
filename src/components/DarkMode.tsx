import { FaSun} from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { useDarkMode } from "~/stores/DarkMode";

const DarkMode = () => {
  const darkMode = useDarkMode((state: { darkMode: boolean; }) => state.darkMode);
  const update = useDarkMode(state => state.update);

  return (
    <button onClick={() => update(!darkMode)}>
      {
        darkMode
          ? <FaRegMoon className="text-dark-primary w-10 h-10 mx-1 my-1 hover:text-dark-primary-light" />
          : <FaSun className="text-light-secondary w-10 h-10 mx-1 my-1 hover:text-light-secondary-dark" />
      }
    </button>
  )
} 

export default DarkMode;