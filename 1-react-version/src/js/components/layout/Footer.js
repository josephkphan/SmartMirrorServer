import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
        <footer className="footer" style={footerStyles}>
          <div className="container-fluid">
            <p className="copyright pull-right">
              &copy; <script>document.write(new Date().getFullYear())</script> My Smart Mirror
            </p>
          </div>
        </footer>
    );
  }
}
