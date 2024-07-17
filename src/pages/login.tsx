import Login from "@/components/Auth/Login";
import SEO from "@/components/common/SEO";

const LoginPage = () => {
  return (
    <>
      <SEO title="Login" description="Login to your WebServ account" />
      <Login />
    </>
  );
};

export default LoginPage;
