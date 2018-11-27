/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.5.53 : Database - dcdabase
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dcdabase` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `dcdabase`;

/*Table structure for table `article` */

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
  `likeNum` smallint(9) NOT NULL DEFAULT '0',
  `cid` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(20) NOT NULL,
  `parentId` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `authorId` mediumint(8) unsigned NOT NULL,
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(18) NOT NULL,
  `authorName` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  `articleId` int(11) NOT NULL,
  `content` varchar(255) NOT NULL DEFAULT '',
  `thumbs` int(11) NOT NULL DEFAULT '0',
  `replyId` int(11) NOT NULL DEFAULT '0',
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Table structure for table `fans` */

DROP TABLE IF EXISTS `fans`;

CREATE TABLE `fans` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '粉丝表',
  `userId` int(10) unsigned NOT NULL,
  `follower` int(11) NOT NULL,
  `status` smallint(6) NOT NULL COMMENT '关注状态',
  `createTime` int(10) unsigned NOT NULL,
  `modifyTime` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Table structure for table `follow` */

DROP TABLE IF EXISTS `follow`;

CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL COMMENT '关注关系表',
  `followedUser` int(10) unsigned NOT NULL,
  `status` smallint(6) NOT NULL,
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Table structure for table `temparticle` */

DROP TABLE IF EXISTS `temparticle`;

CREATE TABLE `temparticle` (
  `modifyTime` datetime DEFAULT NULL,
  `view` smallint(9) unsigned NOT NULL DEFAULT '0',
  `title` varchar(765) DEFAULT NULL,
  `content` text,
  `tab` varchar(765) DEFAULT NULL,
  `authorId` varchar(765) DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(765) DEFAULT NULL,
  `summary` text,
  `commentNum` int(9) NOT NULL DEFAULT '0',
  `likeNum` smallint(9) unsigned NOT NULL DEFAULT '0',
  `cid` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1300 DEFAULT CHARSET=utf8;

/*Table structure for table `thumbs` */

DROP TABLE IF EXISTS `thumbs`;

CREATE TABLE `thumbs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` int(10) NOT NULL COMMENT 'articleId 、commentId',
  `userId` int(10) NOT NULL,
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `articleNum` smallint(6) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `avatarUrl` varchar(255) DEFAULT NULL,
  `followNum` int(10) unsigned NOT NULL DEFAULT '0',
  `fansNum` int(10) unsigned NOT NULL DEFAULT '0',
  `likeNum` int(10) unsigned NOT NULL DEFAULT '0',
  `worldNum` int(10) NOT NULL DEFAULT '0',
  `email` varchar(20) NOT NULL,
  `sex` varchar(2) NOT NULL,
  `homePage` varchar(20) NOT NULL,
  `intro` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
