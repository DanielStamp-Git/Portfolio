import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <Card className="project-card-view h-100">
      <Card.Img variant="top" src={imgPath} alt="project-preview" />

      {/* Flex column ensures button stays at bottom */}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        {/* Description grows to push buttons down */}
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {description}
        </Card.Text>

        {/* Buttons container - centered at bottom */}
        <div className="mt-auto d-flex justify-content-center gap-2">
          <Button 
            variant="primary" 
            href={ghLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
