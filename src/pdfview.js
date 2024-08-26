import React from "react";
import { useSelector } from "react-redux";
import Design from "./Design.jsx";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import "./style.css";
import { isMobile } from "react-device-detect";
import { Typography } from "@mui/material";

// import Head from './Head.jsx';

const MyDocument = () => {
  const header = useSelector((state) => state.header);
  const sections = useSelector((state) => state.sections);

  return (
    <div>
      {isMobile ? (
        <div className="head">
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Please view the proposal on a desktop for better experience
          </Typography>
        <PDFDownloadLink
          document={<Design data={header} data1={sections} />}
          fileName={`${header.company}_proposal.pdf`}
        >
          {({ loading }) => (
            <button className="btn btn-primary">
              {loading ? "Loading document..." : "Download Proposal PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
      ) : (
        <div className="head">
          <PDFViewer className="pdf-viewer">
            <Design data={header} data1={sections} />
          </PDFViewer>

          <PDFDownloadLink
            document={<Design data={header} data1={sections} />}
            fileName={`${header.company}_proposal.pdf`}
          >
            {({ loading }) => (
              <button className="btn btn-primary">
                {loading ? "Loading document..." : "Download Proposal PDF"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default MyDocument;
