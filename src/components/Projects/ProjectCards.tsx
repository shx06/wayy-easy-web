import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";


interface ProjectCardsProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
  const { imgPath, isBlog, title, description, demoLink } = props;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              position: "absolute",
              bottom: 10
            }}
          >
            <CgWebsite style={{ marginBottom: 3 }} /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
