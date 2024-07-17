import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";
import ProjectList from "./ProjectList";

export default function Services() {
  return (
    <>
      <SectionWrapper bgColor="secondary">
        <SectionHeading
          heading="Our Services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            incidunt rerum dolores pariatur. Odio, id. Iure commodi, similique."
          position="left"
        />
        <ProjectList />
      </SectionWrapper>
    </>
  );
}
