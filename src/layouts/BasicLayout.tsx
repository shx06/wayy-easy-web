import NavBar from "@/components/navbar";

type IProps = {
  children: React.ReactNode;
};

const BasicLayout = ({ children }: IProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default BasicLayout;
