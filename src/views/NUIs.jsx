import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Nuis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalTabsIcons: "Gaze",
      openedCollapses: [""]
    };
  }
  collapsesToggle = (e, collapse) => {
    e.preventDefault();
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="content nui">
          <Col md="12">
            <Card className="nui">
              <CardHeader>
                <CardTitle tag="h3">Natural User Interface's</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="2" md="4">
                    {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                    <Nav
                      className="nav-pills-info nav-pills-icons flex-column"
                      pills
                    >
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Gaze"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(e, "verticalTabsIcons", "Gaze")
                          }
                        >
                          <i className="tim-icons icon-satisfied" />
                          Eye
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "brain"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "brain"
                            )
                          }
                        >
                          <i className="tim-icons icon-molecule-40" />
                          Brain
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Touch"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Touch"
                            )
                          }
                        >
                          <i className="tim-icons icon-tap-02" />
                          Touch
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Speech"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Speech"
                            )
                          }
                        >
                          <i className="tim-icons icon-chat-33" />
                          Speech
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            this.state.verticalTabsIcons === "Gesture"
                              ? "active"
                              : ""
                          }
                          onClick={e =>
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Gesture"
                            )
                          }
                        >
                          <i className="tim-icons icon-user-run" />
                          Gesture
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeTab={this.state.verticalTabsIcons}>
                      <TabPane tabId="Gaze">
                        <Card>
                          <CardHeader>
                            <img
                              alt="..."
                              className="nui-indicator-gaze"
                              src={require("assets/img/gaze.png")}
                            />
                            <CardTitle tag="h3">NUI: Eye tracking</CardTitle>
                            <p>
                              Eye tracking is een Natural user interface gebaseerd op de
                              oogbewegingen van de gebruiker. Een UI gebaseerd
                              op de oogbewegingen van een gebruiker heeft vele
                              voordelen. Het  voornaamste voordeel is dat
                              interacties gebaseerd op het aanwijzen van het
                              scherm veel sneller en moeitelozer kunnen worden
                              uitgevoerd,dit komt omdat onze ogen snel en zonder moeite
                              bewegen (Stellmach & Jacob, 2016). Voordat de gebruiker ergens op klikt
                              kijkt hij of zij naar de locatie waar hij op wilt
                              klikken. Wanneer de gebruiker niet met zijn hand
                              naar die locatie hoeft te bewegen zal de
                              gebruiker minder moeite hoeven te doen om op de
                              gewenste content te klikken. Een ander voordeel van eye tracking in de UI is dat de interactie tussen componenten op de website vloeiender zullen verlopen.
                              Bijvoorbeeld, een gebruiker kan een stuk content
                              van de website selecteren met zijn ogen en dan
                              door middel van de een spraakcommando de selectie
                              bevestigen (Stellmach & Jacob, 2016).
                            </p>

                            <p className="mt-3 mb-2">De video hier onder geeft een duidelijk beeld over de werking van eye tracking:</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4JbAyHnYuhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className="mt-3">De gegevens die worden verkregen bij het meten van de gebruikers oog bewegingen kunnen worden gebruikt om te kijken of een UI gebruiksvriendelijk is. </p><p className="mb-3">Daarnaast kan de verkgregen data ook worden gebruikt om software te besturen, dit word gaze control genoemd (Poole & Ball,2006).</p>
                          </CardHeader>
                          <div
                            aria-multiselectable={true}
                            className="card-collapse"
                            id="accordion"
                            role="tablist"
                          >
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOnegaze"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOnegaze")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOnegaze"
                                )}
                              >
                                <CardBody>
                                  <Col lg="10" sm="12">
                                  <h4>Geschiedenis van deze NUI</h4>
                                  <p>
                                    Een onderzoeker genaamd Richard Bolt heeft
                                    in 1980 een idee gemaakt waarbij een
                                    gebruiker naar een scherm kan kijken en aan
                                    de hand van zijn of haar blik interactie plaatsvind met het scherm. Jammer genoeg was
                                    een systeem dat informatie op deze manier kan
                                    verwerken extreem duur en zeldzaam in die
                                    tijd (Stellmach,2013). De prijs van een dergelijk systeem was
                                    rond de 250.000 dollar.</p>
                                                          <Row>

<div>
<p className="mt-3">Figuur 1,  Het eerste en het meest</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image"
                              src={require("assets/img/eye-machine.jpg")}
                            />
</div>
<div>
  <p className="mt-3">recente eye tracking systeem</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image ml-3"
                              src={require("assets/img/eye-machine-new.jpeg")}
                            />
