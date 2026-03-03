import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Contact_Resume = () => {
  return (
    <div className="contact">
      <div className="foot-ico">
        <Tooltip title="To GitHub Profile">
          <IconButton
            onClick={() => window.open("https://github.com/Rvp0310", "_blank")}
          >
            <GitHubIcon className="ico" sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="To mail draft">
          <IconButton
            onClick={() =>
              (window.location.href =
                "mailto:rutujaparab55319@gmail.com?subject=Opportunity Inquiry&body=Hello Rutuja,")
            }
          >
            <EmailIcon className="ico" sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="To LinkedIn Profile">
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rutuja-parab-42622a29b",
                "_blank",
              )
            }
          >
            <LinkedInIcon className="ico" sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </div>
      <div className="resume-preview">
        <iframe
          src="/Resume.pdf"
          title="Resume Preview"
          width="80%"
          height="600px"
        />
      </div>
    </div>
  );
};

export default Contact_Resume;
