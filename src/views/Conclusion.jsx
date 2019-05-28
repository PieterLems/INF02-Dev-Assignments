import React from "react";


// reactstrap components
import {
  CardBody,
  Col
} from "reactstrap";



class Conclusion extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <CardBody>
          <Col className="ml-auto mr-auto" md="6" lg="7">
                <h3>Conclusie</h3>
                <h4>Gaze</h4>
                <p></p>
                <h4>Brain</h4>
                <p>BCI is nog een erg jonge technologie, maar wel 1 met veel potentie. Door het lezen van breinsignalen die worden afgegeven bij verschillende acties, kan een BCI begrijpen wat een gebruiker wil doen, en deze actie voor hem uitvoeren, denk bijvoorbeeld aan het bewegen van je hand. Voornamelijk door hoge kosten en doordat de technologie nog niet erg betrouwbaar is, zien we dat de technologie nog niet is waar het wel kan komen. Echter, het zal niet erg lang duren, doordat er steeds meer aandacht voor komt en ook de praktische implementaties steeds indrukwekkender worden.</p>
                <h4>Touch</h4>
                <p></p>
                <h4>Speech</h4>
                <p></p>
                <h4>Gesture</h4>
                <p></p>
              </Col>
          </CardBody> 
        </div>
      </>
    );
  }
}

export default Conclusion;