</div>
</Row>
                                    <p> In die tijd werd dus
                                    voornamelijk gekeken naar de toekomst van de
                                    eye/gaze HCI. Dit werd gedaan door
                                    middel van het ontwerpen van prototypes en
                                    het evalueren van technieken die de
                                    interactie tussen het systeem en de ogen van de gebruiker mogelijk maken. De apparatuur die in die
                                    tijd werd gebruikt werd dus als een soort
                                    tijdmachine gebruikt om het ontwikkelen en
                                    onderzoeken van de eye/gaze HCI in de toekomst te
                                    versimpelen.{" "}
                                  </p>
                                  <p>
                                    Terwijl de wereld aan het wachten was op een
                                    goedkopere variant van eye tracking 
                                    technieken werden veel prototypes ontworpen
                                    om de interactie tussen de gebruiker en het
                                    systeem mogelijk te maken. Na veel langer dan
                                    gedacht werd het eindelijk mogelijk om een
                                   eye tracking systeem voor een redelijke prijs te
                                    kopen. Dit was het moment dat systemen
                                    konden worden ontwikkeld waar wij op dit
                                    moment als consument gebruik van kunnen
                                    maken (Stellmach & Jacob,2013).
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                    Er zijn drie verschillende soorten
                                    eye tracking technieken. Deze worden
                                    hieronder beschreven:
                                  </p>
                                  <ul>
                                  <li>Optical tracking</li>
                                    <p>
                                      Bij deze techniek wordt er gebruik gemaakt
                                      van een infrarood laser die reflecteert op
                                      het oog van de gebruiker. Deze
                                      infraroodstraal wordt , net als bij de
                                      eerste techniek, opgevangen door een
                                      sensor die is bevestigd op het systeem.
                                      In figuur 2 zie je de infraroodstraal die reflecteert
                                      op het oog.
                                      Deze techniek is relatief goedkoop en
                                      wordt daarom veel gebruikt door bedrijven
                                      die dergelijke systemen ontwikkelen en
                                      verkopen op de consumenten markt.
                                    </p>
                              
                                    <p className="mt-3">Figuur 2, De werking van optical tracking.</p>
                                    <img
                              alt="..."
                              className="mb-3"
                              src={require("assets/img/eye-optical.png")}
                            />
                            <p>Zoals je kunt zien reflecteert de infrarood straal op 3 verschillende manieren op het oog. (Figuur 2)
                              De positie van de straal op het oog word gemeten door het systeem. Dit word ook wel het "point-of-regard" genoemd (Poole & Ball, 2006).  </p>
                              <p>Voordelen:</p>
                                    <ul>
                                      <li>Goedkoop</li>
                                      <li>Relatief nauwkeurige data </li>
                                      <li>Geen onhandige apparatuur</li>
                                    </ul>
                                    <p>Nadeel:</p>
                                    <ul>
                                      <li>Verkregen data niet accuraat genoeg voor bepaalde doeleinden</li>
                                    </ul>
                                    <p></p>
                                    <li>Eye attached tracking</li>
                                    <p>
                                      Bij deze techniek wordt gebruik gemaakt
                                      van apparatuur dat is bevestigd op het
                                      oog. Hierbij kun je denken aan contactlenzen die
                                      een spiegel of een magnetische sensor
                                      bevatten. De beweging van de apparatuur
                                      wordt gemeten door een sensor die is
                                      bevestigd op het systeem waar de user
                                      gebruik van maakt. Deze techniek wordt het
                                      meest gebruikt door onderzoekers omdat
                                      deze techniek heel nauwkeurig de
                                      bewegingen kan volgen.{" "}
                                    </p>
                                    <p className="mt-3">Figuur 3, Eye attached tracking apparatuur.</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image ml-3"
                              src={require("assets/img/eye-1.jpg")}
                            />
                                    <p>Voordeel:</p>
                                    <ul>
                                      <li>Nauwkeurige data</li>
                                    </ul>
                                    <p>Nadelen:</p>
                                    <ul>
                                      <li>Duur</li>
                                      <li>Onaangename apparatuur</li>
                                    </ul>
                                    <li className="mt-3 ">Electric potential measurement</li>
                                    <p>
                                      Bij de derde techniek wordt gebruik
                                      gemaakt van elektroden die zijn geplaatst
                                      op het netvlies van de gebruiker. De
                                      positie van de elektroden worden gemeten
                                      door een magnetische sensor in het
                                      systeem (Duchowski, 2003). Deze techniek is handig omdat de
                                      oogbewegingen ook in het donker kunnen
                                      worden gemeten. Daarnaast werkt deze
                                      techniek ook nog wanneer de gebruiker zijn
                                      of haar ogen dicht heeft. Dit kan goed van
                                      pas komen in situaties zoals het meten van
                                      oogbewegingen tijdens het slapen. Echter
                                      is deze techniek niet heel accuraat.
                                    </p>
                                    <p className="mt-3">Figuur 4,  Een elektrode die op het oog word geplaatst.</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image ml-3"
                              src={require("assets/img/eye-2.jpg")}
                            />
                                    <p>Voordeel:</p>
                                    <ul>
                                      <li>Kan worden gebruikt met ogen dicht</li>
                                    </ul>
                                    <p>Nadelen:</p>
                                    <ul>
                                      <li>Duur</li>
                                      <li>Onaangename apparatuur op het netvlies</li>
                                    </ul>
                                  </ul>

                                  <h4>
                                    Waarom is de desbetreffende NUI intuïtief?
                                  </h4>
                                  <p>
                                    De Gaze UI wordt gezien als een intuïtieve
                                    UI. Van af jongs af aan kunnen we al gebruik
                                    maken van onze ogen, Dit doen we onbewust.
                                    We hoeven dus niet aan te leren hoe we
                                    gebruik kunnen maken van een user interface
                                    dat gebruik maakt van de gaze NUI.{" "}
                                  </p>
                                  </Col>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwogaze"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwogaze")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwogaze"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                    De eye/gaze NUI word momenteel op meer manieren gebruikt
                                    dan de meeste mensen denken. Het gebruik van
                                    deze UI word ondertussen als relatief normaal
                                    gezien en wordt gebruik in veel verschillende vakgebieden.
                                  </p>
                                  <p>Waar een persoon naar kijk ligt in verband met de gedachte van een persoon  (Just & Carpenter, 1976). Aan de hand van deze  “oog-geest” -hypothese kan veel informatie worden opgedaan over de interessegebieden van de desbetreffende persoon. Deze informatie kan worden gebruikt om UI’s te optimaliseren met interface-elementen die aantrekkelijk zijn voor de gebruiker. Dit is een goed voorbeeld van hoe de informatie die voortkomt uit eye tracking bruikbaar kan zijn in het optimaliseren van een UI (Goldberg &Kotval, 1999). </p>
                                  <p className="mt-3">Figuur 5, "Eye-mind -hypothese".</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-indicator-breed ml-3"
                              src={require("assets/img/eye-5.jpg")}
                            />
                                  
                                  <p>
                                    De meest bekende manier waarop de eye/gaze NUI
                                    word toegepast is bij virtual reality gaming.
                                    De VR bril bevat sensoren die de
                                    oogbewegingen opvangen, Daarnaast wordt er
                                    ook gebruik gemaakt van de hoofdbewegingen
                                    om er voor te zorgen dat het systeem nog
                                    accurater is.
                                  
                                  </p>
                                  <p className="mt-3">Figuur 6, Een virtual reality bril.</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-indicator-breed ml-3"
                              src={require("assets/img/eye-4.jpeg")}
                            />
                                  
                                  <p>Ook wordt de Gaze UI gebruikt
                                    in de medische wereld. Neem bijvoorbeeld het
                                    eerder genoemde voorbeeld waar wordt gekeken
                                    naar de oogbewegingen van een gebruiker die
                                    slaapt. Met deze informatie kan er onderzoek
                                    worden gedaan naar de verschillende REM
                                    stages tijdens het slapen. In de auto
                                    industrie word op dit moment ook gebruik
                                    gemaakt van de Gaze UI. Door middel van gaze
                                    tracking kan worden gekeken waar de
                                    bestuurder op let tijden het rijden. Deze
                                    informatie kan van pas komen tijdens
                                    rijlessen. 
                                    </p>
                                    
                                    <p>Ook binnen defensie word gebruik
                                    gemaakt van gaze tracking. DARPA, een
                                    amerikaanse overheidsinstantie
                                    verantwoordelijk voor ontwikkelingen binnen
                                    defensie, is op dit moment bezig met een
                                    wapen systeem dat gebruik maakt van de
                                    oogbewegingen van een militair.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThreegaze"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThreegaze")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThreegaze"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                    Ondanks dat er al extreem veel onderzoek is
                                    gedaan op het gebied van de eye/gaze NUI is er
                                    zeker ruimte voor verbetering. Om deze
                                    techniek toe te kunnen passen in situaties
                                    die draaien om leven en dood moet de
                                    techniek zonder fouten kunnen werken. Dit is
                                    echter nog niet het geval sinds eye-tracking
                                    soms nog verkeerd wordt geïnterpreteerd door
                                    het systeem. In de medische wereld of bij
                                    defensie kan dit leiden tot fouten die
                                    ervoor kunnen zorgen dat mensen hier aan
                                    dood gaan. Om er voor te zorgen dat deze
                                    technieken kunnen worden gebruikt in
                                    dergelijke situaties zal de accuraatheid van
                                    de techniek moeten worden verbeterd.
                                     
                                  </p>

                                  <h4>
                                    Conclusie
                                  </h4>
                                  <p>De gaze technologie word op dit moment al op veel verschillende manier toegepast. Het gebruik van deze technologie heeft veel positieve invloed gehad op onze sameleving. Ook is de technologie al ver ontwikkeld, Er is echter nog veel verbetering nodig om deze technologie te kunnen gebruiken in situaties zoals bij defensie of in de medische wereld. Om gebruik te maken van Gaze tracking in dergelijke situaties moet de techniek "foolproof" en "faultproof" zijn, anders kunnen de consquenties fataal zijn.</p>
                                  <p>Ik denk dat de gaze/eye tracking technologie 1 van de meest veelbelovende technieken is. Wanneer je kijkt naar de toekomstplannen die zij gemaakt op het gebied van de gaze/eye NUI, zie je dat er veel potentie is om dagelijkse handelingen nog makkelijker te maken.</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Card>
                      </TabPane>
                      <TabPane tabId="brain">
                        <Card>
                          <CardHeader>
                            <img
                              alt="..."
                              className="nui-indicator-brain"
                              src={require("assets/img/brain.png")}
                            />

                            <CardTitle tag="h3">NUI: Brain</CardTitle>
                            <p>
                            Een Brain-Controlled Interface (BCI) is een interface die signalen die het brein stuurt om bijvoorbeeld iets te doen op kan vangen en kan interpreteren (Schwartz, Cui, Weber, & Moran, 2006). Hierdoor is het mogelijk voor iemand die niet in staat is handelingen te verrichten die nodig zijn om een interface te gebruiken, toch met deze interface te kunnen communiceren. Denk hierbij bijvoorbeeld aan iemand die verlamd is, en hierdoor zich niet kan bewegen of kan praten. Door middel van een BCI, kan deze persoon bijvoorbeeld een toetsenbord aansturen waardoor hij toch kan communiceren. Over het algemeen komen BCI’s vooral voor in de gezondheidszorg. Dit komt doordat de technologie nog te duur is om voor alledaagse dingen in te zetten, het wordt voornamelijk gebruikt voor patiënten die geen andere keuze hebben.
                            </p>
                            <p>
                            Een goed voorbeeld hiervan zijn kunstmatige ledematen, bijvoorbeeld een nieuwe hand. Door het onderzoeken van de brein signalen kan uiteindelijk het nieuwe ledemaat worden aangestuurd.
                            </p>
                            <p className="mt-3 mb-2">De video hier onder geeft een duidelijk beeld over de werking van BCI:</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/PWRGe3uyS4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                          </CardHeader>
                          <div
                            aria-multiselectable={true}
                            className="card-collapse"
                            id="accordion"
                            role="tablist"
                          >
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOnebrain"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOnebrain")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOnebrain"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van deze NUI</h4>
                                  <p>
                                  Het idee van een BCI begon eigenlijk pas rond 1970, maar al in 1924 was er een uitvinding van Berger die de deur opende voor een BCI. Hij ontdekte namelijk voor het eerst een manier om brein signalen in kaart te brengen door de creatie van de Elektro-encefalografie (EEG). Hij kwam hierdoor tot de ontdekking dat verschillende processen van het brein een andere reactie geven, die gemeten kunnen worden. De resultaten van een EEG zijn afgebeeld in afbeelding 1. Van alle verschillende gebieden in het brein wordt gemeten in hoeverre er signalen uitgezonden worden. Hierdoor ontstaan schommelingen in een anders rechte lijn.
                                  </p>

                                  <div>
  <p className="mt-3">Figuur 1, EEG</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image ml-3"
                              src={require("assets/img/brain-1.png")}
                            />
