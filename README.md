# node_part2

#全局对象    1234   （1）:process  (2)：__dirname __filename (3):module exports require 
            (4):setTimeout setInterval clearTimeout clearInterval

#npm基础知识

semver版本规范：X.Y.Z
  X主版本号(major):当你做了不兼容的API修改(可能不兼容之前的版本)
  Y次版本号(minor):当你做了向下兼容的功能性新增(新功能增加，当时兼容之前的版本)
  Z修订号(patch):当你做了向下兼容的问题修正(没有新功能，修复了之前版本的bug)
^和~的区别:
^x.y.z:表示x是保持不变的，y和z永远安装最新的版本
~x.y.z:表示x和y保持不变，z永远安装最新的版本

#发布npm包
 1、npm login luoyong21 1506885092@qq.com
 2、npm publish
