import React from 'react';
import { Drawer, Button } from 'antd';
import '../../css/classify.css';
import ReactDOM from 'react-dom';

class FaceDrawer extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className="site-drawer-render-in-current-wrapper">
                Render in this
                <div style={{ marginTop: 16 }}>
                    <Button type="primary" onClick={this.showDrawer}>
                        Open
                    </Button>
                </div>
                <Drawer
                    title="Basic Drawer"
                    placement="top"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

const FaceClassify = (name) => {
    return(
        ReactDOM.render(<FaceDrawer />, document.getElementsByClassName(name.name))
    )
}

export default FaceClassify