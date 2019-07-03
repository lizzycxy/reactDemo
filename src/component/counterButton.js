import React from "react";
import { Button, Icon, Input } from 'antd';

const ButtonGroup = Button.Group;

class CounterButton extends React.Component{
    render(){
        return(
            <ButtonGroup style={{display:'flex'}}>
                <Button style={{width:100}} type="primary">
                    <Icon type="plus" />
                </Button>
                <Input style={{width:300}} />
                <Button style={{width:100}} type="primary">
                    <Icon type="minus" />
                </Button>
            </ButtonGroup>
        )
    }
}

export default CounterButton;
