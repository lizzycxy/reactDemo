import React from "react";
import { Card } from "antd";
import CounterShow from "../../component/counterShow";
import CounterButton from "../../component/counterButton";

class ToolsCounter extends React.Component {
    render() {
        return (
            <div
                style={{ background: '#ECECEC', padding: '30px', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card
                    hoverable={true}
                    title="Counter Tools"
                    bordered={false}
                    style={{ width: 500, height: 400 }}>
                    <div style={{ marginTop: 50 }}>
                        <CounterShow count={this.props.count} />
                        <CounterButton />
                    </div>
                </Card>
            </div>
        )
    }
}
export default ToolsCounter;