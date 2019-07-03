import React from "react";
import { Card } from "antd";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../store/count/actions"
import CounterShow from "../../component/counterShow";
import CounterButton from "../../component/counterButton";

class ToolsCounter extends React.Component {
    textInput = React.createRef();
    setCount = e => {
        const count = this.textInput.current.value;
        const reg = /^-?[1-9][0-9]*$/;
        if (!reg.test(count)) {
            return;
        }
        this.props.setCount(count)
        this.textInput.current.value = "";
    }
    render() {
        const { increment, decrement } = this.props;
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
                        <CounterShow />
                        <CounterButton 
                         handleIncrement={() => increment()}  
                         handleDecrement={() => decrement()} />
                    </div>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ToolsCounter);