import { type NextPage } from "next";
import DarkMode from "~/components/utils/DarkMode";
import NameHeader from '~/components/common/NamePlate';
import Navbar from '~/components/common/Navbar';

const Header: NextPage = () => (
  <div className="container flex items-start justify-between max-w-5xl m-2">
    <div className="flex">
      <NameHeader />
      <Navbar />
    </div>
    <DarkMode />
  </div>
);

export default Header;