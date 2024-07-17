import { Col, Container, Row } from "react-bootstrap";

import ProjectCard from "./ProjectCards";

import leaf from "../../assets/images/hy.png";

import emotion from "../../assets/images/cp.png";
import chatify from "../../assets/images/darla.png";
import editor from "../../assets/images/ms.png";
import suicide from "../../assets/images/ni.png";
import bitsOfCode from "../../assets/images/oned.png";

export default function ProjectList() {
    return (
        <div>

            <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify.src}
                            isBlog={false}
                            title="Darla"
                            description="Drala is a special cryptocurrency designed for use exclusively within specific private spaces like churches. It runs on a secure website built with MongoDB, Express.js, React, and Node.js. Transactions and interactions within this closed system are safe and confidential."
                            demoLink="https://darla.io"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode.src}
                            isBlog={false}
                            title="OneDot"
                            description="OneDot Is a Logistic Booking Website. Technology Used In Onedot are Wordpress,Javascript,HTML,CSSOnedot.live is the official website for a logistics company, showcasing its comprehensive logistics solutions and services. Designed with WordPress and developed using JavaScript, PHP, HTML, and CSS, the website offers a user-friendly interface for customers to explore and interact with the company's offerings"
                            demoLink="https://onedot.live/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor.src}
                            isBlog={false}
                            title="Medicine Stockist"
                            description="As a Full Stack Developer, I was part of a team that built Medicine Stockist, a comprehensive pharmacy management application. Utilizing tools such as React, Bootstrap, SCSS, Stripe, Express, TypeScript, MongoDB, Azure Blob, OpenAI API, Replicate AI, Cronjob, and JWT, we created a solution that streamlines pharmacy operations."
                            demoLink="https://play.google.com/store/apps/details?id=com.sts.medicinestockmanagement&hl=en_IN&gl=US"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf.src}
                            isBlog={false}
                            title="Nashbud"
                            description="As a Full Stack Developer, I contributed to the development of Nashbud, a secure platform designed for genuine connections based on shared interests and passions. Using tools like NextJS, MongoDB, Express, React, and NodeJS, we created an environment where users can connect authentically and privately."
                            demoLink="https://play.google.com/store/apps/details?id=com.NashBud3.nashbud&hl=en_IN&gl=US"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide.src}
                            isBlog={false}
                            title="NioPractice"
                            description="NIOPractice is an AI-powered educational app tailored specifically for JEE aspirants. Our mission is to help students enhance their speed and accuracy in mathematics, a crucial subject for excelling in competitive exams like JEE."
                            demoLink="https://play.google.com/store/apps/details?id=com.niopractice.prodMob&hl=en_US"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion.src}
                            isBlog={false}
                            title="Catalog Maker Pro : Online"
                            description="Catalog Maker Pro is a versatile online app with multi-device support that enables you to create professional product catalogues (catalogs) directly from your phone. Effortlessly design and share catalogues with your customers in just minutes, making it convenient to manage and promote your products on the go."
                            demoLink="https://play.google.com/store/apps/details?id=com.asharinfotech.catalogmakerpro"
                        />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}