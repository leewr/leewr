/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : dcdabase

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-08-19 23:18:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `modifyTime` datetime DEFAULT NULL,
  `view` smallint(9) unsigned NOT NULL DEFAULT '0',
  `title` varchar(255) DEFAULT NULL,
  `content` longtext,
  `tab` varchar(255) DEFAULT NULL,
  `authorId` varchar(255) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) DEFAULT NULL,
  `summary` mediumtext,
  `commentNum` int(9) NOT NULL DEFAULT '0',
  `thumbs` smallint(9) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('2018-04-26 14:58:23', '0', '122345', '啊啊啊asd1', 'article', '4', null, '1', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '111111', '1', 'article', '4', null, '2', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'anewtitle', '111', 'article', '4', null, '3', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'anewtitle11', 'anewtitle11anewtitle11anewtitle11anewtitle11', 'article', '4', null, '4', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111111', '111111111', 'article', '4', null, '5', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111111', '1111111111111', 'article', '4', null, '6', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12234522', '2222222', 'article', '4', null, '7', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12234522', '22222221111', 'article', '4', null, '8', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111111', '121212', 'article', '4', null, '9', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '111111111111', '12121211', 'article', '4', null, '10', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12啊手动阀沙发党', '阿斯顿发生', 'article', '4', null, '11', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-04-26 14:40:46', '0', '12啊手动阀沙发党1', '再次更新啊update阿斯顿发生', 'article', '4', null, '12', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-04-26 14:41:03', '0', '阿斯蒂芬是', 'update阿斯顿发生试时', 'article', '4', null, '13', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1阿斯蒂芬', '阿斯蒂芬', 'article', '4', null, '14', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'asdfasdf', '111111', 'article', '4', null, '15', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'asdfasdf111', '111111', 'article', '4', null, '16', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111', '1111', 'article', '4', null, '17', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12e1213easv', 'zxcvzxcvzxvc', 'article', '4', null, '18', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'asaasasas', 'asasas', 'article', '4', null, '19', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12123', '12312312', 'article', '4', null, '20', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12222222', '12121221', 'article', '4', null, '21', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题1111', '111', 'article', '4', null, '22', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题aa', '11111111111', 'article', '4', null, '23', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题aa', '11111111111', 'article', '4', null, '24', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题24', '24', 'article', '4', null, '25', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题24', '24', 'article', '4', null, '26', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题222', '111', 'article', '4', null, '27', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题222', '111', 'article', '4', null, '28', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题222', '111', 'article', '4', null, '29', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-08-19 10:45:08', '0', '无标题30', '30000000000', 'article', '4', null, '30', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-08-19 17:21:34', '0', '年华', 'C先生直接被调离单位了。 一根毛发就能轻易暴露出孩子的血缘。他走的时候，正看到她正与几个同事在说笑，笑起来时，已看到眼角鱼尾纹了。记得第一次与她上床，他笑说，你让W白掏了这么年抚养费，你亏心不。而就在刚才，她走过来提醒他道，每月的抚养费，不要忘了哦。', 'article', '4', null, '31', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '编辑器发布文章测试', '<h4>1、在线编辑，实时保存</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;在线编辑，告别繁重的office软件；实时保存，不用担心编辑丢失。</p><h4>2、将文档分享给好友</h4><p>点击分享，将文档链接发送给好友。</p><p><br></p>', 'article', '4', null, '32', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '新用户文章', '<p>顶顶顶顶顶</p>', 'article', '1', '2018-08-19 22:40:17', '33', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '1', '阿斯顿发', '<p>时尚时尚暗室逢灯</p>', 'article', '1', '2018-08-19 22:51:21', '34', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '阿斯顿发哎哎', '<p>阿斯顿发</p>', 'article', '1', '2018-08-19 22:52:40', '35', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'summary', '<p>添加summary文章测试</p>', 'article', '1', '2018-08-19 22:57:56', '36', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题读取内容', '<p>需要注意的是：<strong>从编辑器中获取的 html 代码是不包含任何样式的纯 html</strong>，如果显示的时候需要对其中的<code>&lt;table&gt;</code><code>&lt;code&gt;</code><code>&lt;blockquote&gt;</code>等标签进行自定义样式（这样既可实现多皮肤功能），下面提供了编辑器中使用的样式供参考\r\n\r\n</p>', 'article', '1', '2018-08-19 22:59:08', '37', null, '需要注意的是：从编辑器中获取的 html', '0', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `score` smallint(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (null, 'leewr', '1', 'leewr', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '1111');
INSERT INTO `user` VALUES ('105', 'admin1', '4', 'admin1', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '');
INSERT INTO `user` VALUES (null, 'admin', '3', 'admin', '123456', '1', '');
