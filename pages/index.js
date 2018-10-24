import Head from "next/head";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>HOME | Jammanbo Store</title>
    </Head>
    <h1>Hello From The index!</h1>
  </div>
);

export default withLayout(Index);
