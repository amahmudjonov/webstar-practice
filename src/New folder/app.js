import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import SectionTeachers from "./components/sectionTeachers";
import SectionType from "./components/sectionType";

const App = () => {
  return (
    <div className="main">
      <div className="section-header">
        <Header />
      </div>
      <div className="section-teachers">
        <SectionTeachers />
      </div>
      <div className="section-type">
          <SectionType />
      </div>
      <div className="footer">
          <Footer />
      </div>
    </div>
  );
};

export default App;
