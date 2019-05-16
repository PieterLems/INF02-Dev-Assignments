import React from "react";


// reactstrap components
import {
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
                <h3>12-03-2019, Rotterdam</h3>
                   <Col>
                        <h4>Project Members:</h4>
                        <ul>
                          <li>Pieter Lems</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0926064</li>
                              <li>Email: 0926064</li>
                            </ul>
                          </li>
                          <li>Jawed Balkhi</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0926064</li>
                              <li>Email: 0926064</li>
                            </ul>
                          </li>
                          <li>Joessie</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0926064</li>
                              <li>Email: 0926064</li>
                            </ul>
                          </li>
                          <li>Saleem</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0926064</li>
                              <li>Email: 0926064</li>
                            </ul>
                          </li>
                          <li>Morris</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Student Number: 0926064</li>
                              <li>Email: 0926064</li>
                            </ul>
                          </li>
                        </ul>
                      </Col>
              </Col>
              <Col className="ml-auto mr-auto" md="6" lg="7">
                <h3 className="mt-5">Introduction</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elementum nulla. Proin sed nibh at neque convallis interdum at non tortor. Vivamus ultrices odio ac quam lacinia sodales. In hac habitasse platea dictumst. Etiam fringilla, quam in semper varius, urna dui rhoncus mi, quis sollicitudin justo elit at lectus. Nam in mi mattis nisi ullamcorper finibus eu et ipsum. Sed non augue neque. Aenean consequat porta urna id sagittis. Fusce sed quam quam. Quisque viverra quam quam. Sed vestibulum mattis libero, sed dignissim odio fermentum non.
                </p>
                <p className="mt-3">
Sed augue augue, lacinia vestibulum leo a, tincidunt faucibus augue. Sed aliquam, dui eu congue scelerisque, massa nibh aliquet justo, quis commodo nisi nibh non mauris. Maecenas quis aliquet orci. Aliquam venenatis, orci sit amet efficitur congue, tellus libero aliquet orci, in vehicula purus erat at tortor. Pellentesque cursus faucibus fermentum. Praesent ut convallis mauris. Mauris molestie justo ac massa aliquet, a volutpat justo vestibulum. In quam felis, venenatis at purus in, facilisis aliquet ligula. Aenean quis ligula sit amet odio viverra condimentum.
</p>
<p className="mt-3">
Sed ac viverra augue. Etiam sem ante, rhoncus sed lacus eu, sagittis aliquam sapien. Vivamus quis libero eros. Phasellus a commodo urna, id tincidunt massa. Morbi malesuada lectus orci, at condimentum massa congue sed. Suspendisse imperdiet odio metus, a porta purus ullamcorper non. Nulla sit amet turpis vitae turpis accumsan aliquet ac non purus. Fusce accumsan venenatis metus sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam lacinia justo metus, id sodales mauris lacinia vel. Donec semper tincidunt libero eu tincidunt. Nam non maximus arcu. Donec feugiat tempor neque, eget bibendum erat volutpat id.
                </p>
                <h3 className="mt-3">Goal of the Project</h3>
                <p>
                Sed tempor lorem neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc molestie, diam eu hendrerit laoreet, nibh ante luctus massa, ut consequat lacus neque sed sapien. Nullam facilisis tincidunt ex et condimentum. Suspendisse porttitor urna lectus, vel tristique elit gravida sit amet. Vestibulum luctus semper vehicula. Donec porta eget tellus sed semper. Fusce sit amet risus sapien. Sed a fringilla felis, eu cursus arcu. Praesent ac lorem leo. Fusce at libero lorem. Pellentesque commodo quam et lorem fringilla, nec varius justo pulvinar. Mauris quis justo ligula. Sed tincidunt neque ut malesuada consequat. Suspendisse dapibus condimentum scelerisque. Phasellus vehicula felis enim, non fermentum odio lobortis quis.
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