</div>
                                  <p>
                                  De voorvader van het idee om deze signalen ook echt te gebruiken om dingen aan te sturen was Jacques Vidal. In 1973 publiceerde hij het eerste onderzoek over de BCI, waarin hij aangaf dat het echte doel van een BCI moet zijn om dingen aan te kunnen sturen “met je gedachten”(Vidal, 1973). Sindsdien is er veel onderzoek geweest naar BCI, en zijn er ook praktische toepassing gemaakt, zoals een robot-arm die wordt aangestuurd door de gedachten van een aapje (Velliste, Perel, Spalding, Whitford, & Schwartz, 2008).
                                  </p>
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wxIgdOlT2cY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                  De meeste BCI’s werken door middel van 3 componenten zoals geïllustreerd in figuur 2. Als we het voorbeeld van een nieuwe bovenarm zouden nemen, is de eerste stap het opnemen van de brein signalen bijvoorbeeld door een EEG. Elk soort proces dat het brein wilt laten uitvoeren, geeft een ander soort signaal af met een bepaalde trilling en amplitude, waardoor je ze van elkaar kan herkennen (Vidal, 1977). Er zijn ook andere onderzoeken geweest over bijvoorbeeld het gebruik van magnetische signalen (Georgopoulos, Langheim, Leuthold, & Merkle, 2005) in plaats van elektrische, en ondanks dat dit zeer precies was, staat deze technologie nog in zijn kinderschoenen.
                                  </p>
                                  <p>
                                    Nadat de signalen zijn opgenomen, heb je
                                    ruwe data. Op basis van onderzoek kan je een
                                    algoritme schrijven die de signalen omzet
                                    naar acties. Als jij namelijk je linkerarm
                                    zou willen optillen, geeft dit een ander
                                    soort breinsignaal dan dat het optillen van
                                    je rechterarm zou doen. Het algoritme
                                    herkent de signalen die bij de actie horen
                                    die de BCI moet uitvoeren.
                                  </p>

                                  <div>
  <p className="mt-3">Figuur 2, Aap bestuurt een robot arm met zijn brein.</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image ml-3"
                              src={require("assets/img/brain-2.jpg")}
                            />
