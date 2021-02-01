import React, { Component } from "react";
import { Redirect, Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import {Row, Col } from 'antd';

import { delay } from "../../utils/index";
import { MarkdownParser, ScrollToTop } from '../../utils';
import Editor from './Editor';

import 'github-markdown-css';
import 'prism-themes/themes/prism-darcula.css';

import styles from './ArticleEdit.module.css';

import {EditPageHeader as Header} from '../header/TheHeader';
// import markdownFeatureSrc from '../../assets/markdown-test-file';
// import markdownCheatSheet from '../assets/markdown-cheatsheet';

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      markdown: '',
      htmlOutput: '',
      displayMode: 'Editor & Preview',
      scrollSync: true
    };

    this.codeMirrorOption = {
      mode: 'gfm',
      theme: 'cherry',
      tabSize: 2,
      styleActiveLine: true,
      lineWiseCopyCut: true,
    };

    this.$editor = null;
    this.$preview = null;

    this.isScrollSyncEnabled = true;

    this.editorScrollDistance = 0;
    this.previewScrollDistance = 0;

    this.lastDisplayMode = 'Editor & Preview';
  }

  componentDidMount() {
    this.$editor = document.querySelector('.editor');
    this.$preview = document.querySelector('.preview');

    // Prevent the user who isn't logged in to the article editing page.
    if (this.props.isLoggedIn && typeof this.props.markdown === 'string') {
      // If user click the edit button to article editing page,
      // it should fetch the data from the state by the <articleID>.

      // However, if the user jump to the article editing page by input the url
      // directly with invalid <articleID>, due to the invalid markdown string,
      // it will throw an error by markdown parser.
      const { markdown } = this.props;

      this.setState({
        isLoggedIn: true,
        markdown: markdown,
        htmlOutput: MarkdownParser.render(markdown)
      });
    } else {
      // Set isLoggedIn to false. It will redirect to the article list page.
      this.setState({
        isLoggedIn: false
      });
    }
  }

  componentWillUnmount() {
    // destroy the dom node reference
    this.$editor = null;
    this.$preview = null;
  }

  handleSourceUpdate = (editor, data, value) => {
    this.setState({
      markdown: value,
      htmlOutput: MarkdownParser.render(value)
    });

    if (!this.props.isMarkdownTouch) {
      // Set state.currentEdit.isTouch to true only when isTouch is false.
      this.props.updateContentEditStatus();
    }
  };

  handleScrollSyncToggle = () => {
    this.isScrollSyncEnabled = !this.isScrollSyncEnabled;

    this.setState({
      scrollSync: this.isScrollSyncEnabled
    });
  };

  handleDisplayModeChange = async (e) => {
    const nextDisplayMode = e.target.value;

    this.setState({
      displayMode: nextDisplayMode
    });

    if (nextDisplayMode === 'Editor & Preview') {

      if (this.isScrollSyncEnabled) {

        await delay(200);

        this.setState({
          scrollSync: true
        });
      }
    } else {
      this.setState({
        scrollSync: false
      });
    }

    this.syncScrollManually(this.isScrollSyncEnabled, this.lastDisplayMode, nextDisplayMode);

    this.lastDisplayMode = nextDisplayMode;
  };

  saveScrollTop = () => {
    this.editorScrollDistance = this.$editor.scrollTop;
    this.previewScrollDistance = this.$preview.scrollTop;
  };

  syncScrollManually = async (isScrollSyncEnabled, prevDisplayMode, nextDisplayMode) => {
    if (!isScrollSyncEnabled) {
      return;
    }

    if (prevDisplayMode === 'Editor Only' && nextDisplayMode === 'Preview Only') {
      const scrollingProportion = this.getScrollingProportion(this.$editor);

      await delay(200);
      this.$preview.scrollTop = this.getCalculatedScrollTop(this.$preview, scrollingProportion);
    }

    if (prevDisplayMode === 'Preview Only' && nextDisplayMode === 'Editor Only') {
      const scrollingProportion = this.getScrollingProportion(this.$preview);

      await delay(200);
      this.$editor.scrollTop = this.getCalculatedScrollTop(this.$editor, scrollingProportion);
    }


    if (prevDisplayMode === 'Editor Only' && nextDisplayMode === 'Editor & Preview') {

      this.$editor.scrollTop = this.editorScrollDistance - 1;
    }

    if (prevDisplayMode === 'Preview Only' && nextDisplayMode === 'Editor & Preview') {
      this.$preview.scrollTop = this.previewScrollDistance - 1;
    }
  };

  getScrollingProportion(node) {
    if (node.matches('.editor')) {
      return (this.editorScrollDistance / (node.scrollHeight - node.clientHeight)).toFixed(4);
    }

    if (node.matches('.preview')) {
      return (this.previewScrollDistance / (node.scrollHeight - node.clientHeight)).toFixed(4);
    }
  }

  getCalculatedScrollTop(node, proportion) {
    return Math.round((node.scrollHeight - node.clientHeight) * proportion);
  }

  toggleStyleOfEditor (currentMode) {
    switch (currentMode) {
      case 'Editor Only':
        return styles.editorOnly;
      case 'Preview Only':
        return styles.editorHide;
      default:
        return styles.editor;
    }
  }

  toggleStyleOfPreviewer (currentMode) {
    switch (currentMode) {
      case 'Editor Only':
        return styles.previewHide;
      case 'Preview Only':
        return styles.previewOnly;
      default:
        return styles.preview;
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    const { isMarkdownTouch } = this.props;

    return (
      <>
        {
          isLoggedIn
            ? (
              <div>
                <Prompt
                  when={isMarkdownTouch}
                  message="You need to connect to Moonbeam Node "
                />
                <ScrollToTop/>
                <Header
                  id={this.props.id}
                  markdown={this.state.markdown}
                  toggleDisplayMode={this.handleDisplayModeChange}
                  toggleScrollSync={this.handleScrollSyncToggle}
                />
                <ScrollSync enabled={this.state.scrollSync}>
                  <Row className={styles.articleEditWrapper} type="flex" justify="center">
                    <ScrollSyncPane>
                      <Col
                        className={this.toggleStyleOfEditor(this.state.displayMode) + ' editor'}
                        ref={this.editor}
                        onScroll={throttle(this.saveScrollTop, 200, {trailing: true})}
                      >
                        {/*<div className={styles.editorWrapper}>*/}
                        <Editor
                          value={this.state.markdown}
                          options={this.codeMirrorOption}
                          handleUpdate={this.handleSourceUpdate}
                        />
                        {/*</div>*/}
                      </Col>
                    </ScrollSyncPane>

                    <ScrollSyncPane>
                      <Col
                        className={this.toggleStyleOfPreviewer(this.state.displayMode) + ' preview'}
                        onScroll={throttle(this.saveScrollTop, 200, {trailing: true})}
                      >
                        {/*<div className={styles.previewWrapper}>*/}
                        <Preview renderResult={{
                          __html: this.state.htmlOutput
                        }}/>
                        {/*</div>*/}
                      </Col>
                    </ScrollSyncPane>
                  </Row>
                </ScrollSync>
              </div>
            ) : (
              <Redirect to='/articles'/>
            )
        }
      </>
    );
  }
}

class Preview extends Component {
  render() {
    return (
      <div className='markdown-body' dangerouslySetInnerHTML={this.props.renderResult}/>
    )
  }
}

Preview.propTypes = {
  renderResult: PropTypes.object
};

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }
//
//   componentDidCatch(error, info) {
//     console.log(error, info);
//   }
//
//   render() {
//     console.log(this.state);
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>
//     }
//
//     return this.props.children;
//   }
// }
//
// const ArticleEditWithErrorBoundary = (props) => (
//   <ErrorBoundary>
//     <ArticleEdit {...props}/>
//   </ErrorBoundary>
// );

export default ArticleEdit;
