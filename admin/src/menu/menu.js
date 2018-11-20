let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '经纪人管理',
  path: '/',
  icon: 'fa fa-tachometer',
};



/**
 * 字体图标 二级菜单说明
 * @type {{name: string, icon: string, children: {}}}
 */
/*
menu.font_icon = {
  name: '字体图标',
  icon: 'fa fa-th',
  children: {}
};
let icon = menu.font_icon.children;

icon.font_awesome = {
  name: 'FontAwesome 4.7',
  path: '/font_awesome',

};
icon.element_icon = {
  name: 'ElementIcon',
  path: '/element_icon',
};
*/

export default menu;

if(process.env.NODE_ENV=='development'){

  menu.development_tools = {
    name: '开发工具',
    icon: 'fa fa-wrench',
    children: {}
  };

  let DevelopmentTools = menu.development_tools.children;

  DevelopmentTools.code = {
    name: '构建代码',
    path: '/build_code',
  };

}
