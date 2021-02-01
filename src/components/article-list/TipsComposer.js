import React from "react";
import { ethers } from "ethers";
import { toast, Zoom } from "react-toastify";
import { Modal, Icon, message, Button } from "antd";
import "react-toastify/dist/ReactToastify.min.css";
import {
  sendTo,
  thisAmmount,
  gasMax,
  gasPrices,
  wallet,
  txHasAddress,
  WsProvider,
} from "../backend/Moonbeam";


class TipsSend extends React.Component {

  state = {
    ModalText: "Are You Sure ?",
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async () => {

    this.setState({
      ModalText: "Attempting to Fetch Data ... \n ",
      ModalText2: "⛔ make sure you're connnected to Moonbeam Node ⛔",
      confirmLoading: true,
    });
    toast.configure();

    try {
      console.log(
        `Attempting to send transaction from ${wallet.address} to ${sendTo}`
      );
    } catch (err) {
      message.error("something bad happen..");

    } finally {
      const tx = {
        to: sendTo,
        gasLimit: gasMax,
        gasPrice: gasPrices,
        value: ethers.utils.parseEther(thisAmmount),
      };
      console.log(tx);
      const createReceipt = await wallet.sendTransaction(tx);
      await createReceipt.wait();
      console.log(`Transaction successful with hash: ${createReceipt.hash}`);
      OpenMessage();
      


      function Mesg2() {
        return (
          <div>
            <p className="tips-title">
              <span className="groot-mini">
              <Icon type="dingtalk-square" theme="filled"/>
              <span className="blah-atmp">Attempting to send transaction</span> 
              </span>
            </p>
            <div className="attempt-text">
              <span>
                From {wallet.address} <br /> To {sendTo}
              </span>
            </div>
          </div>
        );
      }

      function Mesg() {
        return (
          <div>
            <p className="tips-title">
              <span className="groot-mini">
              <Icon type="dingtalk-square" theme="filled"/>
              <span className="blah-atmp">Tip has been send.. </span> 
              </span>
            </p>
            <div className="txhash-text">
              <a
                href={txHasAddress + createReceipt.hash + WsProvider}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Check Your transactions <span className="let-blue"> Here </span>
              </a>
            </div>
          </div>
        );
      }
      function OpenMessage() {
        toast(<Mesg2 />, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          toast(<Mesg />, {
            position: "top-right",
            autoClose: 12345,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom
          });
        }, 3000);
      }
    }
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    // console.log("Clicked cancel button");
    this.setState({
      visible: false,
      confirmLoading: false,
    });
  };



  render() {
    const { visible, confirmLoading, ModalText, ModalText2 } = this.state;


    return (
      <>
        <Modal 
          title="💰 Send Tip 0.05 ETH "
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className="yolo"
          width="400px"
        >
          <p>{ModalText}</p>
          <p className="warn-text">{ModalText2}</p>
        </Modal>
        <div className="buttoncontent">
        <Button type="primary" id="tipbutton" className="button-base" onClick={this.showModal}>
        <Icon type="money-collect" />
        Send Tips
        </Button>
        <Button type="primary" className=  "button-base"  >
        <Icon type="message"/>
        Show Comment
        </Button>
        </div>
      </>
    );
  }
}

export default TipsSend;
