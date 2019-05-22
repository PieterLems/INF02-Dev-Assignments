import React from "react";


// reactstrap components
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";



class Dashboard extends React.Component {
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
                              <li>Student Number: 0957787</li>
                              <li>Email: 0957787@hr.nl</li>
                            </ul>
                          </li>
                          <li>Saleem Sarwar</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0921816</li>
                              <li>Email: 0921816@hr.nl</li>
                            </ul>
                          </li>
                          <li>Morris Keehnen</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0907333</li>
                              <li>Email: 0907333@hr.nl</li>
                            </ul>
                          </li>
                        </ul>
                  </div>
                </CardBody>
              </Card>
              
              </Col>
              <Col className="ml-auto mr-auto" md="6" lg="7">
              <img
                        alt="..."
                        className="intro-logo"
                        src={require("assets/img/react-logo.png")}
                      />

                <h3>Introductie</h3>
                <p>
                Om te kunnen begrijpen wat Natural User Interfaces zijn, is het belangrijk eerst stil te staan bij wat een User Interface is. Als gebruiker, heb je altijd een manier nodig om met een bepaalde applicatie om te gaan. Denk bijvoorbeeld aan het openen van je Internet Browser. Eerst dubbel klik je op het icoontje, dan klik je op de navigatiebalk, en typ je youtube om leuke kattenfilmpjes te kunnen bekijken.
                In elk van deze stappen kom je in contact met User Interfaces. Je bent namelijk eerst met de applicatie “Windows” aan het praten, en daarna met je browser. Hoe je met die applicaties communiceert noemen we de User Interface.

                </p>
                <p className="mt-3">
                Maar wat zijn Natural User Interfaces dan?
                </p>
                <p>
                Natural User Interfaces zijn Interfaces die zó intuïtief zijn, dat je eigenlijk niet eens doorhebt dat je met een Interface te maken hebt.
                Een voorbeeld hiervan is een touchscreen telefoon. Heel veel apps, zoals bijvoorbeeld een Galerij voor foto’s, heeft geen instructies. Er is niet een knop die je gebruikt om te scrollen, en een knop om iets te selecteren. Als je wilt scrollen, dan doe je dat met je vingers, evenals het selecteren van een specifieke foto. De Interface is dus zo makkelijk in gebruik, dat je geen idee meer hebt dat je met een Interface bezig bent!
                Op de rest van onze website kan je in aanraking komen met allemaal verschillende soorten Natural User Interfaces. We zullen je uitleggen hoe ze zijn ontstaan, hoe het werkt, waar ze nu mee bezig zijn maar ook wat voor dingen we in de toekomst kunnen verwachten.
                </p>
                <img
                        alt="..."
                        className="intro-img"
                        src={require("assets/img/goal.png")}
                      />
                <h3 className="mt-3">Het doel van het project</h3>
                <p>
                Het doel van dit onderzoek is om derdejaars informatica studenten een overzicht te geven van de huidige technische stand van zaken en gebruiksvriendelijkheid van de natural user interfaces speech, voice, gesture, gaze control en brain control, in 2018 om zodoende een vergelijking te kunnen maken met de opkomende technologieën in 2019.
                </p>
              </Col>
            </Row>
          </CardBody> 
        </div>
      </>
    );
  }
}

export default Dashboard;
