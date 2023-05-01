import { type NextPage } from "next";
import { Roboto_Mono } from 'next/font/google';
import clsx from 'clsx';
import Head from "next/head";
import { useDarkMode } from "~/stores/DarkMode";
import Header from '~/components/header';

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '300',
});

const Home: NextPage = () => {
  const darkMode = useDarkMode(state => state.darkMode);

  return (
    <div className={clsx(
      font.className,
      darkMode && "dark"
      )
    }>
      <Head>
        <title>Cody Payne</title>
        <meta name="description" content="Software Developer" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen justify-center">
        <Header />
      </main>
    </div>
  );
};

export default Home;
