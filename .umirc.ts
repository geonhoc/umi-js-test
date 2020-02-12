import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/option1', component: '../pages/option1'},
        { path: '/option2', component: '../pages/option2'},
        { path: '/option3', component: '../pages/option3'},
        { path: '/option4-1', component: '../pages/option4/option1'},
        { path: '/option4-2', component: '../pages/option4/option2'},
        { path: '/option4-3', component: '../pages/option4/option3'},
        { path: '/option4-4', component: '../pages/option4/option4'},

      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'umi-js-test',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    "/ajax": {
      "target": "https://www.tripbtoz.com/",
      "changeOrigin": true
    }
  }
};

export default config;
