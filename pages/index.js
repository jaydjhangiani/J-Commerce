import Head from "next/head";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <Categories />
      <Newsletter />
    </div>
  );
}
