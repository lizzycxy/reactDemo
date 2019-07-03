import React from "react";
import { Row, Col } from "antd";
import ActiveItem from "../../component/activeItem";
import * as utils from "../../utils";
class Active extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            container: [],
        }
    }
    getData() {
        const data = utils.getDataFromSession();
        return data;
    }
    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px', height: 500, overflow: 'auto' }}>
                <Row gutter={32} >
                    <Col span={6} >
                        <ActiveItem key={0} weather={this.getData()[0]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={1} weather={this.getData()[1]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={2} weather={this.getData()[2]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={3} weather={this.getData()[3]} />
                    </Col>
                </Row>
                <Row gutter={32} >
                    <Col span={6} >
                        <ActiveItem key={4} weather={this.getData()[4]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={5} weather={this.getData()[5]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={6} weather={this.getData()[6]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={7} weather={this.getData()[7]} />
                    </Col>
                </Row>
                <Row gutter={32} >
                    <Col span={6} >
                        <ActiveItem key={8} weather={this.getData()[8]} />
                    </Col>
                    <Col span={6} >
                        <ActiveItem key={9} weather={this.getData()[9]} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Active;