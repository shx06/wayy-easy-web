import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";
import ProjectList from "./ProjectList";

export default function Services() {
  return (
    <>
      <SectionWrapper bgColor="secondary">
        <SectionHeading
          heading="Our Projects"
          description=""
          position="left"
        />
        <ProjectList />
      </SectionWrapper>
    </>
  );
}
