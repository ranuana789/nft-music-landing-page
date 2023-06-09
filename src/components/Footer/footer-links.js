import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <React.Fragment>
        <div className="footer-alt">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="float-start pull-none">
                  <p className="copy-rights text-muted">
                    {year} © Chorus - All rights reserved
                  </p>
                </div>

                <div className="clearfix"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterLinks;
