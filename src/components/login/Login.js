import React from "react";
import { Modal } from "antd";
import LoginFormContainer from '../../containers/LoginFormContainer';

import styles from './Login.module.css';


class LoginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {  confirmLoading } = this.state;

    return (
      <div>
        <button
          className={styles.loginButton}
          onClick={this.showModal}>
          Log in
        </button>
        
        <Modal
          width={400}
          title="LOGIN STATE"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          destroyOnClose={true}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
        >
          <LoginFormContainer
            closeModal={this.handleCancel}
          />
        </Modal>
      </div>
    );
  }
}

export { LoginModal };