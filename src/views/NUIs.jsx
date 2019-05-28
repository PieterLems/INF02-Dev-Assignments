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
                          Gaze
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
                            <CardTitle tag="h3">NUI: Gaze</CardTitle>
                            <p>
                              Gaze is een Natural user interface gebaseerd op de
                              oogbewegingen van de gebruiker. Een UI gebaseerd
                              op de oogbewegingen van een gebruiker heeft vele
                              voordelen. Het meest voornaamste voordeel is dat
                              Interacties gebaseerd op het aanwijzen van het
                              scherm veel sneller en moeitelozer kunnen worden
                              uitgevoerd, omdat onze ogen snel en zonder moeite
                              bewegen. Voordat de gebruiker ergens op klikt
                              kijkt hij of zij naar de locatie waar hij op wilt
                              klikken. Wanneer de gebruiker niet met zijn hand
                              naar die locatie toe hoeft te bewegen zal de
                              gebruiker minder moeite hoeven te doen om op de
                              gewenste content te klikken. Een ander voordeel
                              bij het gebruik van Gaze in de UI is dat er
                              vloeiende interactie tussen verschillende
                              gebruikers contexten kan plaatsvinden.
                              Bijvoorbeeld, een gebruiker kan een stuk content
                              van de website selecteren met zijn ogen en dan
                              door middel van de een spraakcommando de selectie
                              bevestigen.
                            </p>
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
                                    "collapseOne"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOne")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOne"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van deze NUI</h4>
                                  <p>
                                    Een onderzoeker genaamd Richard Bolt heeft
                                    in 1980 een idee gemaakt waarbij een
                                    gebruiker naar een scherm kan kijken en aan
                                    de hand van blik informatie interactie kan
                                    uitvoeren met het scherm. Jammer genoeg was
                                    een systeem dat informatie op die manier kan
                                    verwerken extreem duur en zeldzaam in die
                                    tijd. De prijs van een dergelijk systeem was
                                    rond de 250.000 dollar. In die tijd werd dus
                                    voornamelijk gekeken naar de toekomst van
                                    Gaze user interfaces. Dit werd gedaan door
                                    middel van het ontwerpen van prototypes en
                                    het evalueren van technieken die de
                                    interactie met de ogen van de gebruiker
                                    mogelijk maken. De apparatuur die in die
                                    tijd werd gebruikt werd dus als een soort
                                    tijdmachine gebruikt om het ontwikkelen en
                                    onderzoeken van de Gaze UI in de toekomst te
                                    versimpelen.{" "}
                                  </p>
                                  <p>
                                    Terwijl de wereld aan het wachten was op een
                                    goedkopere variant van oogbeweging
                                    technieken werden veel technieken ontworpen
                                    om de interactie tussen de gebruiker en het
                                    systeem mogelijk te men. Na veel langer dan
                                    gedacht werd het eindelijk mogelijk om een
                                    oog volg systeem voor een redelijke prijs te
                                    kopen. Dit was het moment dat systemen
                                    konden worden ontwikkeld waar wij op dit
                                    moment als consument gebruik van kunnen
                                    maken.
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                    Er zijn drie verschillende soorten
                                    oogbeweging technieken. Deze worden
                                    hieronder beschreven:
                                  </p>
                                  <ul>
                                    <li>Eye attached tracking</li>
                                    <p>
                                      Bij deze techniek wordt gebruik gemaakt
                                      van apparatuur dat is bevestigd op het
                                      oog. Denk hierbij aan contactlenzen die
                                      een spiegel of een magnetische sensor
                                      bevatten. De beweging van de apparatuur
                                      wordt gemeten door een sensor die is
                                      bevestigd op het systeem waar de user
                                      gebruik van maakt. Deze techniek wordt het
                                      meest gebruikt door onderzoekers omdat
                                      deze techniek heel nauwkeurig de
                                      bewegingen kan volgen.{" "}
                                    </p>
                                    <li>Optical tracking</li>
                                    <p>
                                      Bij deze techniek wordt er gebruik gemaakt
                                      van een infrarood laser die reflecteert op
                                      het oog van de gebruiken. Deze
                                      infraroodstraal wordt , net als bij de
                                      eerste techniek, opgevangen door een
                                      sensor die is bevestigd op het systeem.
                                      Deze techniek is relatief goedkoop en
                                      wordt daarom veel gebruikt door bedrijven
                                      die dergelijke systemen ontwikkelen en
                                      verkopen op de consumenten markt.
                                    </p>
                                    <li>Electric potential measurement</li>
                                    <p>
                                      Bij de derde techniek wordt gebruik
                                      gemaakt van elektroden die zijn geplaatst
                                      op het netvlies van de gebruiker. De
                                      positie van de elektroden worden gemeten
                                      door een magnetische sensor in het
                                      systeem. Deze techniek is handig omdat de
                                      oogbewegingen ook in het donker kunnen
                                      worden gemeten. Daarnaast werkt deze
                                      techniek ook nog wanneer de gebruiker zijn
                                      of haar ogen dicht heeft. Dit kan goed van
                                      pas komen in situaties zoals het meten van
                                      oogbewegingen tijdens het slapen. Echter
                                      is deze techniek niet heel accuraat.
                                    </p>
                                  </ul>

                                  <h4>
                                    Waarom is de desbetreffende NUI instinctief?
                                  </h4>
                                  <p>
                                    De Gaze UI wordt gezien als een instinctieve
                                    UI. Van af jongs af aan kunnen we al gebruik
                                    maken van onze ogen, Dit doen we onbewust.
                                    We hoeven dus niet aan te leren hoe we
                                    gebruik kunnen maken van een user interface
                                    dat gebruik maakt van de gaze NUI.{" "}
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwo")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwo"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                    De Gaze NUI word op meer manieren gebruikt
                                    dan de meeste mensen denken. Het gebruik van
                                    deze UI is ondertussen al relatief normaal
                                    geworden en wordt gebruikt in de gaming
                                    industrie tot aan de medische wereld.
                                  </p>
                                  <p>
                                    De meest bekende manier waarop de Gaze UI
                                    word toegepast is de virtual reality gaming.
                                    De VR bril bevat sensoren die de
                                    oogbewegingen opvangen, Daarnaast wordt er
                                    ook gebruik gemaakt van de hoofdbewegingen
                                    om er voor te zorgen dat het systeem nog
                                    accurater is. Ook wordt de Gaze UI gebruikt
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
                                    rijlessen. Ook binnen defensie word gebruik
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
                                    "collapseThree"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThree")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThree"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                    Ondanks dat er al extreem veel onderzoek is
                                    gedaan op het gebied van de Gaze UI is er
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
                              Een Brain-Controlled Interface (BCI) is een
                              interface die signalen die het brein stuurt om
                              bijvoorbeeld iets te doen, of om te communiceren,
                              op kan vangen en kan interpreteren (Schwartz, Cui,
                              Weber, &amp; Moran, 2006). Hierdoor is het
                              mogelijk voor iemand die niet in staat is
                              handelingen te verrichten die nodig zijn om een
                              interface te gebruiken, toch met deze interface te
                              kunnen communiceren. Over het algemeen komen BCI’s
                              vooral voor in de gezondheidszorg. Over het
                              algemeen is de technologie nog te duur om voor
                              alledaagse dingen in te zetten, het wordt
                              voornamelijk gebruikt voor patiënten die anders
                              niks hebben.
                            </p>
                            <p>
                              Een goed voorbeeld hiervan zijn kunstmatige
                              ledermaten, bijvoorbeeld een nieuwe hand. Door het
                              onderzoeken van de breinsignalen kan uiteindelijk
                              het nieuwe ledermaat worden aangestuurd.
                            </p>
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
                                    "collapseOne"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOne")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOne"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van deze NUI</h4>
                                  <p>
                                    Het idee van een BCI begon eigenlijk rond
                                    1970 pas, maar al in 1924 was er een
                                    uitvinding van Berger die de deur opende
                                    voor een BCI. Hij ontdekte namelijk voor het
                                    eerst breinsignalen door het creeëren van
                                    een Elektro-encefalografie (EEG). Hij kwam
                                    hierdoor tot de ontdekken dat verschillende
                                    processen van het brein, een andere reactie
                                    geeft die gemeten kan worden. De voorvader
                                    van het idee om deze signalen ook echt te
                                    gebruiken om dingen aan te sturen was
                                    Jacques Vidal. In 1973 publiceerde hij het
                                    eerste onderzoek over de BCI, waarin hij
                                    aangaf dat het echte doel moet zijn om
                                    dingen aan te kunnen sturen “met je
                                    gedachten”. Sindsdien is er veel onderzoek
                                    geweest naar BCI, en zijn er ook praktische
                                    toepassing gemaakt, zoals een robot-arm die
                                    wordt aangestuurd door de gedachten van een
                                    aapje (Velliste, Perel, Spalding, Whitford,
                                    &amp; Schwartz, 2008).
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                    De meeste BCI’s werken door middel van 4
                                    componenten zoals geïllustreerd in figuur 1.
                                    Als we het voorbeeld van een nieuwe bovenarm
                                    zouden nemen, zou de eerste stap zijn het
                                    opnemen van de breinsignalen bijvoorbeeld
                                    door een EEG. Elk soort proces van het brein
                                    geeft een ander soort signaal af met een
                                    bepaalde trilling en amplitude, waardoor je
                                    ze zo van elkaar kan herkennen (Vidal,
                                    1977). Er zijn ook andere onderzoeken
                                    geweest over bijvoorbeeld magnetische
                                    signalen (Georgopoulos, Langheim, Leuthold,
                                    &amp; Merkle, 2005), maar uiteindelijk bleek
                                    dat meeste nog niet geschikt waren voor een
                                    BCI.
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
                                  <p>
                                    Het daadwerkelijk uitvoeren van de actie is
                                    de derde stap van het gebruik van een BCI,
                                    en de laatste is dat het kan zien dat het
                                    gebeurt, dus de feedback terug aan de
                                    gebruiker.
                                  </p>
                                  <h4>
                                    Waarom is de desbetreffende NUI instinctief?
                                  </h4>
                                  <p>
                                    De allereerste versies van de BCI waren erg
                                    invading. Bijvoorbeeld bij het proces van
                                    het verkrijgen van de signalen kwamen
                                    bedrading onder de skull van de gebruiker te
                                    pas. Tegenwoordig is de technologie van de
                                    EEG’s een stuk kleiner en minder intens
                                    geworden. Het gaat nu door middel van
                                    plakkertjes die op het hoofd gedaan worden.
                                    Het gebruik ervan is uiteraard ook heel
                                    instinctief: je denkt aan wat je wilt doen,
                                    en het gebeurt. Dat, in combinatie met het
                                    feit dat je niet meer door hebt dat je met
                                    een interface aan het communiceren bent
                                    omdat hij zo klein is geworden, maakt dat de
                                    BCI kwalificeert als een Natural User
                                    Interface.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwo")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwo"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                    Zoals eerder al genoemd zijn de meeste
                                    implementaties van een BCI in de
                                    gezondheidszorg. Sommige van de
                                    implementaties die zijn gemaakt door een BCI
                                    is een rolstoel, een arm, een hand, maar ook
                                    het gebruik van een TV is via een EEG gedaan
                                    (Shih, Krusienski, &amp; Wolpaw, 2012).
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThree"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThree")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThree"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                    BCI gaat een hele mooie toekomst tegemoet.
                                    De laatste decennia is het aantal
                                    wetenschappelijke artikelen dat is
                                    gepubliceerd over dit onderwerp omhoog
                                    geschoten, en ook de bevindingen en
                                    praktische implementaties gaan met sprongen
                                    vooruit. In ongeveer 10 jaar zijn we van het
                                    voeden van aapjes gegaan naar een hand die
                                    ook feedback terug kan geven (Tyndall,
                                    2016). Dat wil zeggen dat de gebruiker ook
                                    echt de hand als zo danig voelt, de
                                    gebruiker kon precies aangeven welk van zijn
                                    robot-vingers werd aangeraakt.
                                  </p>
                                  <p>
                                    Echter, er zijn nog een aantal dingen die
                                    aangepakt moeten worden eer het een volledig
                                    mainstream NUI kan worden. Allereerst zijn
                                    de kosten nog erg hoog, zo’n € 4.000,- tot €
                                    9.000,- voor het systeem. Hierbij wordt
                                    echter niet de kosten meegenomen die ook nog
                                    op de lange termijn kan worden gemaakt.
                                    Doordat de kosten wat dat betreft vrij hoog
                                    zijn, zal niet iedereen de technologie
                                    kunnen en willen betalen. Een tv aan kunnen
                                    sturen met je gedachten klinkt leuk, maar
                                    niet voor die prijs. Daarom is het zo dat op
                                    dit moment eigenlijk alleen mensen met een
                                    beperking besluiten te gaan voor een BCI
                                    aangestuurd product.
                                  </p>
                                  <p>
                                    Naast de kosten, is ook nog steeds het
                                    comfort niet erg goed. Zelfs met alleen
                                    plakkertjes blijft het een kwestie van
                                    constant er opnieuw gel op smeren, en
                                    draadjes die je allemaal met je mee moet
                                    nemen. Als het mogelijk is om de
                                    opnameapparatuur nog kleiner te krijgen, en
                                    nog minder oncomfortabel, kan het zo zijn
                                    dat een BCI nog aantrekkelijker wordt voor
                                    een gemiddelde gebruiker.
                                  </p>
                                  <p>
                                    Als laatst knelpunt is de hardware en
                                    software zelf. Het is een technologie die
                                    nog steeds in zijn babyschoenen staat,
                                    ondanks dat er in die schoenen sprongen zijn
                                    gemaakt. Er zijn nog niet veel algoritmes
                                    die echt goed kunnen ontcijferen wat de
                                    gebruiker wilt doen, en ook de
                                    meetapparatuur is niet volledig en foutloos.
                                  </p>

                                  <h4>Conclusie</h4>
                                  <p>
                                    BCI is nog een erg jonge technologie, maar
                                    wel 1 met veel potentie. Door het lezen van
                                    breinsignalen die worden afgegeven bij
                                    verschillende acties, kan een BCI begrijpen
                                    wat een gebruiker wil doen, en deze actie
                                    voor hem uitvoeren, denk bijvoorbeeld aan
                                    het bewegen van je hand. Voornamelijk door
                                    hoge kosten en doordat de technologie nog
                                    niet erg betrouwbaar is, zien we dat de
                                    technologie nog niet is waar het wel kan
                                    komen. Echter, het zal niet erg lang duren,
                                    doordat er steeds meer aandacht voor komt en
                                    ook de praktische implementaties steeds
                                    indrukwekkender worden.
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
                              Een touchscreen is een scherm of beeld wat
                              informatie laat zien en bestuurd wordt met
                              aanraking. Meestal worden de schermen bestuurd via
                              vinger aanraking maar het kan ook met een pen of
                              ander object. Tegenwoordig zitten touchscreens op
                              heel veel apparaten. Een voorbeeld is het apparaat
                              dat je dagelijks gebruikt, je smartphone. Bijna
                              alle smartphones hebben een touchscreen waarop je
                              kan typen, tekenen, surfen op het web en andere
                              dingen.
                            </p>
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
                                    "collapseOne"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOne")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOne"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van deze NUI</h4>
                                  <p>
                                    De eerste touchscreen is uitgevonden door
                                    E.A. Johnson (Ion, 2013). Deze versie werkt
                                    ongeveer hetzelfde als wat wij nu hebben in
                                    onze apparaten. Het enige verschil is dat de
                                    versie van Johnson niet meerdere aanrakingen
                                    tegelijk kon registreren. Wat het wel kon
                                    was het verschil uitmaken tussen vinger
                                    aanraking en een aanraking van een ander
                                    object dat geen vingers zijn.
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                    Touch is een vorm van een Natural User
                                    Interface (NUI) (Mortensen, 2019) omdat
                                    ieder mens weet hoe hij of zij met een touch
                                    interface moet omgaan. Je raakt een knop aan
                                    wat je op het beeld ziet of je veegt naar
                                    boven om door de pagina heen te scrollen.
                                    Deze bewegingen zijn zo vanzelfsprekend
                                    geworden dat ze nu behoren tot een NUI.
                                  </p>
                                  <h4>
                                    Waarom is de desbetreffende NUI instinctief?
                                  </h4>
                                  <p>
                                    Ouders geven hun kinderen af en toe een
                                    telefoon of een tablet om ze bezig te
                                    houden. Kinderen leren hierdoor vanaf jongs
                                    af aan hoe je met touch controls te werk
                                    gaat. Wanneer de kinderen ouder worden en
                                    hun eigen telefoon krijgen, dan weten ze
                                    precies hoe het ingesteld moet worden en hoe
                                    je met touch controls te werk gaat zonder
                                    enige uitleg. Hierdoor wordt touch een vorm
                                    van een NUI omdat het voor de kinderen en
                                    volwassen zo normaal is dat het natuurlijk
                                    is
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwo")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwo"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                    Op dit moment wordt touch op bijna elk
                                    scherm gebruikt wat er bestaat. Zoals
                                    telefoons ov-chipkaart opladers,
                                    pinautomaten en nog veel meer. Touch kan je
                                    overal vinden en wanneer je touch moet
                                    gebruiken om iets te besturen dan is dat
                                    nooit een probleem, omdat de mensen al weten
                                    hoe je met touch om moet gaan.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThree"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThree")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThree"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                    Er zijn nog veel meer verbeteringen en
                                    mogelijkheden om touch nog natuurlijker aan
                                    te laten voelen dan het al is. Bijvoorbeeld
                                    door 3DTouch of Pressure Sensitive Touch
                                    (Adhiya, 2016). 3DTouch houdt in dat er
                                    verschillende dingen kunnen gebeuren op je
                                    scherm dat bepaald wordt door hoe hard de
                                    gebruikt het scherm aanraak of in drukt.
                                    Samsung heeft al een lichte vorm van 3DTouch
                                    in de telefoons gezet (Kastrenakes, 2017).
                                    Als je het scherm hard indrukt dan gaat de
                                    telefoon naar het hoofdscherm. Ook tijdens
                                    tekenen werkt de 3DTouch, daar wordt de
                                    lijndikte van je kwast bepaald als je aan
                                    het tekenen bent, net als in het echt.
                                  </p>
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
                            <CardTitle tag="h3">NUI: Voice</CardTitle>
                            <p>
                              Voice control is een apparaat die door microfoon
                              en spraaksignalen wordt aangestuurd. Tegenwoordig
                              wordt voice control al voornamelijk toegepast in
                              mobiele telefoons. Zo heb je onder andere Google,
                              Amazon en Apple die spraakherkenning systemen
                              hebben opgezet deze vereisen wel verbinding met
                              internet om te kunnen interpreteren wat er gezegd
                              is.
                            </p>
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
                                    "collapseOne"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOne")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOne"
                                )}
                              >
                                <CardBody>
                                  <h4>Geschiedenis van de NUI</h4>
                                  <p>
                                    In 1950 tot 1960 werd er al gewerkt aan
                                    spraakherkenning deze kon 16 Engelse woorden
                                    herkennen. Dit is over de loop van de jaren
                                    steeds verder verbetert en in het jaar 2001
                                    bereikte ze een accuraatheid van 80%. Het is
                                    erg belangrijk om dit zo goed mogelijk te
                                    maken. Want hoe beter de accuraatheid des te
                                    meer mogelijkheden levert deze NUI op.
                                  </p>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>
                                    Deze NUI werkt door het opvangen van het
                                    geluid wat een persoon zegt en vervolgens te
                                    raden welke woorden er worden uitgesproken.
                                    Vervolgens worden deze woorden neergezet en
                                    aan de hand daarvan wordt er een opdracht
                                    die via spraak is gegeven uitgevoerd.
                                  </p>
                                  <h4>
                                    Waarom is de desbetreffende NUI instinctief?
                                  </h4>
                                  <p>
                                    Een van de eerste manieren van communiceren
                                    die mensen leren is doormiddel van geluid.
                                    Als iemand wat van elkaar willen doen ze dit
                                    door met elkaar te praten. Dit zorgt ervoor
                                    dat de voice control heel instinctief is.
                                    Want het praten tegen het voice control
                                    apparaat is net als het praten tegen een
                                    ander persoon. Hierdoor weten mensen al
                                    precies hoe voice control aparaten werken
                                    zonder dat ze er ooit eerder mee hebben
                                    gewerkt.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwo")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwo"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>
                                    Op dit moment wordt voice control al veel
                                    gebruikt op telefoons omdat deze altijd heel
                                    makkelijk bereikbaar zijn voor mensen.
                                    Verder wordt het ook gebruikt op mensen met
                                    een handicap te ondersteunen zodat hun leven
                                    makkelijker gemaakt kan worden.
                                  </p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThree"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThree")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThree"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>
                                    Er ligt voor voice control nog heel veel
                                    innovatie open. Maar om dit te kunnen
                                    bereiken moeten stemherkenningsprogramma’s
                                    nog accurater worden. Op het moment dat die
                                    programma’s meer data zouden op kunnen nemen
                                    wordt het mogelijk om stemmen te
                                    onderscheiden. Dit geeft dan de mogelijkheid
                                    om nog meer apparaten spraak gestuurd te
                                    maken. Dit zou kunnen leiden dat we later
                                    alles in en rond het huis met voice control
                                    gedaan zou kunnen worden.
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
                            <p />
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
                                    "collapseOne"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseOne")
                                  }
                                >
                                  Verleden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseOne"
                                )}
                              >
                                <CardBody>
                                  <h4>Hoe werkt de NUI?</h4>
                                  <p>blablabla</p>
                                  <h4>
                                    Waarom is de desbetreffende NUI instinctief?
                                  </h4>
                                  <p>blablabla</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseTwo"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseTwo")
                                  }
                                >
                                  Heden van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseTwo"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Op welke manieren word de NUI momenteel
                                    gebruikt?
                                  </h4>
                                  <p>blablabla</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card-plain">
                              <CardHeader role="tab">
                                <a
                                  aria-expanded={this.state.openedCollapses.includes(
                                    "collapseThree"
                                  )}
                                  href="#pablo"
                                  data-parent="#accordion"
                                  data-toggle="collapse"
                                  onClick={e =>
                                    this.collapsesToggle(e, "collapseThree")
                                  }
                                >
                                  Toekomst van de NUI{" "}
                                  <i className="tim-icons icon-minimal-down" />
                                </a>
                              </CardHeader>
                              <Collapse
                                role="tabpanel"
                                isOpen={this.state.openedCollapses.includes(
                                  "collapseThree"
                                )}
                              >
                                <CardBody>
                                  <h4>
                                    Is er nog ruimte voor innovatie binnen deze
                                    NUI?
                                  </h4>
                                  <p>blablabla</p>
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
