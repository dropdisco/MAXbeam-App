import React from "react";

import { Dropdown, Icon } from "antd";
import UserNavMenuContainer from '../../containers/UserNavMenuContainer'
import styles from "./Header.module.css";




const UserNavButton = () => {
  return (
    <>
    <Dropdown
      className={styles.button}
      overlay={<UserNavMenuContainer/>}
      trigger={['click']}
      placement='bottomCenter'
    >
    <span className="title-enter">MENU
      <Icon type="dingtalk-square" theme="filled" id="enter-id" />
      </span>
    </Dropdown>
    </>
  )
};

export { UserNavButton };