</div>
                                  <p>
                                  Nadat de signalen zijn opgenomen, heb je ruwe data. Op basis van onderzoek kan je een algoritme schrijven die de signalen koppelt aan bepaalde acties. Stel jij wilt je linkerarm optillen, dan geeft je brein een specifiek signaal af. Het algoritme herkent dit signaal als zodanig, en geeft aan de HCI aan dat jij je linkerarm wilt optillen. Dit noemen we ook wel de ‘effector’.
                                  </p>
                                  <h4>
                                    Waarom is de desbetreffende NUI intuïtief?
                                  </h4>
                                  <p>
                                  De allereerste versies van BCI’s waren erg intrusief. Bijvoorbeeld bij het proces van het verkrijgen van de signalen kwam bedrading onder de schedel van de gebruiker te pas. Tegenwoordig is de technologie van de EEG’s een stuk kleiner en minder intrusief geworden. Het gaat nu door middel van plakkertjes die op het hoofd gedaan worden. Het gebruik ervan is hierdoor ook heel intuïtief: je denkt aan wat je wilt doen, en het gebeurt. Dat, in combinatie met het feit dat je nauwelijks meer door hebt dat je met een interface aan het communiceren bent, maakt dat de BCI kwalificeert als een Natural User Interface.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwobrain"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwobrain")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwobrain"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                  Zoals eerder al genoemd zijn de meeste implementaties van een BCI in de gezondheidszorg. Sommige van de implementaties die zijn gemaakt door een BCI zijn een rolstoel, een arm, een hand, maar ook het besturen van een TV is via een EEG gedaan (Shih, Krusienski, & Wolpaw, 2012). 
                                  </p>
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/SDAitbInJ4A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <p>

                                  De meeste implementaties zijn erg oppervlakkig. Zoals in het bovenste filmpje te zien is, werkt het nog erg stroef, en deze praktische implementatie maakt alleen gebruik van de hoeveelheid signalen die af worden gegeven, en niet welke signalen precies. Hierdoor is deze applicatie minder intrusief dan een volledige EEG, maar ook minder praktisch. Het kost namelijk veel tijd om te wachten tot het programma dat jij wilt kijken aan de beurt is voor een keuze, en in de tussentijd mag je niet rustig worden. Echter, het laat wel de mogelijkheden zien voor iemand die niet een gewone afstandsbediening kan gebruiken.
                                  </p>

                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThreebrain"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThreebrain")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThreebrain"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                  BCI gaat een hele mooie toekomst tegemoet. De laatste decennia is het aantal wetenschappelijke artikelen dat is gepubliceerd over dit onderwerp omhoog geschoten, en ook de bevindingen en praktische implementaties gaan met sprongen vooruit. In ongeveer 10 jaar zijn we van het voeden van aapjes gegaan naar een hand die ook feedback terug kan geven (Tyndall, 2016). Dat wil zeggen dat de gebruiker ook echt de hand als zodanig voelt: de gebruiker kan precies aangeven welk van zijn robot-vingers werd aangeraakt. 
                                  </p>
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/auisj0v7wqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <p>
                                  Echter, er zijn nog een aantal dingen die aangepakt moeten worden eer het een volledig mainstream NUI kan worden. Allereerst zijn de kosten nog erg hoog, zo’n € 4.000,- tot € 9.000,- voor een systeem (Shih et al., 2012). Hierbij wordt echter niet de kosten meegenomen die ook nog op de lange termijn kunnen worden gemaakt, voor bijvoorbeeld onderhoud. Doordat de kosten daarvoor ook hoog kunnen zijn, zal niet iedereen de technologie kunnen en willen betalen. Een tv aan kunnen sturen met je gedachten klinkt leuk, maar niet voor die prijs. Daarom is het zo dat op dit moment eigenlijk alleen mensen met een lichamelijke beperking besluiten een BCI aangestuurd product aan te schaffen, simpelweg omdat ze geen andere keuze hebben.
                                  </p>
                                  <p>
                                  Naast de kosten, is ook nog steeds het comfort niet erg goed. Zelfs met alleen plakkertjes op het hoofd moet je er constant gel op blijven smeren, en draadjes die je allemaal met je mee moet nemen. Als het mogelijk is om de opnameapparatuur nog kleiner te krijgen, en nog minder oncomfortabel, kan het zo zijn dat een BCI nog aantrekkelijker wordt voor een gemiddelde gebruiker.

                                  </p>
                                  <p>
                                  Het laatst knelpunt is de hardware en software zelf. Het is een technologie die nog steeds in zijn babyschoenen staat, ondanks dat er in die schoenen sprongen zijn gemaakt. Er zijn nog niet veel algoritmes die echt goed kunnen ontcijferen wat de gebruiker wilt doen, en ook de meetapparatuur is niet volledig en foutloos. Als het mogelijk is deze te verbeteren, zullen er nog meer deuren open gaan voor BCI als een Natural User Interface.
                                  </p>

                                  <h4>Conclusie</h4>
                                  <p>
                                  BCI is nog een erg jonge technologie, maar wel 1 met veel potentie. Door het lezen van brein signalen die worden afgegeven bij verschillende acties, kan een BCI begrijpen wat een gebruiker wil doen, en deze actie voor hem uitvoeren. Denk hierbij bijvoorbeeld aan het bewegen van een robot-hand. Voornamelijk door hoge kosten en doordat de technologie nog niet erg betrouwbaar is, zien we dat de technologie nog niet is waar het wel kan komen. Echter zal het waarschijnlijk niet erg lang duren, omdat er steeds meer aandacht voor BCI komt, en ook de praktische implementaties steeds indrukwekkender worden.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Card>
                      </TabPane>
                      <TabPane tabId="Touch">
                        <Card>
                          <CardHeader>
                            <img
                              alt="..."
                              className="nui-indicator-touch"
                              src={require("assets/img/touch.png")}
                            />
                            <CardTitle tag="h3">NUI: Touch</CardTitle>
                            <p>
                            Een touchscreen (“Wat is een touchscreen?,” n.d.) is een scherm of beeld dat informatie laat zien en bestuurd wordt door middel van aanraking. Meestal worden de schermen bestuurd door vinger aanraking maar het kan ook met een pen of ander object. Tegenwoordig zitten touchscreens op veel apparaten. Een voorbeeld is het apparaat dat je dagelijks gebruikt, je smartphone. Bijna alle smartphones hebben een touchscreen waarop je kan typen, tekenen, surfen op het web en andere dingen.
                            </p>
                            <p className="mt-3 mb-2">De video hier onder geeft een duidelijk beeld over de werking van touchscreen:</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cFvh7qM6LdA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </CardHeader>
                          <div
                            aria-multiselectable={true}
                            className="card-collapse"
                            id="accordion"
                            role="tablist"
                          >
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOnetouch"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOnetouch")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOnetouch"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van deze NUI</h4>
                                  <p>
                                  Het eerste touchscreen is uitgevonden in 1965 door E.A. Johnson (Ion, 2013). Deze versie werkte ongeveer hetzelfde als wat wij nu hebben in onze apparaten. Het enige verschil is dat de versie van Johnson niet meerdere aanrakingen tegelijk kon registreren. Wat het wel kon, was het verschil “voelen” tussen vinger aanraking en een aanraking van een willekeurig ander object. Later in 1982 kwam de eerste multi-touch apparaat ontwikkeld op de Universiteit van Toronto. In 1993 kwam de eerste touchscreen telefoon op de markt van het merk IBM en BellSouth. Daarna in 2002 werd de eerste ‘capacitive’ touchscreen gemaakt door Sony. Als laatst is er in 2004 door Andrew D. Wilson een 3D-geschikt touchscreen gemaakt dat gebruik maakt voor de kracht dat er gezet wordt op een scherm.
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                  Touch is een vorm van een Natural User Interface (NUI) (Mortensen, 2019) omdat ieder mens weet hoe hij of zij met een touch interface moet omgaan. Je raakt een knop aan wat je op het beeld ziet of je veegt naar boven om door de pagina heen te scrollen. Deze bewegingen zijn zo vanzelfsprekend geworden dat ze nu behoren tot een NUI. Alles werkt via aanraking: elke aanraking heeft een betekenis en doet steeds iets anders.
                                  </p>
                                  <p>
