如果你有两个java项目的话，如何向他们之间进行信息的通信

前提：必须知道要通信的java项目（接收请求方）的服务器的IP地址和访问路径。

其实两个java项目之间的通信还是使用HTTP的请求。主要有两种方式：

①使用apache的HttpClient方式。

②使用JDK自带的java.net包下的HttpURLConnection方式。



主要讲解HttpURLConnection方式：

HttpURLConnection传递请求常用的有两种方式：POST和GET方式。使用setRequestMethod()方法设置传递的方式。

①、使用POST的方式传递请求：

第一个应用（发送Http请求的服务端）：

在com.servlet下创建一个Servlet_test1.java文件
package com.servlet;  
  
import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStream;  
import java.io.InputStreamReader;  
import java.io.OutputStreamWriter;  
import java.net.HttpURLConnection;  
import java.net.URL;  
import javax.servlet.ServletException;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
  
public class Servlet_test1 extends HttpServlet {  
  
  
    public void doGet(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        //设置请求的编码方式  
        request.setCharacterEncoding("utf-8");  
        //设置返回时的编码方式  
        response.setContentType("text/html;charset=utf-8");  
        System.out.println("test1");  
        //设置HTTP连接的URL地址，就是第二个应用的URL。如果在同一个计算机上可以将192.168.1.134变成127.0.0.1或者localhost  
        String http="http://192.168.1.134:8080/test2/Setvlet_test2";  
        URL url=new URL(http);  
        //生成HttpURLConnection连接  
        HttpURLConnection httpurlconnection=(HttpURLConnection) url.openConnection();  
        //设置有输出流，默认为false，就是不能传递参数。  
        httpurlconnection.setDoOutput(true);  
        //设置发送请求的方式。注意：一定要大写  
        httpurlconnection.setRequestMethod("POST");  
        //设置连接超时的时间。不过不设置，在网络异常的情况下，可能会造成程序僵死而无法继续向下执行，所以一般设置一个超时时间。单位为毫秒  
        httpurlconnection.setConnectTimeout(30000);  
        //设置输出流。  
        OutputStreamWriter writer=new OutputStreamWriter(httpurlconnection.getOutputStream(), "utf-8");  
        //传递的参数，中间使用&符号分割。  
        writer.write("username=123&password=456");  
        //用于刷新缓冲流。因为默认她会写入到内存的缓冲流中，到一定的数据量时，才会写入，使用这个命令可以让他立即写入，不然下面就到关闭流了  
        writer.flush();  
        //用于关闭输出流，关闭之后就不可以输出数据了，所以要使用flush刷新缓冲流  
        writer.close();  
        //获得返回的请求吗。  
        int responseCode=httpurlconnection.getResponseCode();  
        //表示请求成功  
        if(responseCode==HttpURLConnection.HTTP_OK){  
            System.out.println("OK"+responseCode);  
            //获得服务端的输出流。得到返回的数据  
            InputStream urlstream=httpurlconnection.getInputStream();  
            BufferedReader reader=new BufferedReader(new InputStreamReader(urlstream));  
            String line;  
            String tline="";  
            while((line=reader.readLine())!=null){  
                tline+=line;  
            }  
            //输出所有的数据  
            System.out.println(tline);  
        }else{  
            System.out.println("ERR"+responseCode);  
        }  
          
          
    }  
      
    public void doPost(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        this.doGet(request, response);  
    }  
  
}  

在test1项目中的web.xml文件中的配置servlet：

<servlet>  
   <servlet-name>Servlet_test1</servlet-name>  
   <servlet-class>com.servlet.Servlet_test1</servlet-class>  
 </servlet>  
  
 <servlet-mapping>  
   <servlet-name>Servlet_test1</servlet-name>  
   <url-pattern>/Servlet_test1</url-pattern>  
 </servlet-mapping>  
 
 在服务端的代码（接收HTTP请求方）
在test2项目下创建一个com.servlet包下的Servlet_test2.java文件

package com.servlet;  
  
import java.io.IOException;  
import javax.servlet.ServletException;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
  
public class Setvlet_test2 extends HttpServlet {  
  
      
    public void doGet(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        request.setCharacterEncoding("utf-8");  
        response.setContentType("text/html;charset=utf-8");  
        System.out.println("test2");  
        System.out.println(request.getParameter("username"));  
        System.out.println(request.getParameter("password"));  
        //获得发送HTTP请求的参数  
        String username=request.getParameter("username");  
        String password=request.getParameter("password");  
        //向HTTP发送方返回响应数据  
        if("123".equals(username)&&"456".equals(password)){  
            response.getWriter().write("{\"falg\":\"success\"}");  
        }else{  
            response.getWriter().write("{\"falg\":\"error\"}");  
        }  
          
    }  
    public void doPost(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        this.doGet(request, response);  
    }  
  
}  


在test2项目的web.xml文件中的配置如下：

<servlet>  
  <servlet-name>Setvlet_test2</servlet-name>  
  <servlet-class>com.servlet.Setvlet_test2</servlet-class>  
</servlet>  
  
<servlet-mapping>  
  <servlet-name>Setvlet_test2</servlet-name>  
  <url-pattern>/Setvlet_test2</url-pattern>  
</servlet-mapping>
