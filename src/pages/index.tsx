import { type NextPage } from "next";
import { Roboto_Mono } from 'next/font/google';
import clsx from 'clsx';
import Head from "next/head";
import { useDarkMode } from "~/stores/DarkMode";
import About from '~/components/about';
import Footer from '~/components/footer';
import Header from '~/components/header';
import Projects from '~/components/projects';
import Splash from '~/components/splash';

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '300',
});

const Home: NextPage = () => {
  const darkMode = useDarkMode(state => state.darkMode);

  return (
    <div className={clsx(
      'p-2 sm:p-0',
      font.className,
      darkMode && 'dark bg-dark-background',
      !darkMode && 'bg-light-background',
    )}
    >
      <Head>
        <title>Cody Payne - Developer</title>
        <meta name="description" content="Software Developer" />
        <link rel="icon" href="/letter-c.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center overflow-hidden">
        <Splash />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
