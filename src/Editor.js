import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
// import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { TreeView } from '@mui/x-tree-view';
import { NavLink } from "react-router-dom";


const CustomLabel = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Project Details</Typography>
    </Toolbar>
  </AppBar>
);

const CustomLabel1 = () => (
  <AppBar position="static" style={{ marginTop: "20px" }}>
  <Toolbar>
    <Typography variant="h6">Project Content</Typography>
  </Toolbar>
</AppBar>
);



const Editor = () => {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const sections = useSelector((state) => state.sections);
  const [logo, setLogo] = useState(header.logo);

  const [newSection, setNewSection] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleAddSection = () => {
    dispatch({
      type: "ADD_SECTION",
      payload: { name: newSection, content: [] },
    });
    setNewSection("");
  };

  const handleAddContent = (index) => {
    dispatch({
      type: "UPDATE_SECTION",
      index,
      content: { title: newTitle, content: newContent },
    });
    setNewTitle("");
    setNewContent("");
  };

  const handleHeaderChange = (key, value) => {
    dispatch({ type: "SET_HEADER", payload: { [key]: value } });
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setLogo(base64String);
        handleHeaderChange('logo', base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      event.stopPropagation();
    }
  };

  
 console.log(header.logo);

  return (
    <Container>

 
      <TreeView>
    <TreeItem nodeId="1" label={<CustomLabel />} defaultCollapseIcon="+" defaultExpandIcon="-">
      <div>
        {[
          { label: "Company Name", value: header.company, key: "company" },
          { label: "Project Name", value: header.prjName, key: "prjName" },
          { label: "Client Name", value: header.client, key: "client" },
          { label: "Creater", value: header.creater, key: "creater" },
          { label: "Mobile Number", value: header.mobile, key: "mobile" },
          { label: "Email", value: header.email, key: "email" },
          { label: "Website", value: header.website, key: "website" },
          { label: "Bank Name", value: header.bank, key: "bank" },
          { label: "Account Holder Name", value: header.accName, key: "accName" },
          { label: "Account Number", value: header.accNum, key: "accNum" },
          { label: "IFSC code", value: header.Ifsc, key: "Ifsc" },
          { label: "Branch Name", value: header.branch, key: "branch" },
        ].map((item, index) => (
          <TextField
            key={index}
            label={item.label}
            variant="outlined"
            fullWidth
            value={item.value}
            onChange={(e) => handleHeaderChange(item.key, e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
          />
        ))}
        {/* <label htmlFor="logo-upload" style={{ display: "block", margin: "20px 0" }}>
          Logo
        </label> */}
        <Button htmlFor="logo-upload" variant="contained" color="primary" component="label" style={{ marginBottom: "20px" }}> Upload Logo 
        <input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            hidden
          />
        </Button>
       
        {header.logo && (
          <img
            src={header.logo}
            alt="Logo"
            style={{ maxWidth: "100%", height: "100px", marginBottom: "20px" }}
          />
        )}
      </div>
    </TreeItem>
  </TreeView>
 
     
 
      

    
      <TreeView>
      <TreeItem nodeId="1" label={<CustomLabel1 />} defaultCollapseIcon="+" defaultExpandIcon="-">
        <div>

      {sections.length === 0 && (
        <div>
          <TextField
            label="New Section Name"
            variant="outlined"
            fullWidth
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddSection}>
            Add Section
          </Button>
        </div>
      )}

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ marginTop: "20px" }}>
          <Typography variant="h2">{section.name}</Typography>
          {section.content.map((contentItem, contentIndex) => (
            <div key={contentIndex} style={{ marginBottom: "10px" }}>
              <Typography variant="h4">{contentItem.title}</Typography>
              <Typography>{contentItem.content}</Typography>
            </div>
          ))}
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
          />
          <TextField
            label="Content"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={() => handleAddContent(sectionIndex)}>
            Add Content
          </Button>
        </div>
      ))}
      {sections.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="Section Name"
            variant="outlined"
            fullWidth
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
            onKeyDown={handleKeyDown}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddSection}>
            Add New Section
          </Button>
        </div>
      )}
      </div>
      </TreeItem>
      </TreeView>

      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        <NavLink to="/document" style={{ textDecoration: "none", color: "white" }}>
          View PDF
        </NavLink>
      </Button>
    </Container>
  );
};

export default Editor;
