/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : ironhack

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2016-12-23 01:36:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('papapa', 'f3cdf41cb8081d567e44706a6cde342d4fdb3924', 'participantwdw');
INSERT INTO `user` VALUES ('pengli', 'f3cdf41cb8081d567e44706a6cde342d4fdb3924', 'participantB');
INSERT INTO `user` VALUES ('pengli1', 'f3cdf41cb8081d567e44706a6cde342d4fdb3924', 'participantB');
INSERT INTO `user` VALUES ('pengli2', 'f3cdf41cb8081d567e44706a6cde342d4fdb3924', 'participantA');
SET FOREIGN_KEY_CHECKS=1;
