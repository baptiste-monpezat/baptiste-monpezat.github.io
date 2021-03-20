---
title: Twitter Hashtags top trends with Spark Streaming.
excerpt: How to deal with live streaming data ? I built a streaming pipeline with spark that processes live tweets coming from the twitter api. 
The stream processing extracts hashtags from tweets and count them in a 10 minutes window. The count is then sent to the front-end to visualize Hashtags 
top trends.Doing this project, I learned a lot about spark, docker as well as nginx for web proxy. 

iframe: //baptiste-monpezat.github.io/twitter-hashtags/
demo: //baptiste-monpezat.github.io/twitter-hashtags/
src: //github.com/baptiste-monpezat/pyspark-twitter-stream

info:
  idea: The app is made of four services (A service streaming tweets from twitter, a spark service processing tweets and counting hashtags, a node web server, and a web a proxy). Each service is containerized and communicate with each other using web sockets. The front-end is a react app displaying a race chart of hashtags top trends. 
  tech: [Spark,Python,React,Docker,Nginx]
  links:
    - [ On Github,https://github.com/baptiste-monpezat/pyspark-twitter-stream]

---
