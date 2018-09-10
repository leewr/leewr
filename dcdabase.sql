/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : dcdabase

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-09-10 19:19:10
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
  `likeNum` smallint(9) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('2018-04-26 14:58:23', '0', '122345', '啊啊啊asd1', 'article', '4', '2018-08-19 22:40:17', '1', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '111111', '1', 'article', '4', '2018-08-19 22:40:17', '2', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '10', 'anewtitle', '111', 'article', '4', '2018-08-19 22:40:17', '3', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'anewtitle11', 'anewtitle11anewtitle11anewtitle11anewtitle11', 'article', '4', '2018-08-19 22:40:17', '4', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111111', '111111111', 'article', '4', '2018-08-19 22:40:17', '5', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111111', '1111111111111', 'article', '4', '2018-08-19 22:40:17', '6', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12234522', '2222222', 'article', '4', '2018-08-19 22:40:17', '7', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12234522', '22222221111', 'article', '4', '2018-08-19 22:40:17', '8', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111111', '121212', 'article', '4', '2018-08-19 22:40:17', '9', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '111111111111', '12121211', 'article', '4', '2018-08-19 22:40:17', '10', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12啊手动阀沙发党', '阿斯顿发生', 'article', '4', '2018-08-19 22:40:17', '11', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-04-26 14:40:46', '0', '12啊手动阀沙发党1', '再次更新啊update阿斯顿发生', 'article', '4', '2018-08-19 22:40:17', '12', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-04-26 14:41:03', '0', '阿斯蒂芬是', 'update阿斯顿发生试时', 'article', '4', '2018-08-19 22:40:17', '13', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1阿斯蒂芬', '阿斯蒂芬', 'article', '4', '2018-08-19 22:40:17', '14', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'asdfasdf', '111111', 'article', '4', '2018-08-19 22:40:17', '15', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'asdfasdf111', '111111', 'article', '4', '2018-08-19 22:40:17', '16', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '1111111', '1111', 'article', '4', '2018-08-19 22:40:17', '17', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12e1213easv', 'zxcvzxcvzxvc', 'article', '4', '2018-08-19 22:40:17', '18', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', 'asaasasas', 'asasas', 'article', '4', '2018-08-19 22:40:17', '19', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12123', '12312312', 'article', '4', '2018-08-19 22:40:17', '20', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '12222222', '12121221', 'article', '4', '2018-08-19 22:40:17', '21', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题1111', '111', 'article', '4', '2018-08-19 22:40:17', '22', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题aa', '11111111111', 'article', '4', '2018-08-19 22:40:17', '23', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题aa', '11111111111', 'article', '4', '2018-08-19 22:40:17', '24', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '0', '无标题24', '24', 'article', '4', '2018-08-19 22:40:17', '25', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-09-09 11:34:12', '10', '友情链接', '<p><a href=\"https://hecang.net\" target=\"_blank\">何仓博客</a></p>', 'article', '4', '2018-08-19 22:40:17', '26', null, '何仓博客', '0', '0');
