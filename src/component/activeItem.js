import React from "react";
import { Card } from 'antd';
import "../styles/activeItem.css"

const { Meta } = Card;
class ActiveItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow:true
        }
    }
    render() {
        const imgSrc = require(`../imgs/${this.props.weather.name}.jpg`)
        return (
            <div>
                <Card 
                    onClick={() => {
                        this.setState({
                            isShow:!this.state.isShow
                        })
                    }}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        this.state.isShow ? <img 
                        style={{width:240, height:160}} 
                        alt={this.props.weather.name} 
                        src={imgSrc} /> : <div 
                        style={{
                            width: 240,
                            height: 160,
                            fontFamily: "Georgia",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                            <ul>
                                <li><span>Weather：</span><em>{this.props.weather.weather[0].main}</em></li>
                                <li><span>Temp_Max：</span><em>{this.props.weather.main.temp_max}</em></li>
                                <li><span>Temp_Min：</span><em>{this.props.weather.main.temp_min}</em></li>
                            </ul>
                        </div>
                    }
                >
                    <Meta title={this.props.weather.name} description={`Get More Weather Information By Click the Picture`} />
                </Card>,
            </div>
        )
    }
}

export default ActiveItem;