De meest gebruikte vormen van Touch zijn ‘resistive’ en ‘capacitive’ (McCann, 2012). ‘Resistive’ Touch is een vorm van een touchscherm waarbij er twee lagen, waarvan 1 resistent is tegen elektriciteit en de ander geleidend, een kleine afstand van elkaar hebben in het scherm. Wanneer er op een plek van het scherm wordt gedrukt, buigt het deel waar het scherm aangeraakt is naar binnen toe en de twee lagen maken dan contact met elkaar. Wanneer er contact tussen de twee lagen is, verandert de stroomtoevoer naar het contactpunt en weet het systeem precies waar het scherm aangeraakt is. Het nadeel van ‘resistive touch’ is dat het, door het gebruik van twee lagen, moeilijker is om meerdere aanrakingen tegelijk te lezen. Systemen die deze vorm van Touch gebruiken kunnen dus maar 1 vinger tegelijkertijd registreren. Deze versie van Touch wordt het meest gebruikt bij openbare apparaten zoals pinautomaten.
</p>
<p className="mt-3">Figuur 1,  Werking van ‘Resistive’ touch (Whitepapers,2017)</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image"
                              src={require("assets/img/touch-1.jpeg")}
                            />
<p>Bij ‘capacitive’ Touch zitten alle hoeken van het hele scherm onder stroom. Hoe hier aanraking wordt gedetecteerd is als volgt: doordat een geleidend materiaal (bijvoorbeeld de huid van een mens) contact maakt met het scherm gaat er stroom naar het materiaal toe vanuit elke hoek. Hierdoor kan er nauwkeurig gemeten worden waar de aanraking plaats heeft gevonden, en kan het systeem vervolgens de benodigde handelingen uitvoeren. Het voordeel hiervan is dat je met meerdere vingers tegelijk het scherm kan aanraken, maar het betekent wel dat je het scherm alleen met een geleidend materiaal kan aanraken. Dit is ook de reden waarom handschoenen niet werken bij ‘capacitive’ touch, omdat handschoenen slecht zijn in het geleiden van stroom. ‘Capacitive’ touch vind je vooral in smartphone’s.
</p>
<p className="mt-3">Figuur 2,  Werking van ‘Captive’ touch (Electrotest, n.d.)</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-image"
                              src={require("assets/img/touch-2.jpeg")}
                            />
                                  <h4>
                                    Waarom is de desbetreffende NUI intuïtief?
                                  </h4>
                                  <p>
                                  Ouders geven hun kinderen af en toe een telefoon of tablet om ze bezig te houden. Kinderen leren hierdoor vanaf jongs af aan al hoe je met touch controls om moet gaan. Wanneer de kinderen ouder worden en hun eigen telefoon krijgen, weten ze hierdoor precies hoe je met touch controls te werk gaat zonder enige uitleg. Hierdoor is Touch een vorm van een NUI geworden, omdat het voor zowel kinderen als volwassen zo normaal is geworden, dat het intuïtief is. Uit een interview hadden veel mensen wel eens gehoord over touchscreens, vooral in telefoons. Alleen konden zij het zelf niet betalen en wachtten op een goedkopere variant. Na een tijd kregen steeds meer mensen touchscreen telefoons en vonden dat een hele nieuwe ervaring. De mensen konden veel meer doen op hun telefoon dan eerst en werden er snel comfortabel mee. Vandaag de dag beschikken de meeste telefoons over een touchscreen, en weet de meerderheid hoe ze er mee om moeten gaan (Z. Steinbach, persoonlijke communicatie, 3 juni 2019).


                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwotouch"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwotouch")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwotouch"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                  Op dit moment wordt touch op bijna elk scherm gebruikt wat er bestaat. Zoals telefoons ov-chipkaart opladers, pinautomaten en nog veel meer. Touch kan je overal vinden en wanneer je touch moet gebruiken om iets te besturen dan is dat nooit een probleem, omdat de mensen al weten hoe je met touch om moet gaan. 3DTouch, aanraking gebasseerd op de hoeveelheid kracht wat er gezet wordt op een scherm, wordt ook al gebruikt in de meest recente telefoons die er nu bestaan zoals Iphone en samsung telefoons. Beide telefoons gebruiken een lichte versie van 3DTouch om bepaalde opdrachten uit te voeren.
                                  </p>
                                  <p className="mt-3">Figuur 3,  OV-chipkaart oplaad apparaat met touchscreen</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-indicator-breed"
                              src={require("assets/img/touch-3.jpg")}
                            />
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThreetouch"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThreetouch")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThreetouch"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                  Er zijn nog veel meer verbeteringen en mogelijkheden om touch nog natuurlijker aan te laten voelen dan het al is. Bijvoorbeeld door de implementatie van 3DTouch of Pressure Sensitive Touch (Adhiya, 2016). 3DTouch houdt in dat hoe hard het scherm wordt aangeraakt of ingedrukt, invloed heeft op hoe het systeem de aanraking interpreteert. Samsung gebruikt al een lichte vorm van 3DTouch in hun telefoons (Kastrenakes, 2017). Als je het scherm hard indrukt dan gaat de telefoon naar het hoofdscherm. Ook tijdens tekenen werkt de 3DTouch, daar wordt bijvoorbeeld de lijndikte van je kwast bepaald door hoe hard het scherm wordt aangeraakt, net zoals het bij een echte kwast zou zijn. Dit kan nog verder ontwikkeld worden naar bijvoorbeeld tafels die drukgevoelig zijn, onzichtbare noodknoppen. Zo kan je wanneer er bijvoorbeeld een overval is bij een bank, wat extra gewicht zetten op de tafel zodat het alarm af gaat en de politie een melding krijgt. Ook kan Touch zich zo ver ontwikkelen dat je niet zozeer iets moet aanraken om het scherm te laten bewegen (Chuta, 2019). Je hoeft alleen te zwaaien in de lucht en dan weet het apparaat al genoeg, een voorbeeld hiervan is de kinect van microsoft. Deze vorm van NUI heet ook wel Gesture. Dit kan dus ook juist de verdwijning van Touch betekenen, omdat het volledig wordt overgenomen door Gesture.


                                  </p>
                                  <h4 className="mt-3">Conclusie</h4>
                                  <p>Touch is een Natural User Interface wat al erg oud is maar zich nog verder kan ontwikkelen in de 3DTouch omgeving. 3DTouch bestaat al en wordt gebruikt op dit moment in telefoons en andere apparaten. Toch vinden de bedrijven dat het beter kan. Dit kan goed gebruikt worden bij banken. Dit zal niet lang meer duren aangezien 3DTouch op dit moment al gebruikt wordt in alledaagse apparaten.</p>
                                  <p className="mt-3">Naar mijn mening zal Touch niet verder ontwikkeld kunnen worden dan 3D. Als je verder wilt gaan in Touch kan je naar de gesture tak gaan van NUI’s. Het probleem is dat je Touch hierdoor helemaal kwijt zal raken, omdat door middel van gestures je apparaat bedient. Dit is makkelijker om te bedienen en je kan er meer functies in kwijt, maar het is niet sneller dan Touch zelf.</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Card>
                      </TabPane>
                      <TabPane tabId="Speech">
                        <Card>
                          <CardHeader>
                            <img
                              alt="..."
                              className="nui-indicator-speech"
                              src={require("assets/img/speech1.png")}
                            />
                            <CardTitle tag="h3">NUI: Speech/Voice</CardTitle>
                            <p>
                            Je hebt het over ‘voice’ control als een apparaat door microfoon en spraaksignalen wordt aangestuurd. Om dit mogelijk te maken wordt er gebruik gemaakt van voice recognition. Tegenwoordig wordt voice control al toegepast in verschillende mobiele telefoons. Zo heb je onder andere Google, Amazon en Apple die spraakherkenning systemen hebben opgezet om verschillende applicaties aan te sturen. Deze vereisen echter wel verbinding met internet om te kunnen interpreteren wat er is gezegd. (Pinola, 2011) 
                            </p>
                            <p className="mt-3 mb-2">De video hier onder geeft een duidelijk beeld over de werking van voice control:</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AWWjN1QqoYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </CardHeader>
                          <div
                            aria-multiselectable={true}
                            className="card-collapse"
                            id="accordion"
                            role="tablist"
                          >
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOnespeech"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOnespeech")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOnespeech"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van de NUI</h4>
                                  <p>
                                  In 1950 tot 1960 werd er al gewerkt aan spraakherkenning, Bell laboratories werkte aan het systeem genaamd “Audrey”. Dit systeem kon de nummers een tot en met negen herkennen die door een bepaalde stem gezegd werd. Niet lang daarna kwam IBM met een systeem dat 16 verschillende Engelse woorden herkennen.(Pinola, 2011; van der Velde, 2018)  Door de vooruitgang die werd geboekt op het gebied van voice recognition zorgde ervoor dat technology companies zich meer gingen focussen op de ontwikkeling van spraak gerelateerde technologieën. Dit is over de loop van de jaren is de accuraatheid steeds verder verbeterd. Deze verbeteringen zijn bereikt doordat grote bedrijven als Google, Amazon en Apple grote servers hebben staan waarop voice recognition software draait dit doen ze omdat het voice recognition teveel processing kracht gebruikt voor een enkele telefoon. Zo heeft google de google assistant die momenteel als enige een accuraatheid heeft gehaald van 95% in de U.S. English en voornamelijk gericht is op het beantwoorden van je vragen met behulp van google search op de achtergrond. Amazon heeft Alexa die meer gefocust is op het uitvoeren van handige acties en zegt ook dat ze de voice assistent met de meeste vaardigheden met de hoeveelheid apps die gebruik maken van Alexa.
