import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Editor from './Editor';  // Your Editor component
import Document from './pdfview';  // Your Document component

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Editor />} />
      <Route path="/document" element={<Document />} />
    </Routes>
  );
}

export default App;
