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
      verticalTabsIcons: "brain",
      openedCollapses: [""]
    };
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
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
  // with this function we change the active tab for all the tabs in this page
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
                            this.changeActiveTab(
                              e,
                              "verticalTabsIcons",
                              "Gaze"
                            )
                          }
                        >
                          <i className="tim-icons icon-satisfied" />
                          Gaze
                          </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeTab={this.state.verticalTabsIcons}>
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
                            Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
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
                                  onClick={e => this.collapsesToggle(e, "collapseOne")}
                                >
                                  History{" "}
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
                                Sed tempor lorem neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc molestie, diam eu hendrerit laoreet, nibh ante luctus massa, ut consequat lacus neque sed sapien. Nullam facilisis tincidunt ex et condimentum. Suspendisse porttitor urna lectus, vel tristique elit gravida sit amet. Vestibulum luctus semper vehicula. Donec porta eget tellus sed semper. Fusce sit amet risus sapien. Sed a fringilla felis, eu cursus arcu. Praesent ac lorem leo. Fusce at libero lorem. Pellentesque commodo quam et lorem fringilla, nec varius justo pulvinar. Mauris quis justo ligula. Sed tincidunt neque ut malesuada consequat. Suspendisse dapibus condimentum scelerisque. Phasellus vehicula felis enim, non fermentum odio lobortis quis.
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
                                  onClick={e => this.collapsesToggle(e, "collapseTwo")}
                                >
                                  How does this NUI work?{" "}
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
                                Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
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
                                  onClick={e => this.collapsesToggle(e, "collapseThree")}
                                >
                                  Why is this NUI instinctive?{" "}
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
                                Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
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
                            Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
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
                                  onClick={e => this.collapsesToggle(e, "collapseOne")}
                                >
                                  History{" "}
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
                                  
                                Sed tempor lorem neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc molestie, diam eu hendrerit laoreet, nibh ante luctus massa, ut consequat lacus neque sed sapien. Nullam facilisis tincidunt ex et condimentum. Suspendisse porttitor urna lectus, vel tristique elit gravida sit amet. Vestibulum luctus semper vehicula. Donec porta eget tellus sed semper. Fusce sit amet risus sapien. Sed a fringilla felis, eu cursus arcu. Praesent ac lorem leo. Fusce at libero lorem. Pellentesque commodo quam et lorem fringilla, nec varius justo pulvinar. Mauris quis justo ligula. Sed tincidunt neque ut malesuada consequat. Suspendisse dapibus condimentum scelerisque. Phasellus vehicula felis enim, non fermentum odio lobortis quis.
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
                                  onClick={e => this.collapsesToggle(e, "collapseTwo")}
                                >
                                  How does this NUI work?{" "}
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
                                Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
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
                                  onClick={e => this.collapsesToggle(e, "collapseThree")}
                                >
                                  Why is this NUI instinctive?{" "}
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
                                Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
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