Als laatst heb je Apple met Siri die zichzelf voornamelijk focust op het uitvoeren van kleine handelingen voor de gebruiker dit zijn dingen zoals mensen bellen of het text scherm openen.
Apple denkt alleen niet dat mensen er tegen gaan praten als tegen mensen en heeft al zijn functionaliteiten opgesplitst in 6 categorieën rit aan roepen; delen; berichten en bellen; photo zoeken; betalingen; fitness en infotainment dit zorgt ervoor dat de mogelijkheden met Siri klein blijven. (van der Velde, 2018)  
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                  Deze NUI werkt door het opvangen van het geluid wat een persoon zegt en vervolgens te raden welke woorden er worden uitgesproken Dit wordt gedaan door middel van samples van het geluid dat opgenomen is. Wat dit inhoudt is dat het geluid dat is opgenomen wordt op gedeelt in kleiner segmenten. Deze segmenten bevatten maar enkele tonen deze tonen worden vergeleken met de tonen in de database om zo de juiste woorden te maken met alle segmenten. Dit wordt vervolgen visueel neergezet zodat de gebruiker weer dat het apparaat doet waar die om gevraagd heeft (Kikel, 2018). De nadelen die dit met zich meebrengt is dat de voice recognition zijn accuraatheid verliest op het moment dat er te veel achtergrondgeluid is. Dit kan opgelost worden op het moment dat het opgenomen geluid nog meer samples bevat en  als de voice recognition software stemmen of geluiden uit elkaar kan halen. Tot dan blijft dit een knelpunt voor het gebruiken van voice recognition in drukke plekken. Ook is het een nadeel dat voice recognition vertragingen bevat dit komt omdat de zin eerste naar een server wordt gestuurd daar wordt omgezet en dan wordt teruggestuurd dit kan je workflow verpesten of als heel irritant worden ervaren. De voordelen die voice recognition levert is dat het heel makkelijk is om te gebruiken en hetzelfde voelt alsof je praat tegen een ander mensen dit geldt zeker voor mensen die moeite hebben met typen op een toetsenbord op deze manier kunnen mensen die sneller denken dan ze kunnen typen hun ideeën sneller neerzetten (Pribanic, 2018).
                                  </p>
                                  <h4>
                                    Waarom is de desbetreffende NUI intuïtief?
                                  </h4>
                                  <p>
                                  Een van de eerste manieren van communiceren die mensen leren is door middel van praten en geluid. Indien je iets van iemand wilt, vraag je dit door middel van spraak. Voice control werkt op precies dezelfde manier. Als je iets van het systeem wilt, dan vraag je het aan het systeem, en dan zal het systeem het voor je uitvoeren. Het praten tegen een applicatie die gebruik maakt van voice control is hierdoor net als praten tegen een ander persoon. Mensen weten mensen dus al precies hoe voice control apparaten werken zonder dat ze er ooit eerder mee hebben gewerkt (Mortensen, 2019).
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwospeech"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwospeech")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwospeech"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                  Op dit moment wordt voice control al veel gebruikt op telefoons omdat deze altijd heel makkelijk bereikbaar zijn voor mensen. In deze gevallen wordt het vaak gebruikt om het navigeren op de telefoon makkelijker te maken. Zo kan je meteen vragen om iemand te bellen in plaats van die persoon eerst te zoeken in je contacten en daarna op de belknop te drukken of snel antwoord krijgen op een vraag die ze stellen. Verder wordt het ook gebruikt op mensen met een handicap te ondersteunen zodat hun leven makkelijker gemaakt kan worden.Voor sommige mensen is het namelijk totaal niet mogelijk om een computer te bedienen met hun handen vanwege een beperking voor deze mensen is het mogelijk om dit te doen via voice. Dit zorgt ervoor dat ook deze mensen mee kunnen doen in onze sterk gedigitaliseerde wereld.(Pribanic, 2018).

                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThreespeech"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThreespeech")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThreespeech"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                  Er is binnen voice control nog veel innovatie mogelijk. Een van de manieren om zich verder te kunnen ontwikkelen is door stemherkenning programma's te maken die niet online verbonden moeten zijn met een server om er gebruik van te kunnen maken zo heeft google met een update voor de Gboard dit jaar waardoor het mogelijk is om voice recognition te gebruiken zonder verbinding te maken met de google server (Tung, 2019). Daarnaast is het zo dat als stemherkenning programma’s meer data op zouden kunnen nemen, ze in de toekomst stemmen van elkaar kunnen herkennen zo is het nu al mogelijk om Alexa te trainen om je eigen stem te laten herkennen . Dit geeft dan de mogelijkheid om nog meer apparaten spraakgestuurd te maken. Uiteindelijk zou het hierdoor zo kunnen zijn dat we later alles in en rond het huis met onze stemmen aansturen (Crist, 2017). Deze verbetering zullen voornamelijk alleen in je eigen huis gelden en niet zo zeer erbuiten want mensen irriteren zich aan elkaar op het moment dat iemand voluit aan het praten is.Daarom heeft de toepassing van voice in drukke plaatsen geen zin en zal het alleen maar frustratie opleveren.

                                  </p>
                                  <h4>
                                    Conclusie
                                  </h4>
                                  <p>
                                  Voice is een van de eerste NUI´s die de mensen hebben ontwikkeld en heeft daarom al veel vooruitgang geboekt door de jaren heen.
