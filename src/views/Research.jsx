import React from "react";

// reactstrap components
import { Card, CardBody, CardText, Col, Row } from "reactstrap";

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
                      <h3>Hoofd vraag:</h3>
                      <h5>
                        Op welke manier kunnen Natural User Interfaces het
                        gebruik van applicaties bevorderen?
                      </h5>
                      <h3>Deel vragen: inleiding</h3>
                      <ul>
                        <li>Wat zijn NUI's?</li>
                        <li>Welke soorten NUI's zijn er?</li>
                      </ul>
                      <h3>Deel vragen: per NUI</h3>
                      <li>Verleden/Achtergond</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Hoe werkt de NUI?</li>
                          <li>Waarom is de desbetreffende NUI instinctief?</li>
                        </ul>
                      </li>
                      <li>Heden</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>
                            Op welke manieren word de NUI momenteel gebruikt?
                          </li>
                        </ul>
                      </li>
                      <li>Toekomst</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>
                            Is er nog ruimte voor innovatie binnen deze NUI?
                          </li>
                        </ul>
                      </li>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="6" lg="7">
                <h3>Onderzoeks methode</h3>
                <p>
                  De data voor dit onderzoek zijn verzameld door middel van een
                  literatuuronderzoek. De bronnen voor dit literatuuronderzoek
                  zijn gezocht in de Academic Search Complete, een
                  multidisciplinair database van wetenschappelijke
                  tijdschriften, en Gartner Higher Education, een
                  informatietechnologie onderzoek- en adviesfirma die inzicht in
                  technologische ontwikkelingen geeft.
                </p>
                <p>
                  Er is een selectie gemaakt van de laatste ontwikkelingen van
                  de betreffende interfaces. Van technologieën die al langer
                  worden gebruikt, worden de meest recente ontwikkelingen
                  beschreven. Bij voorkeur wordt gekeken naar de
                  wetenschappelijke of vakinhoudelijke bronnen met betrekking
                  tot usability. Andere publicaties zoals facebook, blog’s etc
                  worden niet geïncludeerd.
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
