import { type NextPage } from "next";
import DarkMode from "~/components/utils/DarkMode";
import NamePlate from '~/components/common/NamePlate';
import Navbar from '~/components/common/Navbar';

const Header: NextPage = () => (
  <div className="sticky top-0 m-auto max-w-full sm:max-w-screen-lg flex items-start justify-between p-2">
    <div className="flex bg-light-background dark:bg-dark-background">
      <NamePlate />
      <Navbar />
    </div>
    <DarkMode />
  </div>
);

export default Header;