Het enige wat de NUI tegenhoudt om te verbeteren is de hoeveelheid data die opgenomen kan worden. Zodra apparaten in staat zijn nog nauwkeuriger voice data op te slaan, zou het mogelijk worden dat voice control ook gebruikt kan worden op drukke plaatsen waar je slecht te verstaan bent. 

                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Card>
                      </TabPane>
                      <TabPane tabId="Gesture">
                        <Card>
                          <CardHeader>
                            <img
                              alt="..."
                              className="nui-indicator-gesture"
                              src={require("assets/img/gesture.png")}
                            />
                            <CardTitle tag="h3">NUI: Gesture</CardTitle>
                            <p>
Abstract-Touch-, face-, stemherkenning- en bewegingssensoren maken allemaal deel uit van een opkomend gebied van computergebruik,dit worden ook wel NUI’s genoemd. Het gebruik van deze technologie wordt tegenwoordig niet alleen meer gedaan door hightech spionnen. Gesture recognition is het process waarbij gebaren, gemaakt door een gebruiker,  als data worden geïnterpreteerd door een systeem. Aan de hand van deze data kunnen er interacties, tussen de gebruiker en het systeem, worden uitgevoerd. In een VR-omgeving wordt tegenwoordig geen gebruik meer gemaakt van een toetsenbord. </p>
                            <p className="mt-3">Gebaren zijn de beweging van het lichaam die wordt gebruikt met de intentie om met anderen te communiceren. En om deze communicatie effectief en succesvol te laten verlopen, moeten zowel de afzender als de ontvanger over dezelfde informatie beschikken voor een bepaald gebaar. Een gebaar is wetenschappelijk ingedeeld in twee verschillende categorieën: dynamisch en statisch. Een dynamisch gebaar verandert gedurende een bepaalde periode terwijl statische bewegingen worden waargenomen aan het einde van de tijd. Een zwaaiende hand is een voorbeeld van dynamisch gebaar en het stopteken is een voorbeeld van statisch gebaar. Gebaren zijn, in grote lijnen, onder te verdelen in de volgende categorieën:</p>
                            <p><ul><li><p>hand- en armgebaren: </p>

