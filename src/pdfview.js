


import React from 'react';
import {  useSelector } from 'react-redux';
import Design from './Design.jsx';
import { PDFDownloadLink, PDFViewer, Document } from '@react-pdf/renderer';
import './style.css';
// import Head from './Head.jsx';



const MyDocument = () => {

  
 const header = useSelector((state) => state.header);
  // const sections = useSelector((state) => state.sections);

 return(
  <div className='head'>
    <PDFViewer className="pdf-viewer">
      
    <Design data={header} />
    {/* <Last data={header} /> */}
   
  
    </PDFViewer>
    
    {/* <Head/> */}
  <PDFDownloadLink
    document={
      
        <Design data={header} />
       
     
    }
    fileName={`${header.company}_proposal.pdf`}
  >
    {({ loading }) => (loading ? 'Loading document...' : 'Download Proposal PDF')}
  </PDFDownloadLink>
</div>
 )
}

export default MyDocument;


