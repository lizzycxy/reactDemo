import React from "react";
import { Card, Input, Icon, Tooltip, Button } from 'antd';
import "../styles/login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login_container">
        <Card title="欢迎进入 Datia 管理系统" extra={<a href="#">注册账号</a>} style={{ width: 500 }}>
          <div className="login_inoputItem">
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Extra information">
                  <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </div>
          <div className="login_inoputItem">
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title="Extra information">
                  <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </div>
          <div className="login_buttonItem">
            <Button 
            onClick={() => this.props.history.push('/info')}
            style={{ width: 200 }} 
            type="primary">登录</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default Login;