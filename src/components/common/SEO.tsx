import Head from "next/head";

const SEO = ({
  title = "Wayy Easy | All Software Solutions",
  description = "wayy easy - a software solution group for any kind of solution and in the best possible kind",
}: {
  title?: string;
  description?: string;
}) =>  {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
