# Write Down

A simple markdown blog app built with React.

The article in Write Down are using markdown to write. The markdown here is based on GFM, and it supports some additional features, like emoji, subscript, superscript and etc. (You can see those in the full feature example in [Demo](https://nevenleung.github.io/write-down/).)

[README 中文](https://github.com/NevenLeung/write-down/blob/master/docs/README-zh.md)

## Table of Contents

- [Motivation](https://github.com/NevenLeung/write-down#motivation)
- [Demo](https://github.com/NevenLeung/write-down#demo)
- [Feature List](https://github.com/NevenLeung/write-down#feature-list)
- [Showcase](https://github.com/NevenLeung/write-down#showcase)
- [Other resources](https://github.com/NevenLeung/write-down#other-resources)
- [Built with](https://github.com/NevenLeung/write-down#built-with)
- [Scripts](https://github.com/NevenLeung/write-down#scripts)
- [License](https://github.com/NevenLeung/write-down#license)
- [Acknowledgements](https://github.com/NevenLeung/write-down#acknowledgements)

## Motivation

I want to make something that I have never made it before. Meanwhile, I want to practise what I learn from React by making Write Down.

## Demo

[Demo Link](https://nevenleung.github.io/write-down/)

> Only after logging in, you can see the editing option and create a new article. The following is the testing account:

| username | password |
| :------: | :------: |
| test     | 123456   |

---



## Feature List

### Article System

- Edit article
  - Edit markdown
    - [x] Toggle editing and preview mode
    - [x] Sync scrolling of editing and preview panels
    - [x] Highlight the code of markdown according to its usage (I made the CodeMirror color theme)
    - [x] Prompt to save markdown after editing
    - [ ] Support some built-in snippets for markdown
  - Edit other elements
    - [x] Set the tags of article
    - [x] Set the title and excerpt of article
    - [x] Search the heading image based on keyword and set it (The heading image is also the cover of it in the article list)
    - [x] Preview the article info (Hovering on the **info setting button**)
- Manage article
  - [x] Create new article
  - [x] Publish article/save as draft
  - [x] Update article
  - [x] Removed article
- Export article
  - [x] Markdown file
  - [x] Styled HTML file
- Store article
  - [x] Local storage


### User System

- [x] User login/logout ( Now it only supports specified user to log in & Local Storage )

### Future

- [x] Will be available for every user, using JsonServer, lowDB & Substarte


## Showcase 

[YOUTUBE](youtube.com)


## Other resources

- [x] [Why only works for Local Storage ?](.com)

- [x] [How to Change with Live API ?](.com)

## Built With

- JS framework - [React](https://github.com/facebook/react/)
- Backend
   - [Moonbeam](https://github.com/facebook/react/)
   - [PouchDB](https://github.com/facebook/react/)
   - [Ether](https://github.com/facebook/react/)
   - [Moonbeam](https://github.com/facebook/react/)
- UI Composer - [Ant Design](https://github.com/ant-design/ant-design/)
- State Manager - [Redux](https://github.com/reactjs/redux/)
- Front-End Router - [React-Router](https://github.com/ReactTraining/react-router)
- Text editor - [CodeMirror](https://github.com/codemirror/CodeMirror/)
- markdown parser - [markdown-it](https://github.com/markdown-it/markdown-it/)
- Code highlighting - [Prism](https://github.com/PrismJS/prism/)
- Local storage - [PouchDB](https://github.com/pouchdb/pouchdb/)
- Photo search - [Unsplash](https://github.com/unsplash/unsplash-js)
- Photo display (like Pinterest) - [react-stack-grid](https://github.com/tsuyoshiwada/react-stack-grid)
- File export - [File Saver](https://github.com/eligrey/FileSaver.js/)
- Time transformation - [DayJS](https://github.com/iamkun/dayjs)

## Scripts

Run

```
$ yarn 

$ yarn start
```

Build

```
$ yarn build
```


