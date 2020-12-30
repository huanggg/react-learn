不同项目之间的通信方式分为，http、socket、webservice；其中socket通信的效率最高，youtube就采用的是原始的socket通信，他们信奉的原则是简单有效。
一、http通信：
    Http通信主要有两种方式POST方式和GET方式。前者通过Http消息实体发送数据给服务器，安全性高，数据传输大小没有限制，后者通过URL的查询字符串传递给服务器参数，以明文显示在浏览器地址栏，保密性差，最多传输2048个字符。但是GET请求并不是一无是处——GET请求大多用于查询（读取资源），效率高。POST请求用于注册、登录等安全性较高且向数据库中写入数据的操作。除了POST和GET，http通信还有其他方式！请参见http请求的方法
编码前的准备
在进行编码之前，我们先创建一个Servlet，该Servlet接收客户端的参数(name和age)，并响应客户端。
 
使用JDK实现http通信
使用URLConnection实现GET请求

实例化一个java.net.URL对象；
通过URL对象的openConnection()方法得到一个java.net.URLConnection;
通过URLConnection对象的getInputStream()方法获得输入流；
读取输入流；
关闭资源。

使用HttpURLConnection实现POST请求

java.net.HttpURLConnection是java.net.URL的子类，提供了更多的关于http的操作（getXXX 和 setXXX方法）。
使用httpclient进行http通信

httpclient大大简化了JDK中http通信的实现。

maven依赖：

org.apache.httpcomponents httpclient 4.3.6
HttpClient是Apache Jakarta Common下的子项目，用来提供高效的、最新的、功能丰富的支持HTTP协议的客户端编程工具包，并且它支持HTTP协议最新的版本和建议。HttpClient已经应用在很多的项目中，比如Apache Jakarta上很著名的另外两个开源项目Cactus和HTMLUnit都使用了HttpClient。
 
二、webservice
应用场景：跨防火墙的通信、应用程序集成、B2B的集成、软件和数据重用
 
三、socket
socket是“open—write/read—close”模式的一种实现
java socket通信已经被封装好了主要使用两个类ServerSocket 和Socket


feign
restTemplate   
