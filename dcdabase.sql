/*
Navicat MySQL Data Transfer

Source Server         : lwr
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : dcdabase

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-04-27 18:29:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `modifyTime` datetime DEFAULT NULL,
  `view` smallint(255) unsigned zerofill DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` longtext,
  `tab` varchar(255) DEFAULT NULL,
  `authorId` varchar(255) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('2018-04-26 14:58:23', null, '122345', '啊啊啊asd1', 'article', '4', null, '1');
INSERT INTO `article` VALUES (null, null, '111111', '1', 'article', '4', null, '2');
INSERT INTO `article` VALUES (null, null, 'anewtitle', '111', 'article', '4', null, '3');
INSERT INTO `article` VALUES (null, null, 'anewtitle11', 'anewtitle11anewtitle11anewtitle11anewtitle11', 'article', '4', null, '4');
INSERT INTO `article` VALUES (null, null, '1111111111', '111111111', 'article', '4', null, '5');
INSERT INTO `article` VALUES (null, null, '1111111111', '1111111111111', 'article', '4', null, '6');
INSERT INTO `article` VALUES (null, null, '12234522', '2222222', 'article', '4', null, '7');
INSERT INTO `article` VALUES (null, null, '12234522', '22222221111', 'article', '4', null, '8');
INSERT INTO `article` VALUES (null, null, '1111111111', '121212', 'article', '4', null, '9');
INSERT INTO `article` VALUES (null, null, '111111111111', '12121211', 'article', '4', null, '10');
INSERT INTO `article` VALUES (null, null, '12啊手动阀沙发党', '阿斯顿发生', 'article', '4', null, '11');
INSERT INTO `article` VALUES ('2018-04-26 14:40:46', null, '12啊手动阀沙发党1', '再次更新啊update阿斯顿发生', 'article', '4', null, '12');
INSERT INTO `article` VALUES ('2018-04-26 14:41:03', null, '阿斯蒂芬是', 'update阿斯顿发生试时', 'article', '4', null, '13');
INSERT INTO `article` VALUES (null, null, '1阿斯蒂芬', '阿斯蒂芬', 'article', '4', null, '14');
INSERT INTO `article` VALUES (null, null, 'asdfasdf', '111111', 'article', '4', null, '15');
INSERT INTO `article` VALUES (null, null, 'asdfasdf111', '111111', 'article', '4', null, '16');
INSERT INTO `article` VALUES (null, null, '1111111', '1111', 'article', '4', null, '17');
INSERT INTO `article` VALUES (null, null, '12e1213easv', 'zxcvzxcvzxvc', 'article', '4', null, '18');
INSERT INTO `article` VALUES (null, null, 'asaasasas', 'asasas', 'article', '4', null, '19');
INSERT INTO `article` VALUES (null, null, '12123', '12312312', 'article', '4', null, '20');
INSERT INTO `article` VALUES (null, null, '12222222', '12121221', 'article', '4', null, '21');

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
INSERT INTO `user` VALUES (null, null, '1', 'leewr', '123456', '1', '1111');
INSERT INTO `user` VALUES ('60', 'admin1', '4', 'admin1', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '');
INSERT INTO `user` VALUES (null, 'admin', '3', 'admin', '123456', '1', '');