INSERT INTO `article` VALUES ('2018-09-09 11:32:15', '9', '锐度帮助', '<h3>1、如何使用</h3><h3>2、登录</h3><h3>3、注册</h3><h3>4、写文章</h3><h3>5、阅读</h3>', 'article', '4', '2018-08-19 22:40:17', '27', null, '1、如何使用2、登录3、注册4、写文章5', '0', '0');
INSERT INTO `article` VALUES ('2018-09-09 10:58:56', '13', '成长记忆', '<h3>项目为何开始</h3><p>年初换了一个城市生活，为了实践自己的技术栈而开始项目，初步想法node后端react手机端、安卓原生客户端、react native ios端。实践各种技术栈。</p><h3>项目记录</h3><p>2018-04-16第一次提交代码，采用node egg.js后端框架搭建、mysql数据存储，在完成基础框架搭建后中断。</p><p>2018-08-17为了实践react技术，添加移动端页面，采用react技术栈。</p><p>2018-08-30完成用户设置功能后，产品基本框架搭建完毕。</p><p>2018-09-09完成网页版基础功能，包括注册、登录、文章编辑、发布、查看、用户关注、喜欢等功能。写下成长记忆文章topic28。</p>', 'article', '4', '2018-08-19 22:40:17', '28', null, '项目为何开始年初换了一个城市生活，为了实', '0', '0');
INSERT INTO `article` VALUES ('2018-09-09 11:41:41', '33', '关于我们', '<h4>锐度，一场关于自我成长、自我阅读的实验田。</h4><h5>2018-09-09 文润</h5>', 'article', '4', '2018-08-19 22:40:17', '29', null, '锐度，一场关于自我成长、自我阅读的实验田', '0', '0');
INSERT INTO `article` VALUES ('2018-08-21 16:34:35', '37', 'API 设计思考题', '<blockquote>参考文档：<a href=\"https://www.yuque.com/kiwi/ios/swift-api-design\" target=\"_blank\">[译] 官方 Swift API 设计规范</a></blockquote><p>1.说明下面两个方法为什么第一个声明了参数标签 at，第二个方法缺省了。</p><pre><code class=\"hljs php\"><ul><li><div>extension <span class=\"hljs-keyword\">List</span> {\r\n</div></li><li><div>  <span class=\"hljs-keyword\">public</span> mutating func remove(at position: Index) -&gt; Element\r\n</div></li><li><div>  <span class=\"hljs-keyword\">public</span> mutating func remove(_ member: Element) -&gt; Element?\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>2.下面两种声明方式哪一个是正确的，说明原因。</p><pre><code class=\"hljs javascript\"><ul><li><div>func add(_ observer: NSObject, <span class=\"hljs-keyword\">for</span> keyPath: <span class=\"hljs-built_in\">String</span>)\r\n</div></li><li><div>func addObserver(_ observer: NSObject, forKeyPath path: <span class=\"hljs-built_in\">String</span>)\r\n</div></li></ul></code></pre><p>3.下面哪一种声明方式更好，说明原因。</p><pre><code class=\"hljs css\"><ul><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.subViews</span>(<span class=\"hljs-selector-tag\">havingColor</span>: <span class=\"hljs-selector-tag\">y</span>)\r\n</div></li><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.subViews</span>(<span class=\"hljs-selector-tag\">color</span>: <span class=\"hljs-selector-tag\">y</span>)\r\n</div></li></ul></code></pre><p>4.下面哪一种声明方式更好，说明原因。</p><pre><code class=\"hljs javascript\"><ul><li><div><span class=\"hljs-keyword\">let</span> foreground = Color(red: <span class=\"hljs-number\">32</span>, <span class=\"hljs-attr\">green</span>: <span class=\"hljs-number\">64</span>, <span class=\"hljs-attr\">blue</span>: <span class=\"hljs-number\">128</span>)\r\n</div></li><li><div><span class=\"hljs-keyword\">let</span> foreground = Color(havingRGBValuesRed: <span class=\"hljs-number\">32</span>, <span class=\"hljs-attr\">green</span>: <span class=\"hljs-number\">64</span>, <span class=\"hljs-attr\">andBlue</span>: <span class=\"hljs-number\">128</span>)\r\n</div></li></ul></code></pre><p>5.下面两个方法有什么区别？</p><pre><code class=\"hljs css\"><ul><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.sort</span>()\r\n</div></li><li><div><span class=\"hljs-selector-tag\">x</span><span class=\"hljs-selector-class\">.sorted</span>()\r\n</div></li></ul></code></pre><p>6.<code>Protocol</code>&nbsp;有什么命名规则？<br>7.什么情况可以声明全局函数？<br>8.下面这样声明的方法缺省了第一个参数标签有什么原因？</p><pre><code class=\"hljs coffeescript\"><ul><li><div>extension Shape {\r\n</div></li><li><div>  <span class=\"hljs-regexp\">/// Returns `true` iff `other` is within the area of `self`.\r\n</span></div></li><li><div><span class=\"hljs-regexp\">  func contains(_ other: Point) -&gt; Bool { ... }\r\n</span></div></li><li><div><span class=\"hljs-regexp\">\r\n</span></div></li><li><div><span class=\"hljs-regexp\">  ///</span> Returns `<span class=\"javascript\"><span class=\"hljs-literal\">true</span></span>` iff `<span class=\"javascript\">other</span>` <span class=\"hljs-keyword\">is</span> entirely within the area <span class=\"hljs-keyword\">of</span> `<span class=\"javascript\">self</span>`.\r\n</div></li><li><div>  func contains(_ other: Shape) -&gt; Bool { ... }\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>9.下面这样声明会带来什么问题？</p><pre><code class=\"hljs java\"><ul><li><div>extension Box {\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// Returns the `Int` stored in `self`, if any, and</span>\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// `nil` otherwise.</span>\r\n</div></li><li><div>  <span class=\"hljs-function\">func <span class=\"hljs-title\">value</span><span class=\"hljs-params\">()</span> -&gt; Int? </span>{ ... }\r\n</div></li><li><div>\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// Returns the `String` stored in `self`, if any, and</span>\r\n</div></li><li><div>  <span class=\"hljs-comment\">/// `nil` otherwise.</span>\r\n</div></li><li><div>  <span class=\"hljs-function\">func <span class=\"hljs-title\">value</span><span class=\"hljs-params\">()</span> -&gt; String? </span>{ ... }\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>10.下面的参数名称哪一个比较好？</p><pre><code class=\"hljs coffeescript\"><ul><li><div>func filter(_ predicate: <span class=\"hljs-function\"><span class=\"hljs-params\">(Element)</span> -&gt;</span> Bool) -&gt; [Generator.Element]\r\n</div></li><li><div>func filter(_ includedInResult: <span class=\"hljs-function\"><span class=\"hljs-params\">(Element)</span> -&gt;</span> Bool) -&gt; [Generator.Element]\r\n</div></li></ul></code></pre><p>11.下面声明错误的地方在哪里？</p><pre><code class=\"hljs javascript\"><ul><li><div>extension <span class=\"hljs-built_in\">String</span> {\r\n</div></li><li><div><span class=\"hljs-comment\">/// ...description...</span>\r\n</div></li><li><div>    public func compare(_ options: CompareOptions = [], <span class=\"hljs-attr\">other</span>: <span class=\"hljs-built_in\">String</span>, <span class=\"hljs-attr\">range</span>: Range? = nil, <span class=\"hljs-attr\">locale</span>: Locale? = nil\r\n</div></li><li><div>    ) -&gt; Ordering\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>12.下面的函数为什么不需要声明参数标签？</p><pre><code class=\"hljs\"><ul><li><div>min(number1, number2)\r\n</div></li><li><div>zip(sequence1, sequence2)\r\n</div></li></ul></code></pre><p>13.下面两个初始化方法为什么一个有参数标签，一个没有？</p><pre><code class=\"hljs objectivec\"><ul><li><div>extension <span class=\"hljs-built_in\">UInt32</span> {\r\n</div></li><li><div><span class=\"hljs-comment\">/// Creates an instance having the specified value.</span>\r\n</div></li><li><div>init(_ value: Int16)           \r\n</div></li><li><div><span class=\"hljs-comment\">/// Creates an instance having the lowest 32 bits of source.</span>\r\n</div></li><li><div>init(truncating source: <span class=\"hljs-built_in\">UInt64</span>) \r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>14.下面两个方法的声明哪一个比较好？</p><pre><code class=\"hljs javascript\"><ul><li><div><span class=\"hljs-comment\">// a 移动到某个点上</span>\r\n</div></li><li><div>a.move(toX: b, <span class=\"hljs-attr\">y</span>: c)\r\n</div></li><li><div>a.moveTo(x: b, <span class=\"hljs-attr\">y</span>: c)\r\n</div></li></ul></code></pre><p>15.下面两个方法的声明哪一个比较好？</p><pre><code class=\"hljs objectivec\"><ul><li><div>extension <span class=\"hljs-built_in\">UIView</span> {\r\n</div></li><li><div>    func addSubview(_ view: <span class=\"hljs-built_in\">UIView</span>)\r\n</div></li><li><div>    func add(subview: <span class=\"hljs-built_in\">UIView</span>)\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>16.下面的声明可能引发什么问题？</p><pre><code class=\"hljs cs\"><ul><li><div><span class=\"hljs-keyword\">struct</span> Array {\r\n</div></li><li><div>  <span class=\"hljs-comment\"><span class=\"hljs-doctag\">///</span> Inserts `newElement` at `self.endIndex`.</span>\r\n</div></li><li><div>  <span class=\"hljs-function\"><span class=\"hljs-keyword\">public</span> mutating func <span class=\"hljs-title\">append</span>(<span class=\"hljs-params\">_ newElement: Element</span>)\r\n</span></div></li><li><div><span class=\"hljs-function\">\r\n</span></div></li><li><div><span class=\"hljs-function\">  <span class=\"hljs-comment\">/// Inserts the contents of `newElements`, in order, at</span>\r\n</span></div></li><li><div><span class=\"hljs-function\">  <span class=\"hljs-comment\">/// `self.endIndex`.</span>\r\n</span></div></li><li><div><span class=\"hljs-function\">  <span class=\"hljs-keyword\">public</span> mutating func <span class=\"hljs-title\">append</span>(<span class=\"hljs-params\">_ newElements: S</span>)\r\n</span></div></li><li><div><span class=\"hljs-function\">    <span class=\"hljs-keyword\">where</span> S.Generator.Element </span>== Element\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><p>17.下面哪一个命名是正确的：</p><pre><code class=\"hljs cs\"><ul><li><div>下面哪一个命名是正确的：\r\n</div></li><li><div><span class=\"hljs-keyword\">struct</span> Model {\r\n</div></li><li><div>    <span class=\"hljs-keyword\">var</span> sourceURL: URL\r\n</div></li><li><div>    <span class=\"hljs-keyword\">var</span> sourceUrl: URL\r\n</div></li><li><div>}\r\n</div></li></ul></code></pre><h2 id=\"section\">综合题</h2><ul><li>什么时候方法、函数的第一个参数缺省参数标签？</li></ul>', 'article', '4', '2018-08-19 22:40:17', '30', null, '参考文档：[译] 官方 Swift AP', '0', '0');
INSERT INTO `article` VALUES ('2018-08-19 17:21:34', '0', '年华', 'C先生直接被调离单位了。 一根毛发就能轻易暴露出孩子的血缘。他走的时候，正看到她正与几个同事在说笑，笑起来时，已看到眼角鱼尾纹了。记得第一次与她上床，他笑说，你让W白掏了这么年抚养费，你亏心不。而就在刚才，她走过来提醒他道，每月的抚养费，不要忘了哦。', 'article', '4', '2018-08-19 22:40:17', '31', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '5', '编辑器发布文章测试', '<h4>1、在线编辑，实时保存</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;在线编辑，告别繁重的office软件；实时保存，不用担心编辑丢失。</p><h4>2、将文档分享给好友</h4><p>点击分享，将文档链接发送给好友。</p><p><br></p>', 'article', '4', '2018-08-19 22:40:17', '32', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '14', '新用户文章', '<p>顶顶顶顶顶</p>', 'article', '1', '2018-08-19 22:40:17', '33', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '2', '阿斯顿发', '<p>时尚时尚暗室逢灯</p>', 'article', '1', '2018-08-19 22:51:21', '34', null, null, '0', '0');
INSERT INTO `article` VALUES (null, '49', '阿斯顿发哎哎', '<p>阿斯顿发</p>', 'article', '1', '2018-08-19 22:52:40', '35', null, null, '0', '1');
INSERT INTO `article` VALUES (null, '4', 'summary', '<p>添加summary文章测试</p>', 'article', '1', '2018-08-19 22:57:56', '36', null, null, '0', '0');
INSERT INTO `article` VALUES ('2018-08-24 17:13:11', '84', '无标题读取内容AA1111啊   阿什顿发', '<p>需要注意的是：<strong>从编辑器中获取的 html 代码是不包含任何样式的纯 html</strong>，如果显示的时候需要对其中的<code>&lt;table&gt;</code><code>&lt;code&gt;</code><code>&lt;blockquote&gt;</code>等标签进行自定义样式（这样既可实现多皮肤功能），下面提供了编辑器中使用的样式供参考\r\n\r\n</p><p><br></p><p>asdfasdf</p>', 'article', '1', '2018-08-19 22:59:08', '37', null, '需要注意的是：从编辑器中获取的 html', '0', '1');
INSERT INTO `article` VALUES ('2018-08-24 11:51:07', '9', 'Promise', '<h4>promise 对象 是一个构造函数，用来生成promise实例</h4><pre><code class=\"hljs javascript\"><span class=\"hljs-keyword\">const</span> promise = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">resolve, reject</span>) </span>{<br>	<span class=\"hljs-keyword\">if</span> (<span class=\"hljs-comment\">/* success */</span>) {<br>		resolve(value)<br>	} <span class=\"hljs-keyword\">else</span> {<br>		reject(error)<br>	}<br>})</code></pre><p><h4>Promise 构造函数接受一个函数作为参数，函数的参数为resolve，和reject两个函数。</h4>resolve函数将状态从未完成变为成功<br>reject 将函数从未完成变为失败<br>resolve、reject传递回调函数的参数</p><h4>Promise 实例生成以后，可以用then方法分别指定resolve状态和rejected状态的回调函数<br>Promise.all 方法用于将多个Promise实例，包装成一个新的Promise实例</h4><pre><code class=\"hljs javascript\"><span class=\"hljs-keyword\">const</span> p = <span class=\"hljs-built_in\">Promise</span>.all([p1, p2, p3])</code></pre><p>当p1、p2、p3都fulfilled时，此时将p1/p2/p3返回值组成一个数组返回<br>当有一个被rejected时，p的状态就为rejected，将第一个被reject的实例的返回值，传递给p的回调函数<br>Promise.race 当 p1p2p3中有一个状态变成fulfilled的时候，将resolve返回值返回<br>reject同all<br>Promise.resolve 将现有对象转为Promise对象</p><pre><code class=\"hljs javascript\"><span class=\"hljs-keyword\">const</span> jsPromise = <span class=\"hljs-built_in\">Promise</span>.resolve($.ajax(<span class=\"hljs-string\">\'/whatever.json\'</span>))</code></pre><p><br></p>', 'article', '5', '2018-08-24 11:36:44', '38', null, 'promise 对象 是一个构造函数，用', '0', '0');
INSERT INTO `article` VALUES (null, '3', '无标题asdf', '<p>asdf</p>', 'article', '1', '2018-08-24 17:24:08', '39', null, 'asdf', '0', '0');
INSERT INTO `article` VALUES (null, '5', '无标题asdf', '<p>asdfasdf</p>', 'article', '1', '2018-08-24 17:25:40', '40', null, 'asdfasdf', '0', '1');
INSERT INTO `article` VALUES ('2018-09-01 12:10:55', '10', '出路', '<p>“真正的出路不在于要离开哪里，而是在于我们的内心是否对自身所处的这个文化有觉察和反省，并做出不一样的选择。”&nbsp;\r\n\r\n</p>', 'article', '1', '2018-08-24 17:26:10', '41', null, '“真正的出路不在于要离开哪里，而是在于我', '0', '0');
INSERT INTO `article` VALUES ('2018-08-28 15:08:32', '252', '重读经典，终将面对不期而遇的变化', '<div><div><p>01<br></p><p>再次拾起《谁动了我的奶酪》，我依然坐在飞逝的列车上，看着窗外飞速变换的风景，也许在冥冥中昭示着即将到来的改变。<br></p><p>这个风靡全球的故事，早已在大家心中留下了深深的印记，但重读起来，依然那样引人入胜。<br></p><p>故事从很久以前，遥远的地方展开，两只叫嗅嗅和匆匆的小老鼠，与两个叫哼哼和唧唧的小矮人住在一起，过着寻找奶酪、享受乐趣的生活。<br></p><p>有一天，他们找到了一个很大的奶酪站，小老鼠依然保持着一贯的状态；而小矮人却一天天开始享受、架构、习惯这样的生活，直到认为本该如此，也该一直如此。<br></p><p>直到有一天，奶酪站的奶酪没了，精彩便由此展开。<br></p><p>发现变化的小老鼠，问题和答案同样简单，取下挂在脖子上的跑鞋，穿上鞋子，系好鞋带，出发寻找新的奶酪。<br></p><p>而发现变化的小矮人，愤怒、咆哮、痛苦、挫败、逃避而不愿意面对现实，于是选择了被动的等待。<br></p><p>直到等了很久，发现到底等不到了，唧唧决定重返迷宫寻找奶酪，而哼哼依然如故。<br></p><p>重返迷宫是艰难的，最大的艰难却不是来自身体，而是内心的压力。<br></p><p>但毕竟迈出了这一步，最终唧唧也找到了新的更好的更大的奶酪站，并把图中的感悟写到了墙上，鼓励自己、启迪哼哼。<br></p><p>02<br></p><p>故事简单直接，道理也不复杂，却揭示了如何面对变化的有效武器。<br></p><p>面对变化的主题是人，而不是其他什么动物。倘若是老鼠，倒也简单，只能因变而变。但恰恰是人，作为一个复杂的组合体，都有其简单的一面和复杂的一面，才变得复杂而纠结。<br></p><p>有时候，我们像及时发现变化的嗅嗅；有时候，我们又像立即采取行动的匆匆；但大多数时候，我们更像抵制变化的哼哼和最终适应变化的唧唧。<br></p><p>但，无论我们像谁，那都是我们自己，又都不是我们自己，我们就是一个复杂的组合体，复杂到我们自己也搞不懂自己。<br></p><p>但，变化总是不期而遇，无论你愿不愿意，奶酪总会被人拿走，无论主动还是被动，最终总要面对。这时候，我们更需要的是如何面对变化的方法论。<br></p><p>03<br></p><p>也许你已经猜到了，这套方法论正是写在奶酪墙上的话。<br></p><p>①保持平常心，变化总会发生，正如一个地方的奶酪总会消失的，无论是变质了、吃光了，还是被人拿走了。<br></p><p>②学会预测变化，经常看一看、查一查、嗅一嗅，做好随时失去奶酪的准备。<br></p><p>③正确面对变化，发生了就是发生了，可以埋怨，可以愤怒，但不能一直埋怨、一直愤怒。<br></p><p>④迅速适应变化，越早放弃旧的奶酪，便越早可能享受新的奶酪。<br></p><p>⑤尽情享受变化，感受一路寻找的风景，感受新奶酪带来的美味。<br></p><p>当然，变化永远没有终结，当享受新的奶酪之时，新的变化正悄悄而来。<br></p><p>04<br></p><p>道理似乎简单到不值一提，套路似乎简单到不堪一击，但从来都是知易行难。<br></p><p>当我们真正面对变化的奶酪时，我们并不一定比两个小老鼠表现的出色，甚至连不肯面对变化的哼哼都不如。<br></p><p>正如故事中的唧唧一般，从否认变化，到决定面对变化，再到最终适应变化并享受变化，是经历了相当艰难的心理历程，往往心中滋生的恐惧比现实的情况更加麻烦。<br></p><p>在这中间，还有两个法宝。<b>一个是不停的构建愿景，想象变化之后的种种美好，越具体、越详细、越色彩斑斓越好。另一个是不断的自我解嘲，越是嘲笑自己的愚蠢，越能对自己的过去释然，越能更好的向着新方向前进。</b><br></p><p>当然，也许像小老鼠一样，不管三七二十一，迈出第一步再说；但，我们毕竟不是老鼠，我们的奶酪如果是爱情、事业、甚至是人生的话，我们也不得不十分慎重。<br></p><p>又当然，如果我们能够不仅仅做一个变化的适应者，而成为变化的引领者，甚至是设计者的话，那所有的变化都将是美好的历程。</p></div><br><br>作者：王梦凡<br>链接：https://www.jianshu.com/p/75092390f7c0<br>來源：简书<br>简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。</div>', 'article', '1', '2018-08-27 19:35:31', '42', null, '01再次拾起《谁动了我的奶酪》，我依然坐', '1', '2');

