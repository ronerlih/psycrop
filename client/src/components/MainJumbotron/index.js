import React from "react";
import { Col, Row } from "../Grid";

function MainJumbotron() {
    return (
        <Row extraClass="jumbo">
            <Col size="md-6" extraClass="order-last order-md-first">
                <div>
                    <span>
                        <strong className="page-headline">psyKrop API</strong> <br /> Is a non opinionated non bias A.I that returns insight about images, primarily an <em>Aesthetic balance score</em>.
                    </span>
                    <p></p>
                </div>
                <p></p>
                <h4>Base URL</h4>
                <p>Make all API calls to </p>
                <div className="url">https://psykrop-api.herokuapp.com/</div>
            </Col>
            <Col extraClass="text-right pt-1 " size="md-6">
                <div>
                    {/* <span> </span> */}
                    {/* <img src="https://img.shields.io/github/package-json/v/ronerlih/psykrop-api" alt="build badge - contiues deployment" /> */}
                    <img src="https://api.travis-ci.com/ronerlih/psykrop-api.svg?branch=master" alt="build badge - contiues deployment" />
                    <span> </span>
                    <img src="https://img.shields.io/badge/release-alpha-cornflowerblue" alt="alpha badge" />
                    {/* <span style={{ backgroundColor: "gray", padding: 3, fontSize: 8, color: "white" }}>[alpha]</span> */}
                </div>
                <div className="pt-1">
                    <a href="https://www.psykrop.com/" target="_black">
                        About psyKrop
                    </a>
                </div>
                <div>
                    <a href="https://apps.apple.com/in/app/psykrop/id1398529702" target="_black">
                        iOS app
                    </a>
                </div>
                <div>
                    <a href="https://www.psykrop.com/try-on-web.html" target="_black">
                        Web widget
                    </a>
                </div>
            </Col>
        </Row>
    );
}

export default MainJumbotron;
