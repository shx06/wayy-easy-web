import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsImage } from "./skillImages";
import { skillsData } from "./skills";

function Skills() {
    return (
        <div id="skills" className="position-relative z-50 border-top my-5 my-lg-24 border-dark">
            <div className="position-absolute bg-violet-100 rounded-circle filter-blur opacity-20" style={{ width: "100px", height: "100px", top: "1.5rem", left: "50%", transform: "translateX(-50%)" }}></div>

            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="bg-gradient w-100" style={{ height: "1px" }}></div>
                </div>
            </div>

            <div className="w-100 my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div className="skill-card" key={id}>
                            <div className="card border border-dark bg-dark text-white transition-all">
                                <div className="d-flex justify-content-center">
                                    <div className="w-75">
                                        <div className="bg-gradient w-100" style={{ height: "1px" }}></div>
                                    </div>
                                </div>
                                <div className="card-body text-center p-4">
                                    <Image
                                        src={skillsImage(skill)?.src}
                                        alt={skill}
                                        width={40}
                                        height={40}
                                        className="img-fluid rounded"
                                        style={{ height: "40px" }}
                                    />
                                    <p className="card-text mt-3">{skill}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Skills;

// Custom CSS
<style jsx>{`
  .bg-gradient {
    background: linear-gradient(to right, transparent, violet, transparent);
    height: 1px;
  }

  .filter-blur {
    filter: blur(3px);
  }

  .opacity-20 {
    opacity: 0.2;
  }

  .rounded-circle {
    border-radius: 50%;
  }

  .skill-card {
    flex: 0 0 auto;
    margin: 0 10px;
    transition: transform 0.5s, box-shadow 0.5s;
  }

  .skill-card:hover {
    transform: scale(1.15);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(128, 0, 128, 0.2);
  }

  .transition-all {
    transition: all 0.5s;
  }
`}</style>
