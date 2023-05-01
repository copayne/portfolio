import { type NextPage } from "next";
import { Roboto_Mono } from 'next/font/google';
import clsx from 'clsx';
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDarkMode } from "~/stores/DarkMode";
import DarkMode from "~/components/DarkMode";
import NameHeader from '~/components/NameHeader';
import { api } from "~/utils/api";

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
});

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
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
        <div className="container flex items-start justify-between max-w-5xl m-2">
          <NameHeader />
          <DarkMode />
        </div>
      </main>
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
