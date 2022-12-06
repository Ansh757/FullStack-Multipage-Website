import React, { Component } from "react";
import ReactDOM from "react-dom";

class FileUploadButton extends Component {

    handleFileUpload = event => {
        console.log(event.target.files[0].name);
    };

    render() {
        return (
            <React.Fragment>
                <input
                    ref="fileInput"
                    onChange={this.handleFileUpload}
                    type="file"
                    style={{ display: "none" }}
                />
                <button onClick={() => this.refs.fileInput.click()}> <i className="fas fa-camera-retro"> </i> </button>
            </React.Fragment>
        );
    }
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<FileUploadButton />, rootElement);

export default FileUploadButton;