herkenning van handhoudingen, gebarentalen en amusement toepassingen (waardoor kinderen in virtuele omgevingen kunnen spelen en interacteren);</li>
<li>hoofd- en gezicht gebaren:</li>
<li className="list-unstyled">
  
                          <ul>
                            <li>ja / nee zeggen door te knikken of te schudden van het hoofd </li>
                            <li>richting aangeven door oogopslag</li>
                            <li>het opheffen van de wenkbrauwen</li>
                            <li>de mond openen om te spreken</li>
                            <li>knipogen</li>
                            <li>neusvleugels</li>
                            <li>uitdrukking geven door uiterlijk van verrassing, geluk, afkeer, angst, woede, verdriet, minachting, enz .</li>
                          </ul>
                        </li>

</ul></p>
                            <p className="mt-3"></p>
                            <p className="mt-3"></p>
                            <p className="mt-3 mb-2">De video hier onder geeft een duidelijk beeld over de werking van gesture control:</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NmsLFVRYTX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </CardHeader>
                          <div
                            aria-multiselectable={true}
                            className="card-collapse"
                            id="accordion"
                            role="tablist"
                          >
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseOnegesture"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOnegesture")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOnegesture"
                                )}
                              >
                                <CardBody>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>In de jaren 1970 was men bezig met het uitvinden van bedrade handschoenen om bewegingen vast te leggen. Deze handschoenen werkten met schakelaars en optische of weerstand sensoren om het buigen van gewrichten te meten. Deze handschoenen waren onhandig opgezet en beperkten de applicaties tot onderzoeksdoeleinden.</p>
                                  <p className="mt-3">Een van de eerste commerciële bedrade handschoenen voor de consumentenmarkt is de Power Glove (Fig. 1), uitgebracht op de markt in 1989. Hij werd gebruikt als een controle-apparaat voor de Nintendo-spelconsole.</p>
                                  <div>
  <p className="mt-1">Figuur 1, De Power glove.</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-indicator-breed ml-3"
                              src={require("assets/img/gesture-1.png")}
                            />
</div>
<p>Door de jaren heen zijn er meer nauwkeurige en lichtgewicht bedrade handschoenen ontwikkeld. Een voordeel van een bedrade handschoen is dat ze minder rekenkracht vereisen. Ze zijn handig in gevallen waar haptische feedback belangrijk is, zoals industriële robotbesturing. Het verplicht stellen van de gebruiker om een ​​handschoen op te zetten, is echter een belemmering voor massaconsumptie.</p>
                                  
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwogesture"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwogesture")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwogesture"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>Momenteel wordt deze NUI ook gebruikt door grote bedrijven zoals Microsoft, Nintendo, Sony enz. Zo heeft bijvoorbeeld Microsoft de Kinect V1-bewegingscontroller uitgebracht in, met behulp van technologie van PrimeSense. Het biedt krachtige driedimensionale lichaams- en hand bewegingsmogelijkheden in realtime, waardoor gebruikers worden bevrijd van fysieke invoerapparaten zoals toetsenborden en joysticks. Kinect ondersteunt ook meerdere gebruikers in een kleine ruimte. De gesture UI zorgt ervoor dat gamers van verschillende leeftijden in gemakkelijk deel kunenn nemen aan leuke spellen zoals sport en dansen. op onderstaande afbeelding Fig.2 ziet u hoe een u een Kinect. </p>
                                  <div>
  <p className="mt-1">Figuur 2, De werking van kinect.</p>
                                    <img
                              alt="..."
                              className="mb-3 nui-indicator-breed ml-3"
                              src={require("assets/img/gesture-2.png")}
                            />
</div>                       
<p>Natuurlijk zijn er ook veel andere bedrijven die zich bezighouden met het ontwikkelen van deze NUI. Terwijl Kinect voornamelijk focust op het vastleggen van de lichaamshouding, ontwikkelde een bedrijf genaamd Leap Motion een bewegingsapparaat een infraroodcamera die aan de hand van die camera bewegingen kan omzetten in bruikbare data.</p>         
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThreegesture"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThreegesture")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThreegesture"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>Er is nog veel ruimte voor innovatie binnen deze NUI. Neem bijvoorbeeld hedendaagse

chauffeurs. Deze mensen zijn een enorm probleem voor de verkeersveiligheid.

Hierdoor willen steeds meer autofabrikanten natuurlijke manieren om het informatiesystemen zoals radio, navigatie enz. onder controle te houden. Op deze manier zal een bestuurder meer op de weg focussen. Een manier om dit probleem op te lossen, is door gebruik te maken van speech NUI. Dit is echter niet in alle situaties toepasbaar. Neem bijvoorbeeld een situatie waarbij een gebruiker last van zijn of haar keel heeft. 

Een gesture user  interface vermindert de noodzaak voor bestuurders om contact te maken met het dashboard-bedieningspaneel om hun navigatie of radio te bedienen. </p>
<p>Het autobedrijf BWM is momenteel camera’s aan het ontwikkelen die gebaren kunnen omzetten in data dat kan worden gebruikt om auto’s te besturen. 

Aangezien deze technologie draait om leven of dood moet de techniek foutloos kunnen functioneren en is er zeker veel ruimte voor het ontwikkelen en verbeteren van deze NUI.</p>
<h4>Conclusie</h4>
<p>Gesture NUI is al sinds sinds 1970 in ontwikkeling en ontwikkelt zich nog steeds verder.

De meeste vraag naar de NUI is vanuit gaming industrie en autofabrikanten.

Naar mijn mening zal gesture de meest bekende NUI worden in de toekomst. Ook zal deze NUI de touch NUI gedeeltelijk vervangen omdat gesture makkelijker is en meer functies kan bedienen. De gesture NUI zal de touch NUI echter nooit volledig vervangen aangezien de touch NUI in sommige gevallen beter van pas komt.</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Card>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

export default Nuis;
