import React, { Component } from "react";
import Resume from "../images/HalsteinResume2021.pdf";

class Pdf extends Component {
  openPdf = () => {
    // debugger
    let win = window.open(Resume, "_blank");
    win.focus();
  };

  render() {
    return (
      <button className="resume" onClick={this.openPdf}>
        view resume
      </button>
    );
  }
}

export default Pdf;
