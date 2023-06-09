import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TestimonialsBox from "./TestimonialsBox";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          image: "assets/images/testimonials/user-2.jpg",
          title: "RUBEN REED ",
          subTitle: "Charleston",
          desc:
            "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
        },
        {
          image: "assets/images/testimonials/user-1.jpg",
          title: "MICHAEL P. HOWLETT ",
          subTitle: "Worcester",
          desc:
            "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.",
        },
        {
          image: "assets/images/testimonials/user-3.jpg",
          title: "THERESA D. SINCLAIR",
          subTitle: "Lynchburg",
          desc:
            "I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* section title */}
            <SectionTitle
              title="WHAT THEY'VE SAID"
              desc="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli."
            />

            <Row className="mt-5">
              <TestimonialsBox clients={this.state.clients} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
