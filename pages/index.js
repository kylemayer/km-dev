import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";

import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyle Mayer</title>
        <meta name="description" content="Developer portfolio of Kyle Mayer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <MyProjects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
