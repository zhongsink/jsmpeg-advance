# 基于ffmpeg/jsmpeg 树莓派 实时监控

原理：
- stearm -> ffmpeg -> nodejs -> websocket -> html5

### 环境

- 树莓派 raspberry / 摄像头
- ffmpeg
- nodejs


## 使用

### 安装nodejs (arm 版)

nodejs 官网已经提供了 armv7 平台的安装包。
```
wget https://npm.taobao.org/mirrors/node/v6.9.0/node-v6.9.0-linux-armv7l.tar.gz
tar zxvf node-v6.9.0-linux-armv7l.tar.gz
mv node-v6.9.0-linux-armv7l.tar.gz /usr/local
```
将node的bin目录添加至环境变量，直接将这句话加到 /etc/profile 里面。
```
export PATH="/usr/local/node-v6.9.0-linux-armv7l/bin:$PATH"
```
### 安装ffmepeg

```
wget https://www.ffmpeg.org/releases/ffmpeg-3.2.2.tar.gz
tar zxvf ffmpeg-3.2.2.tar.gz
cd ffmpeg-3.2.2
./configure --enable-shared --disable-yasm --prefix=/usr/local/ffmpeg
make && make install
```
### 安装 jsmpeg-advance
```
git clone git@github.com:zhongsink/jsmpeg-advance.git
```
安装依赖 npm install -g ws

## 搭建：
```
cd jsmepeg
node websocket-relay.js supersecret
```

```
cd /usr/local/ffmpeg/bin

sudo ./ffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 -codec:a mp2 -b:a 128k -muxdelay 0.001 http://localhost:8081/supersecret
 ```
 -s 设定分辨率大小， -f 指定格式， -i 指定接口， -b 指定视频流比特率， -r 指定帧率，后面的 url 填上在 websocket-relay.js 设置好的格式。

由于 jsmpeg 中没有写静态服务

- 直接使用 静态服务器。 http-server 

npm install -g http-server
http-server ./jsmpeg

接下来就可以直接访问 http://localhost:8080 获取实时的视频了,同局域网也可访问
 
### 自定制

我添加了对实时视频的一点简单处理， 可以获取到视频的截图,简单实现motion
详见 index.html










