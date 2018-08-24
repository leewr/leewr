/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : dcdabase

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-08-24 18:47:57
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
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

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
INSERT INTO `article` VALUES (null, '4', '无标题222', '111', 'article', '4', null, '28', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '1', '无标题222', '111', 'article', '4', null, '29', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-08-21 16:34:35', '32', 'API 设计思考题', '<blockquote>参考文档：<a href=\"https://www.yuque.com/kiwi/ios/swift-api-design\" target=\"_blank\">[译] 官方 Swift API 设计规范</a></blockquote><p>1.说明下面两个方法为什么第一个声明了参数标签 at，第二个方法缺省了。</p><pre><code class=\"hljs php\"><ul><li><div>extension <span class=\"hljs-keyword\">List</span> {\r\n</div></li><li><div>  <span class=\"hljs-keyword\">public</span> mutating func remove(at position: Index) -&gt; Element\r\n</div></li><li><div>  <span class=\"hljs-keyword\">public</span> mutating func remove(_ member: Element) -&gt; Element?\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>2.下面两种声明方式哪一个是正确的，说明原因。</p><pre><code class=\"hljs javascript\"><ul><li><div>func add(_ observer: NSObject, <span class=\"hljs-keyword\">for</span> keyPath: <span class=\"hljs-built_in\">String</span>)\r\n</div></li><li><div>func addObserver(_ observer: NSObject, forKeyPath path: <span class=\"hljs-built_in\">String</span>)\r\n</div></li></ul></code></pre><p>3.下面哪一种声明方式更好，说明原因。</p><pre><code class=\"hljs css\"><ul><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.subViews</span>(<span class=\"hljs-selector-tag\">havingColor</span>: <span class=\"hljs-selector-tag\">y</span>)\r\n</div></li><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.subViews</span>(<span class=\"hljs-selector-tag\">color</span>: <span class=\"hljs-selector-tag\">y</span>)\r\n</div></li></ul></code></pre><p>4.下面哪一种声明方式更好，说明原因。</p><pre><code class=\"hljs javascript\"><ul><li><div><span class=\"hljs-keyword\">let</span> foreground = Color(red: <span class=\"hljs-number\">32</span>, <span class=\"hljs-attr\">green</span>: <span class=\"hljs-number\">64</span>, <span class=\"hljs-attr\">blue</span>: <span class=\"hljs-number\">128</span>)\r\n</div></li><li><div><span class=\"hljs-keyword\">let</span> foreground = Color(havingRGBValuesRed: <span class=\"hljs-number\">32</span>, <span class=\"hljs-attr\">green</span>: <span class=\"hljs-number\">64</span>, <span class=\"hljs-attr\">andBlue</span>: <span class=\"hljs-number\">128</span>)\r\n</div></li></ul></code></pre><p>5.下面两个方法有什么区别？</p><pre><code class=\"hljs css\"><ul><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.sort</span>()\r\n</div></li><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.sorted</span>()\r\n</div></li></ul></code></pre><p>6.<code>Protocol</code>&nbsp;有什么命名规则？<br>7.什么情况可以声明全局函数？<br>8.下面这样声明的方法缺省了第一个参数标签有什么原因？</p><pre><code class=\"hljs coffeescript\"><ul><li><div>extension Shape {\r\n</div></li><li><div>  <span class=\"hljs-regexp\">/// Returns `true` iff `other` is within the area of `self`.\r\n</span></div></li><li><div><span class=\"hljs-regexp\">  func contains(_ other: Point) -&gt; Bool { ... }\r\n</span></div></li><li><div><span class=\"hljs-regexp\">\r\n</span></div></li><li><div><span class=\"hljs-regexp\">  ///</span> Returns `<span class=\"javascript\"><span class=\"hljs-literal\">true</span></span>` iff `<span class=\"javascript\">other</span>` <span class=\"hljs-keyword\">is</span> entirely within the area <span class=\"hljs-keyword\">of</span> `<span class=\"javascript\">self</span>`.\r\n</div></li><li><div>  func contains(_ other: Shape) -&gt; Bool { ... }\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>9.下面这样声明会带来什么问题？</p><pre><code class=\"hljs java\"><ul><li><div>extension Box {\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// Returns the `Int` stored in `self`, if any, and</span>\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// `nil` otherwise.</span>\r\n</div></li><li><div>  <span class=\"hljs-function\">func <span class=\"hljs-title\">value</span><span class=\"hljs-params\">()</span> -&gt; Int? </span>{ ... }\r\n</div></li><li><div>\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// Returns the `String` stored in `self`, if any, and</span>\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// `nil` otherwise.</span>\r\n</div></li><li><div>  <span class=\"hljs-function\">func <span class=\"hljs-title\">value</span><span class=\"hljs-params\">()</span> -&gt; String? </span>{ ... }\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>10.下面的参数名称哪一个比较好？</p><pre><code class=\"hljs coffeescript\"><ul><li><div>func filter(_ predicate: <span class=\"hljs-function\"><span class=\"hljs-params\">(Element)</span> -&gt;</span> Bool) -&gt; [Generator.Element]\r\n</div></li><li><div>func filter(_ includedInResult: <span class=\"hljs-function\"><span class=\"hljs-params\">(Element)</span> -&gt;</span> Bool) -&gt; [Generator.Element]\r\n</div></li></ul></code></pre><p>11.下面声明错误的地方在哪里？</p><pre><code class=\"hljs javascript\"><ul><li><div>extension <span class=\"hljs-built_in\">String</span> {\r\n</div></li><li><div><span class=\"hljs-comment\">/// ...description...</span>\r\n</div></li><li><div>    public func compare(_ options: CompareOptions = [], <span class=\"hljs-attr\">other</span>: <span class=\"hljs-built_in\">String</span>, <span class=\"hljs-attr\">range</span>: Range? = nil, <span class=\"hljs-attr\">locale</span>: Locale? = nil\r\n</div></li><li><div>    ) -&gt; Ordering\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>12.下面的函数为什么不需要声明参数标签？</p><pre><code class=\"hljs\"><ul><li><div>min(number1, number2)\r\n</div></li><li><div>zip(sequence1, sequence2)\r\n</div></li></ul></code></pre><p>13.下面两个初始化方法为什么一个有参数标签，一个没有？</p><pre><code class=\"hljs objectivec\"><ul><li><div>extension <span class=\"hljs-built_in\">UInt32</span> {\r\n</div></li><li><div><span class=\"hljs-comment\">/// Creates an instance having the specified value.</span>\r\n</div></li><li><div>init(_ value: Int16)           \r\n</div></li><li><div><span class=\"hljs-comment\">/// Creates an instance having the lowest 32 bits of source.</span>\r\n</div></li><li><div>init(truncating source: <span class=\"hljs-built_in\">UInt64</span>) \r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>14.下面两个方法的声明哪一个比较好？</p><pre><code class=\"hljs javascript\"><ul><li><div><span class=\"hljs-comment\">// a 移动到某个点上</span>\r\n</div></li><li><div>a.move(toX: b, <span class=\"hljs-attr\">y</span>: c)\r\n</div></li><li><div>a.moveTo(x: b, <span class=\"hljs-attr\">y</span>: c)\r\n</div></li></ul></code></pre><p>15.下面两个方法的声明哪一个比较好？</p><pre><code class=\"hljs objectivec\"><ul><li><div>extension <span class=\"hljs-built_in\">UIView</span> {\r\n</div></li><li><div>    func addSubview(_ view: <span class=\"hljs-built_in\">UIView</span>)\r\n</div></li><li><div>    func add(subview: <span class=\"hljs-built_in\">UIView</span>)\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>16.下面的声明可能引发什么问题？</p><pre><code class=\"hljs cs\"><ul><li><div><span class=\"hljs-keyword\">struct</span> Array {\r\n</div></li><li><div>  <span class=\"hljs-comment\"><span class=\"hljs-doctag\">///</span> Inserts `newElement` at `self.endIndex`.</span>\r\n</div></li><li><div>  <span class=\"hljs-function\"><span class=\"hljs-keyword\">public</span> mutating func <span class=\"hljs-title\">append</span>(<span class=\"hljs-params\">_ newElement: Element</span>)\r\n</span></div></li><li><div><span class=\"hljs-function\">\r\n</span></div></li><li><div><span class=\"hljs-function\">  <span class=\"hljs-comment\">/// Inserts the contents of `newElements`, in order, at</span>\r\n</span></div></li><li><div><span class=\"hljs-function\">  <span class=\"hljs-comment\">/// `self.endIndex`.</span>\r\n</span></div></li><li><div><span class=\"hljs-function\">  <span class=\"hljs-keyword\">public</span> mutating func <span class=\"hljs-title\">append</span>(<span class=\"hljs-params\">_ newElements: S</span>)\r\n</span></div></li><li><div><span class=\"hljs-function\">    <span class=\"hljs-keyword\">where</span> S.Generator.Element </span>== Element\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>17.下面哪一个命名是正确的：</p><pre><code class=\"hljs cs\"><ul><li><div>下面哪一个命名是正确的：\r\n</div></li><li><div><span class=\"hljs-keyword\">struct</span> Model {\r\n</div></li><li><div>    <span class=\"hljs-keyword\">var</span> sourceURL: URL\r\n</div></li><li><div>    <span class=\"hljs-keyword\">var</span> sourceUrl: URL\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><h2 id=\"section\">综合题</h2><ul><li>什么时候方法、函数的第一个参数缺省参数标签？</li></ul>', 'article', '4', null, '30', null, '参考文档：[译] 官方 Swift AP', '0', '0');
INSERT INTO `article` VALUES ('2018-08-19 17:21:34', '0', '年华', 'C先生直接被调离单位了。 一根毛发就能轻易暴露出孩子的血缘。他走的时候，正看到她正与几个同事在说笑，笑起来时，已看到眼角鱼尾纹了。记得第一次与她上床，他笑说，你让W白掏了这么年抚养费，你亏心不。而就在刚才，她走过来提醒他道，每月的抚养费，不要忘了哦。', 'article', '4', null, '31', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '2', '编辑器发布文章测试', '<h4>1、在线编辑，实时保存</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;在线编辑，告别繁重的office软件；实时保存，不用担心编辑丢失。</p><h4>2、将文档分享给好友</h4><p>点击分享，将文档链接发送给好友。</p><p><br></p>', 'article', '4', null, '32', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '新用户文章', '<p>顶顶顶顶顶</p>', 'article', '1', '2018-08-19 22:40:17', '33', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '1', '阿斯顿发', '<p>时尚时尚暗室逢灯</p>', 'article', '1', '2018-08-19 22:51:21', '34', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '阿斯顿发哎哎', '<p>阿斯顿发</p>', 'article', '1', '2018-08-19 22:52:40', '35', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '3', 'summary', '<p>添加summary文章测试</p>', 'article', '1', '2018-08-19 22:57:56', '36', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-08-24 17:13:11', '68', '无标题读取内容AA1111啊   阿什顿发', '<p>需要注意的是：<strong>从编辑器中获取的 html 代码是不包含任何样式的纯 html</strong>，如果显示的时候需要对其中的<code>&lt;table&gt;</code><code>&lt;code&gt;</code><code>&lt;blockquote&gt;</code>等标签进行自定义样式（这样既可实现多皮肤功能），下面提供了编辑器中使用的样式供参考\r\n\r\n</p><p><br></p><p>asdfasdf</p>', 'article', '1', '2018-08-19 22:59:08', '37', null, '需要注意的是：从编辑器中获取的 html', '0', '0');
INSERT INTO `article` VALUES ('2018-08-24 11:51:07', '6', 'Promise', '<h4>promise 对象 是一个构造函数，用来生成promise实例</h4><pre><code class=\"hljs javascript\"><span class=\"hljs-keyword\">const</span> promise = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">resolve, reject</span>) </span>{<br>	<span class=\"hljs-keyword\">if</span> (<span class=\"hljs-comment\">/* success */</span>) {<br>		resolve(value)<br>	} <span class=\"hljs-keyword\">else</span> {<br>		reject(error)<br>	}<br>})</code></pre><p><h4>Promise 构造函数接受一个函数作为参数，函数的参数为resolve，和reject两个函数。</h4>resolve函数将状态从未完成变为成功<br>reject 将函数从未完成变为失败<br>resolve、reject传递回调函数的参数</p><h4>Promise 实例生成以后，可以用then方法分别指定resolve状态和rejected状态的回调函数<br>Promise.all 方法用于将多个Promise实例，包装成一个新的Promise实例</h4><pre><code class=\"hljs javascript\"><span class=\"hljs-keyword\">const</span> p = <span class=\"hljs-built_in\">Promise</span>.all([p1, p2, p3])</code></pre><p>当p1、p2、p3都fulfilled时，此时将p1/p2/p3返回值组成一个数组返回<br>当有一个被rejected时，p的状态就为rejected，将第一个被reject的实例的返回值，传递给p的回调函数<br>Promise.race 当 p1p2p3中有一个状态变成fulfilled的时候，将resolve返回值返回<br>reject同all<br>Promise.resolve 将现有对象转为Promise对象</p><pre><code class=\"hljs javascript\"><span class=\"hljs-keyword\">const</span> jsPromise = <span class=\"hljs-built_in\">Promise</span>.resolve($.ajax(<span class=\"hljs-string\">\'/whatever.json\'</span>))</code></pre><p><br></p>', 'article', '5', '2018-08-24 11:36:44', '38', null, 'promise 对象 是一个构造函数，用', '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题asdf', '<p>asdf</p>', 'article', '1', '2018-08-24 17:24:08', '39', null, 'asdf', '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题asdf', '<p>asdfasdf</p>', 'article', '1', '2018-08-24 17:25:40', '40', null, 'asdfasdf', '0', '0');
INSERT INTO `article` VALUES (null, '1', '无标题', '<p>asdfasdf</p>', 'article', '1', '2018-08-24 17:26:10', '41', null, 'asdfasdf', '0', '0');

-- ----------------------------
-- Table structure for fans
-- ----------------------------
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fans
-- ----------------------------

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL COMMENT '关注关系表',
  `followedUser` int(10) unsigned NOT NULL,
  `status` smallint(6) NOT NULL,
  `createTime` int(10) unsigned NOT NULL,
  `modifyTime` int(10) unsigned NOT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of follow
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `articleNum` smallint(6) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('6', 'leewr', '1', 'leewr', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '1111');
INSERT INTO `user` VALUES ('32', 'admin1', '4', 'admin1', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '');
INSERT INTO `user` VALUES ('0', 'admin', '3', 'admin', '123456', '1', '');
INSERT INTO `user` VALUES ('1', 'leewr1', '5', 'leewr1', '$2a$10$PKD/rRiOvEOV6QXLnXV3S.17YgALFLw.Z23KVz3Vul.xNWjFQECCK', '1', '');
