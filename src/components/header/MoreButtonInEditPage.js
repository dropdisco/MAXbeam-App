import React from "react";
import { Dropdown, Icon, Menu } from "antd";

import { exportFile, generateStyledHTML } from "../../utils";

import styles from "./Header.module.css";

const MoreMenuInEditPage = ({ data, ...rest }) => {
  const handleMenuItemClick= ({item, key, keyPath}) => {
    const { title, markdown } = data;

    if (key === 'markdown') {
      exportFile(markdown, 'text/markdown; charset=utf-8', title + '.md');
    } else if (key === 'html') {
      const file = generateStyledHTML(data);

      exportFile(file, 'text/plain; charset=utf-8', title + '.html');
    }
  };

  return (

    <Menu {...rest} onClick={handleMenuItemClick}>
      <Menu.Item key="markdown">
        Export as Markdown
      </Menu.Item>
      <Menu.Item key="html">
        Export as HTML
      </Menu.Item>
      {/*<Menu.Item key="3">*/}
        {/*Help*/}
      {/*</Menu.Item>*/}
    </Menu>
  );
};

const MoreButtonInEditPage = (props) => {
  return (
    <Dropdown
      className={styles.button}
      overlay={
        <MoreMenuInEditPage
          data={props}
        />
      }
      trigger={['click']}
      placement='bottomCenter'
    >
      <Icon type="ellipsis" theme="outlined" title="Others"/>
    </Dropdown>
  );
};

export {
  MoreButtonInEditPage
};