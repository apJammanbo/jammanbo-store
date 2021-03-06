import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <Head>
      <title>About | Jammanbo Store</title>
    </Head>
    <h1>About Page</h1>
  </div>
);

export default withLayout(About);
