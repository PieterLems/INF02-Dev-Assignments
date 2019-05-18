import React from "react";


// reactstrap components
import {
  Card,
  CardBody,
  CardText,
  Col,
  Row
} from "reactstrap";



class Research extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <CardBody>
          <Row>
          <Col md="6" lg="3">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/research.jpeg")}
                      />
                      <h5 className="title">12-03-2019</h5>
                    </a>
                    <p className="description">Rotterdam</p>
                  </div>
                  <div className="card-description">
                        <h3>Main Question</h3>
                        <h5>In what way does a NUI improve the user experience when interacting with an application?</h5>
                        <h3>Sub Questions</h3>
                        <ul>
                          <li>What type of NUI's exist?</li>
                         
                          <li>What are NUI's?</li>
                          
                          <li>What is the background of the NUI in question?</li>
                          
                          <li>How does this NUI work?</li>
                         
                          <li>Why is this NUI instinctive?</li>
                        
                        </ul>
                  </div>
                </CardBody>
              </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="6" lg="7">
                <h3>Method of research</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elementum nulla. Proin sed nibh at neque convallis interdum at non tortor. Vivamus ultrices odio ac quam lacinia sodales. In hac habitasse platea dictumst. Etiam fringilla, quam in semper varius, urna dui rhoncus mi, quis sollicitudin justo elit at lectus. Nam in mi mattis nisi ullamcorper finibus eu et ipsum. Sed non augue neque. Aenean consequat porta urna id sagittis. Fusce sed quam quam. Quisque viverra quam quam. Sed vestibulum mattis libero, sed dignissim odio fermentum non.
                </p>
              </Col>
            </Row>
          </CardBody> 
        </div>
      </>
    );
  }
}

export default Research;
