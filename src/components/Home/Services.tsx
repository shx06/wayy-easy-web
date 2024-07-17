import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";
import Skills from "./TechList";

export default function Services() {
  return (
    <>
      <SectionWrapper bgColor="secondary">
        <SectionHeading
          heading="Technology we work with"
          description="We work with almost all kinds of tech stack to ensure to get the best output with the best suitable tech."
          position="left"
        />
        <Skills />
      </SectionWrapper>
    </>
  );
}
