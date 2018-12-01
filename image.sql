/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : dcdabase

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-12-01 10:59:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` smallint(255) NOT NULL AUTO_INCREMENT,
  `fullUrl` varchar(255) DEFAULT NULL,
  `cutImage` varchar(255) DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  `modifyTime` datetime DEFAULT NULL,
  `cid` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
