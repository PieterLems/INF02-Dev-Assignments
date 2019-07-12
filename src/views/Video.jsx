import React from "react";


// reactstrap components
import {
    CardBody,
    Col,
    CardTitle
} from "reactstrap";



class Video extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <CardBody>
                        <Col className="ml-auto mr-auto" md="6" lg="7">
                            <CardTitle>
                                Analyse Opdracht B video
                        </CardTitle>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6BuoHyyJLd8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </Col>
                    </CardBody>
                </div>
            </>
        );
    }
}

export default Video;
