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
                          src={require("assets/img/HROlogo.png")}
                        />
                        <h5 className="title">12-03-2019</h5>
                      </a>
                      <p className="description">Rotterdam</p>
                    </div>
                    <div className="card-description">
                      <h4>Project genoten:</h4>
                      <ul>
                        <li>Pieter Lems</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>Studenten Number: 0933142</li>
                            <li>Email: 0933142@hr.nl</li>
                          </ul>
                        </li>
                        <li>Jawed Balkhi</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>Studenten Number: 0926064</li>
                            <li>Email: 0926064@hr.nl</li>
                          </ul>
                        </li>
                        <li>Joessi Moorman</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>Studenten Number: 0957787</li>
                            <li>Email: 0957787@hr.nl</li>
                          </ul>
                        </li>
                        <li>Saleem Sarwar</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>Studenten Number: 0921816</li>
                            <li>Email: 0921816@hr.nl</li>
                          </ul>
                        </li>
                        <li>Morris Keehnen</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>Studenten Number: 0907333</li>
                            <li>Email: 0907333@hr.nl</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="6" lg="7">
                <h3>Onderzoeksmethode</h3>
                <p className="mb-3">
                In ons onderzoek willen we een breder beeld krijgen van Natural User Interfaces (NUI’s) in het algemeen. Hierdoor was het voor ons van belang eerst een beter beeld te krijgen van wat een NUI precies is, en wat voor soorten NUI’s er zijn. Pas nadat dat breder beeld scherp was, konden we de diepte in gaan bij alle verschillende NUI’s.
                </p>
                <p className="mb-3">We hebben daarom ervoor gekozen om dit deelvragen te maken voor onze inleiding, die alle groepsgenoten individueel probeerde te beantwoorden. Vervolgens zijn we samen gaan zitten, om deze resultaten te bespreken en zo samen een volledig beeld te krijgen over NUI’s.</p>
                <p className="mb-3">Wat ons het meest interessant leek om te onderzoeken, was de toekomst van de verschillende NUI’s. In onze optiek is de geschiedenis en het heden heel interessant, maar waar altijd de focus ligt is de toekomst en innovatie. Bedrijven willen nieuwe producten en applicaties ontwikkelingen. Het leek ons daarom een goede vaardigheid om binnen een nieuwe technologie te kunnen identificeren waar het knelpunt van zo’n technologie ligt, en te speculeren over wat de mogelijkheden van deze NUI zouden kunnen zijn.</p>
                <p className="mb-3">Hierdoor kwamen wij op onze hoofdvraag: Wat kunnen we verwachten qua innovatie binnen de verschillende Natural User Interfaces?</p>
                <p className="mb-3">Ook hiervoor leek het ons belangrijk eerst een duidelijk kader te maken voor de NUI die werd onderzocht. We hebben besloten dit te doen door literatuuronderzoek onderzoek te doen op basis van verschillende deelvragen. We hebben elke NUI opgedeeld in verschillende tijdsperiodes, namelijk het verleden, heden, en de toekomst.</p>
                <p className="mb-3">De focus van het verleden was om een duidelijk beeld te krijgen van hoe de ontwikkeling van de NUI door de tijd heen is geweest, hoe deze specifiek werkt, en waarom het kwalificeert als een NUI. Voor deze 3 sub-vragen hebben we deelvragen opgezet, die elk van de groepsgenoten voor een eigen gekozen NUI zouden gaan beantwoorden. Hierdoor kreeg elk groepsgenoot een duidelijk beeld van hoe zijn NUI werkte, en hoe dit ook door de jaren heen eventueel is veranderd.</p>
                <p className="mb-3">Daarna leek het ons belangrijk in te zoomen op het heden. Hiervoor hebben we de volgende deelvraag opgesteld: Op welke manieren wordt de NUI momenteel gebruikt? Hierdoor werd het nog duidelijker waar de technologie nu al wordt gebruikt, maar ook in hoeverre bepaalde prototypes al in productie zijn. Hierdoor kregen we al een duidelijk idee van waar de toekomst misschien naar toe gaat.</p>
                <p className="mb-3">Als laatst hebben we nog gekeken naar de toekomst. Aan de hand van de laatste deelvraag hebben we onderzoek gedaan naar hoeveel er nog mogelijk is binnen een bepaalde NUI. Doordat we tijdens het literatuuronderzoek veel kennis hebben verkregen over onze eigen NUI, konden we ook eigen bevindingen en meningen in deze deelvraag kwijt. De rest van deze deelvraag werd wel beantwoord door literatuuronderzoek.</p>
                <p className="mb-3">In de conclusie beschrijven we kort de bevindingen die zijn gedaan, en daarnaast onze aanbevelingen en verwachtingen over de toekomst, wat een antwoord geeft op onze gestelde hoofdvraag.</p>
                <p className="mb-3">Overzicht hoofdvragen en deelvragen:</p>
                <ul>
                  <li>Hoofdvraag:</li>
                  <li className="list-unstyled">
                          <ul>
                            <li>Wat kunnen we verwachten qua innovatie binnen de verschillende Natural User Interfaces?</li>
                          </ul>
                        </li>
                </ul>
                <ul>
                  <li>Deelvragen: inleiding</li>
                  <li className="list-unstyled">
                          <ul>
                            <li>Wat zijn NUI's?</li>
                            <li>Welke soorten NUI's zijn er?</li>
                          </ul>
                        </li>
                </ul>
                <ul>
                  <li>Deelvragen: per NUI</li>
                  <li className="list-unstyled"> Verleden/Achtergrond
                          <ul>
                            <li>Geschiedenis van de NUI</li>
                            <li>Hoe werkt de NUI?</li>
                            <li>Waarom is de desbetreffende NUI intuïtief?</li>
                          </ul>
                        </li>
                        <li className="list-unstyled"> Heden
                          <ul>
                            <li>Op welke manieren wordt de NUI momenteel gebruikt?</li>
                          </ul>
                        </li>
                        <li className="list-unstyled"> Toekomst
                          <ul>
                            <li>Is er nog ruimte voor innovatie binnen deze NUI?</li>
                          </ul>
                        </li>
                </ul>

              </Col>
            </Row>
          </CardBody>
        </div>
      </>
    );
  }
}

export default Research;
