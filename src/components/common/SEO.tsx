import Head from "next/head";

const SEO = ({
  title = "Web Serv | Developer Agency",
  description = "web serv - a web development service provider agency",
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
