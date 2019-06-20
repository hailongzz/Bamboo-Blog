Linux
一、有的是后在npm install 的时候会遇到很多问题 其中最多的就是 Error: EACCES: permission denied
找了很多有有麻烦的也有下面这种比较有效而且最为快捷简单的
1，也是我试了一遍就有效的方法
 Linux :  npm install install --unsafe-perm   mac加上 sudo
2, 给当前目录增加777权限
  mac :   sudo chmod -R 777 .
3， 流传的方法 一般上面两个就够使了
mac:  sudo npm install --unsafe-perm --allow-root  

二 、 nodemon 安装完成后线上配置
    {
    "restartable": "rs",
    "ignore": [  忽略文件
      ".git",
      "node_modules/**/node_modules"
    ],
    "verbose": true,
    "execMap": {
      "js": "node --harmony"
    },
    "events": {
        "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
    },
    "watch": [
        "server" //监听文件
      ],
    "env": {
        "NODE_ENV": "development" //环境
    },
    "ext": "js,json" //文件格式
  }
    然后配置 package.json里的script

3   mongodb 配置  
