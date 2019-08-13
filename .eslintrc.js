module.exports = {
  parser: 'babel-eslint',
  // extends: ['airbnb', 'prettier'],
  // plugins: [
  //   'react',
  // ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true, // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
    page: true,
    useState: true,
    useRef: true,
    useEffect: true,
    React: true,
    connect: true,
    F_VALUE: true,
    F_LABEL: true,
    arguments: true,
    inject: true
  },


};
