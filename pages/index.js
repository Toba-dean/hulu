import Head from "next/head";

import { Header } from "../components/header";
import { NavBar } from "../components/NavBar";
import { Result } from "../components/Result";
import request from "../utils/request";

export default function Home({ result }) {
  return (
    <div>
      <Head>
        <title>Hulu - Clone</title>
        <link rel="icon" href="/hulu.png" />
      </Head>

      <main>
        <Header />
        <NavBar />
        <Result result={result}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(`${request[genre]?.url || request.fetchTrending.url}`)
    .then(res => res.json());

    return{
      props: {
        result: requests.results
      }
    }
}