-- ----------------------------
-- Table structure for category
-- ----------------------------
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

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '家用电器', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('2', '家用电器', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('3', '电脑、办公', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('4', '大家电', '1', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('5', '生活电器', '1', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('6', '平板电视', '3', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('7', '空调', '3', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('8', '电风扇', '4', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('9', '电脑整机', '2', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('10', '电脑配件', '2', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('11', '笔记本', '9', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('12', '超级本', '9', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('13', '游戏本', '9', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('14', 'CPU', '10', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `category` VALUES ('15', '主机', '10', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `authorName` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  `articleId` int(11) NOT NULL,
  `content` varchar(255) NOT NULL DEFAULT '',
  `thumbs` int(11) NOT NULL DEFAULT '0',
  `replyId` int(11) NOT NULL DEFAULT '0',
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '1100000111', 'admin1', '4', '42', '新增一条评论', '0', '0', '2018-09-10 16:45:07', '2018-09-10 16:45:07');
INSERT INTO `comment` VALUES ('2', '1001001001', '', '4', '42', '新增第二条评论', '0', '0', '2018-09-10 17:25:23', '2018-09-10 17:25:23');
INSERT INTO `comment` VALUES ('3', '101001001', 'admin1', '4', '42', '去11 ', '0', '0', '2018-09-10 17:36:17', '2018-09-10 17:36:17');
INSERT INTO `comment` VALUES ('4', '10010001', 'admin1', '4', '42', '阿什顿发', '0', '0', '2018-09-10 17:37:36', '2018-09-10 17:37:36');
INSERT INTO `comment` VALUES ('5', '1001001101', 'admin1', '4', '42', '阿什顿发洒洒水', '0', '0', '2018-09-10 17:37:42', '2018-09-10 17:37:42');
INSERT INTO `comment` VALUES ('6', '1101000001', 'admin1', '4', '42', '少时诵诗书', '0', '0', '2018-09-10 17:37:46', '2018-09-10 17:37:46');
INSERT INTO `comment` VALUES ('7', '1000111111', 'admin1', '4', '42', '少时诵诗书洒洒水', '0', '0', '2018-09-10 17:37:49', '2018-09-10 17:37:49');
INSERT INTO `comment` VALUES ('8', '1110100001', 'admin1', '4', '42', '少时诵诗书洒洒水1111', '0', '0', '2018-09-10 17:37:52', '2018-09-10 17:37:52');
INSERT INTO `comment` VALUES ('9', '1011101110', 'admin1', '4', '42', '1111少时诵诗书洒洒水1111', '0', '0', '2018-09-10 17:37:55', '2018-09-10 17:37:55');
INSERT INTO `comment` VALUES ('10', '1110110000', 'admin1', '4', '42', '1111少时1诵诗书洒洒水1111', '0', '0', '2018-09-10 17:37:57', '2018-09-10 17:37:57');
INSERT INTO `comment` VALUES ('11', '101001100', 'admin1', '4', '42', '111111', '0', '0', '2018-09-10 17:38:05', '2018-09-10 17:38:05');

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
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fans
-- ----------------------------
INSERT INTO `fans` VALUES ('1', '5', '1', '1', '2018', '2018');
INSERT INTO `fans` VALUES ('2', '4', '1', '0', '2018', '2018');
INSERT INTO `fans` VALUES ('3', '3', '1', '1', '2018', '2018');
INSERT INTO `fans` VALUES ('4', '1', '4', '1', '2018', '2018');
INSERT INTO `fans` VALUES ('5', '2', '4', '1', '2018', '2018');
INSERT INTO `fans` VALUES ('6', '3', '4', '1', '2018', '2018');

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL COMMENT '关注关系表',
  `followedUser` int(10) unsigned NOT NULL,
  `status` smallint(6) NOT NULL,
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES ('1', '5', '1', '1', '2018-08-27 14:23:51', '2018-08-27 15:35:54');
INSERT INTO `follow` VALUES ('2', '5', '2', '1', '2018-08-27 14:23:51', '2018-08-27 14:23:51');
INSERT INTO `follow` VALUES ('3', '5', '3', '1', '2018-08-27 14:27:21', '2018-08-27 14:27:21');
INSERT INTO `follow` VALUES ('4', '5', '4', '1', '2018-08-27 14:32:39', '2018-08-27 14:32:39');
INSERT INTO `follow` VALUES ('5', '5', '6', '1', '2018-08-27 14:35:59', '2018-08-27 14:35:59');
INSERT INTO `follow` VALUES ('6', '4', '1', '0', '2018-08-27 14:38:29', '2018-08-27 15:45:02');
INSERT INTO `follow` VALUES ('7', '3', '1', '1', '2018-08-27 15:45:53', '2018-08-27 16:11:15');
INSERT INTO `follow` VALUES ('8', '1', '4', '1', '2018-08-27 16:44:47', '2018-09-09 23:49:38');
INSERT INTO `follow` VALUES ('9', '2', '4', '1', '2018-08-27 17:16:40', '2018-08-27 17:33:27');
INSERT INTO `follow` VALUES ('10', '3', '4', '1', '2018-08-27 17:46:02', '2018-08-27 17:46:02');
INSERT INTO `follow` VALUES ('11', '1', '5', '1', '2018-08-29 21:53:22', '2018-08-29 22:01:53');

-- ----------------------------
-- Table structure for thumbs
-- ----------------------------
DROP TABLE IF EXISTS `thumbs`;
CREATE TABLE `thumbs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `createTime` datetime NOT NULL,
  `modifyTime` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thumbs
-- ----------------------------
INSERT INTO `thumbs` VALUES ('1', '3', '1', '0000-00-00 00:00:00', '2018-09-02 21:41:27', '0');
INSERT INTO `thumbs` VALUES ('2', '33', '1', '2018-08-28 20:19:39', '2018-09-02 21:43:50', '0');
INSERT INTO `thumbs` VALUES ('3', '37', '1', '2018-08-28 20:22:02', '2018-08-28 20:22:02', '1');
INSERT INTO `thumbs` VALUES ('4', '40', '1', '2018-08-29 21:46:37', '2018-08-29 21:46:37', '1');
INSERT INTO `thumbs` VALUES ('5', '42', '4', '2018-08-29 21:47:29', '2018-08-30 00:03:26', '1');
INSERT INTO `thumbs` VALUES ('6', '42', '5', '2018-08-29 21:48:03', '2018-08-29 21:48:03', '1');
INSERT INTO `thumbs` VALUES ('7', '37', '5', '2018-08-29 21:50:34', '2018-08-29 21:52:59', '0');
INSERT INTO `thumbs` VALUES ('8', '35', '4', '2018-09-02 21:30:31', '2018-09-02 21:30:31', '1');

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

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('7', 'leewr', '1', 'leewr', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '/public/temp/231230302233.png', '0', '2', '5', '0', '121657771@qq.com', '1', 'http://leewr.com', '前端程序员移民');
INSERT INTO `user` VALUES ('32', 'admin1', '4', 'admin1', '$2a$10$TfBbLxUZf4brbZNmBFrZv.vhf0PmcnXKlUkNbAWREtacV1EEYmZp6', '1', '/public/temp/311022001111.jpg', '3', '0', '0', '0', '121657771@qq.com', '0', 'http://leewr.com', '前端工程师移民单独');
INSERT INTO `user` VALUES ('0', 'admin', '3', 'admin', '123456', '1', '', '0', '1', '0', '0', '', '', '', '');
INSERT INTO `user` VALUES ('1', 'leewr1', '5', 'leewr1', '$2a$10$PKD/rRiOvEOV6QXLnXV3S.17YgALFLw.Z23KVz3Vul.xNWjFQECCK', '1', '', '1', '0', '0', '0', '', '', '', '');
