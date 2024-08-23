import React from "react";
import "./App.css";
// import logo from "./asset/logo.png";

function Head() {
  // Define the proposal data
  const proposaldata = {
    
    companyname: "NMW INTERNET TECHNOLOGIES",
    projecttittle: "Proposal for Wellthenso",
    projecttool:"Project Management Tool",
    createby:"CREATED BY",
    createname:"S. Thamilselvan",
    mobileno:"+91 96777 70552",
    contact:"CONTACT",
    website:"www.webverkz.com",
    emailid:"thamilselvan@nmwinternet.com",
    project:"PROJECT",
    projectname:"Welthenso"
  };

  return (
    <>
      <div className="pdf-container">
        <div className="logo_section">
          <img
            src='data:image/png;base64,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'
            alt="Logo"
            className="img-fluid mb-4"
          />
          <p>{proposaldata.companyname}</p>
        </div>

        <div className="bottom-aligned-div">
          <div className="proposal-title">
            <h1>{proposaldata.projecttittle}</h1>
            <span>{proposaldata.projecttool}</span>
          </div>
          <div className="contact-details">
            <div className="row">
              <div className="col-lg-3 created">
                <p>{proposaldata.createby}</p>
                <span>{proposaldata.createname} </span>
                <span>{proposaldata.mobileno}</span>
              </div>

              <div className="col-lg-5 contact">
                <p>{proposaldata.contact}</p>
                <span>{proposaldata.website}</span>
                <span>{proposaldata.emailid}</span>
              </div>

              <div className="col-lg-4 project">
                <p>{proposaldata.project}</p>
                <span>{proposaldata.projectname}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
