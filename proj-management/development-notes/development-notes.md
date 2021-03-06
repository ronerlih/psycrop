TO-DO:
- add CMAKE install script on heroku and production builds
brew install cmake
- add on testController.js
   fix async image processing
- devide ot channels


# original repo:
https://github.com/ronerlih/AeStatix/blob/pixel-analysis/Assets/FrameProcessing.cs


https://github.com/ronerlih/project-3-boiler-authentication

// morgan docs
https://www.npmjs.com/package/morgan

//docker: https://docs.docker.com/engine/reference/builder/
https://docs.docker.com/get-started/

//build image:
docker build -t ronerlih/psykrop-api-cluster-production .
//run image:
docker run -p 3001:3001 ronerlih/psykrop-api-cluster

//heroku scaling: 
https://devcenter.heroku.com/articles/scaling

// load test: https://www.npmjs.com/package/loadtest
//i.e. loadtest http://localhost:3000/ -k -n 10000 -c 1000 -C cookie-__id=s%3AcvzqMmnAaar3bIknaKsQSsFiQNGbFRC1.c4US2JD17dcuBg1zA46jhdzBuE0O2pglgO6STcQrkCI
//i.e. loadtest http://localhost:3001/ -k -n 10000 -c 1000
//i.e. loadtest https://mern-stack-boilerplat.herokuapp.com/ -k -n 10000 -c 1000

//i.e. 
loadtest http://localhost:3001/api/images -H "Accept:*/*" -k -n 10 --rps 1 -T 'application/json' -m POST -P '{"images":["https://2014.igem.org/wiki/images/a/a7/Sample.png", "https://images2.minutemediacdn.com/image/upload/c_crop,h_3236,w_5760,x_0,y_0/f_auto,q_auto,w_1100/v1554700227/shape/mentalfloss/istock-609802128.jpg", "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg", "https://qph.fs.quoracdn.net/main-qimg-7e3c3f89920a527c3becb8e312b0a465", "https://www.passmark.com/source/img_posts/montest_slide_2.png", "https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg"]}'  
loadtest https://psykrop-api.herokuapp.com/api/images -H "Accept:*/*" -k -n 60 --rps 1 -T 'application/json' -m POST -P '{"images":["https://2014.igem.org/wiki/images/a/a7/Sample.png", "https://images2.minutemediacdn.com/image/upload/c_crop,h_3236,w_5760,x_0,y_0/f_auto,q_auto,w_1100/v1554700227/shape/mentalfloss/istock-609802128.jpg", "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg", "https://qph.fs.quoracdn.net/main-qimg-7e3c3f89920a527c3becb8e312b0a465", "https://www.passmark.com/source/img_posts/montest_slide_2.png", "https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg"]}'  
loadtest https://psykrop-api.herokuapp.com/api/images -H "Accept:*/*" -k -n 60 -c 5 --rps 5 -T 'application/json' -m POST -P '{"images":["https://2014.igem.org/wiki/images/a/a7/Sample.png"]}'  
loadtest http://localhost:3001/api/images -H "Accept:*/*" -k -n 60 --rps 5 -T 'application/json' -m POST -P '{"images":["https://2014.igem.org/wiki/images/a/a7/Sample.png", "https://images2.minutemediacdn.com/image/upload/c_crop,h_3236,w_5760,x_0,y_0/f_auto,q_auto,w_1100/v1554700227/shape/mentalfloss/istock-609802128.jpg", "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg", "https://qph.fs.quoracdn.net/main-qimg-7e3c3f89920a527c3becb8e312b0a465", "https://www.passmark.com/source/img_posts/montest_slide_2.png", "https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg"]}'  
// long term test
loadtest https://psykrop-api.herokuapp.com/api/images -H "Accept:*/*" -k -n 600  -T 'application/json' -m POST -P '["https://2014.igem.org/wiki/images/a/a7/Sample.png"]'  


//load test with wrk: https://github.com/wg/wrk
// brew install wrk
//wrk -t8 -c100 -d30s http://localhost:3001/
//https://www.cognitiveclouds.com/insights/top-node-js-production-best-practices/

//https://nodejs.org/api/cluster.html
//https://medium.com/js-imaginea/clustering-inter-process-communication-ipc-in-node-js-748f981214e9

//cache:
// heroku eviction policy:
// heroku redis:maxmemory  --policy=volatile-lru
// heroku redis:cli --confirm mern-stack-boilerplat

//docker
docker build -t boiler-docker .
docker images
docker run -p 49160:3001 -d boiler-docker
docker swarm -p 3001:3001 -d boiler-docker
docker ps
curl -i localhost:49160
//https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

// aws docker deployment
// from https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html
// aws ecr get-login --region us-east-1 --no-include-email
// docker login -u AWS -p eyJwYXlsb2FkIjoiSFFNZHloWmsxYURnWVR1MjNaajc5dzdMVThxVlpZQ1FnbzluU3QralF5ay94S0dhS2Vva0RueXc2K1BhVGloRjdMLzlSTzlQWnpwV1BpL21mYkw1K2YyZ0tVRGxQSFdnRkI5a2dHbmhGdHpsL1hPVTY3OXNZZ3BNV3VrWmk5MEZBY0FlSCtvbjlYNEFSdWY4T0FUeW5ic0NMTFdyaUtPVjNEb0xNYXBRVXgxWkxYVHdLeHZubklSQkY3YnJyWFBmd05HdjNYZzA5dEc5VjMrWUoyczU5TjJRS25ZeUNValhIRllocWdVR0VwQUl2MnlvajUvQTc5WFF6d0tyZ2EyQ3ltUk9kam96U0NGVW5ldms4SlYxbDZPOU1jbzRaTXN0M3Fna1lNd2tDUjhldExaQkdGM2hPVCttMllEYnNBSkRza0F1MXc0ZEV1UU9Bam1tVE5nU3FkblBObStzeFVja1B1SGtVWXB5MkE3V3BnV2VuTXMwTDV2L3Z0MW5wMjFrOGpnVlBEbHlKcVZ6MFdCSEJ3MTkvcVRlQy9mMzZVN0tGZHhyVVBVMDUvcnFPN1ZPVWZSTG52dFBIRi9wdFByb1RoNWR1VmdLcjRYMlVlUE02UXY3YkFpM2ZOeHhUbnVXT05IOVpzaGh1eWNhcmJwRitacmxEY1EwQWlFcTlPdnFzUUpHMkEvLythSnlrb3pDR2ZkWlNDMGxIZnRqZTVKRjV6S05DV21vbTFRb1FZeWlraUpEY1EvWlRKVHJNRTlRb0V3TzNMV0J2OVRvZFF5Vk5keThkL1RGYitJRlo2N3owQnpKZGxKTkRralF1UVJkbzV2ZUw5cGVrU0g0cHhjMFA1Z1ZuK3p4eEZEbmkwQ1k5c1FXb3VCb1htYm02bXB0VjZsWml0M0VHcHJPcm16RE9lVlBwS3FnQ09Obld6eXN1VUYzay9GRkY2YkhTclIzekNYbnJkT1o0TDVLcHlZaUJGZUxGdVZzTUtoRmRDamNwUHJ2YyszQzUvRGxoYlBLdnNWU1B4clhuS1VmOWQrT3FBM21uMGpBaDVTZ3N3cU44OUN1OGdYeGc5TFZpd1NIaDBNMmxaTmJFNThra25IRWQxVndiYjdVaEN5QkplYjllMjgvcE53dW1VeEFGdUpLY0JUM1NHOWNkNTBpcjFCZzhQclNLNnMvaUE4cjNiYS9oMWRDTGJzOXlMM3hGNUl4akhiRDVJcTdoY2RSaXBZSFNGd2JjT1cxdGlSOVY4Z1paQWFmSElkNENxbWVQcDN0VzdUSmQvZGlnVDJ6V0krMG8xTlp0UE5kajRraVJtWVQ4Tk4xU21rWk1Pa2J3VnFXd2dYYWRqc2t1bzRJVm5HL21LQmFXdXp3TkQ2R2hvV1pQaUlNTXByN1ppQStHMFh2L1ROKzFPMmZmVTJpd0wyNkpITVNCUDNOU1MxSmVRPT0iLCJkYXRha2V5IjoiQVFFQkFIaHdtMFlhSVNKZVJ0Sm01bjFHNnVxZWVrWHVvWFhQZTVVRmNlOVJxOC8xNHdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFRFAreDhseVNKZm1PT0hNelpBSUJFSUE3aDN3TExRZUluZUQ2QnRhb2U1K1RucjJkUWQxYU5jNmlNNUdEZjJwZHhJNWRLOUJjT0VST3k1U3lmOVBIbHBvaHpNNXZvT3hHT0pDVnR2dz0iLCJ2ZXJzaW9uIjoiMiIsInR5cGUiOiJEQVRBX0tFWSIsImV4cGlyYXRpb24iOjE1ODQxNzQyMjV9 https://563282074666.dkr.ecr.us-east-1.amazonaws.com
// docker push 563282074666.dkr.ecr.us-east-1.amazonaws.com/psykrop-api:latest


//Nginx
// https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/

// covera script: npm run coveralls

load tests resu;ts:
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Target URL:          http://localhost:3001/api/images
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Max requests:        60
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   1
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Total errors:        0
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Total time:          61.754518393 s
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        2943 ms
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO   50%      2827 ms
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO   90%      3661 ms
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO   95%      4181 ms
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO   99%      6244 ms
[Tue Mar 03 2020 16:33:38 GMT-0500 (Eastern Standard Time)] INFO  100%      6244 ms (longest request)

[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Target URL:          http://localhost:3001/api/images
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Max requests:        60
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   1
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 5
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Total errors:        0
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Total time:          22.288975747000002 s
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 3
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        7124.2 ms
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO   50%      7195 ms
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO   90%      9726 ms
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO   95%      10378 ms
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO   99%      10658 ms
[Tue Mar 03 2020 16:35:29 GMT-0500 (Eastern Standard Time)] INFO  100%      10658 ms (longest request)

[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 5
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Total errors:        39
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Total time:          72.80916049599999 s
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        31304.7 ms
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO   50%      32348 ms
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO   90%      38935 ms
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO   95%      60829 ms
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO   99%      61224 ms
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO  100%      61224 ms (longest request)
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO  100%      61224 ms (longest request)
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO   503:   15 errors
[Tue Mar 03 2020 19:51:21 GMT-0500 (Eastern Standard Time)] INFO    -1:   24 errors


[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Max requests:        60
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   1
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Total errors:        0
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Total time:          60.145739606 s
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        588.4 ms
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO   50%      478 ms
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO   90%      978 ms
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO   95%      1317 ms
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO   99%      1471 ms
[Tue Mar 03 2020 19:57:36 GMT-0500 (Eastern Standard Time)] INFO  100%      1471 ms (longest request)

[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Max requests:        60
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   1
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Total errors:        0
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Total time:          60.15916546 s
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 1
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        544 ms
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO   50%      502 ms
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO   90%      698 ms
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO   95%      1007 ms
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO   99%      1528 ms
[Tue Mar 03 2020 20:17:17 GMT-0500 (Eastern Standard Time)] INFO  100%      1528 ms (longest request)

[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Max requests:        60
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   5
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 5
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Total errors:        0
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Total time:          12.748187377 s
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 5
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        435.2 ms
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO   50%      415 ms
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO   90%      526 ms
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO   95%      586 ms
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO   99%      770 ms
[Tue Mar 03 2020 20:19:43 GMT-0500 (Eastern Standard Time)] INFO  100%      770 ms (longest request)

[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Max requests:        60
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   5
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 5
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  60
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Total errors:        0
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Total time:          12.98203523 s
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 5
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        1267.4 ms
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO   50%      1170 ms
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO   90%      1965 ms
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO   95%      2068 ms
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO   99%      2223 ms
[Tue Mar 03 2020 20:28:14 GMT-0500 (Eastern Standard Time)] INFO  100%      2223 ms (longest request)


[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Max requests:        600
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Concurrency level:   1
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Agent:               keepalive
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Completed requests:  600
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Total errors:        1
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Total time:          347.53654496999997 s
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Requests per second: 2
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Mean latency:        579.1 ms
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO Percentage of the requests served within a certain time
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO   50%      450 ms
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO   90%      790 ms
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO   95%      845 ms
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO   99%      1633 ms
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO  100%      28436 ms (longest request)
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO  100%      28436 ms (longest request)
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO 
[Tue Mar 03 2020 20:37:59 GMT-0500 (Eastern Standard Time)] INFO   503:   1 errors

checks before distances
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO 
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Max requests:        600
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Concurrency level:   1
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Agent:               keepalive
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO 
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Completed requests:  600
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Total errors:        2
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Total time:          467.297100473 s
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Requests per second: 1
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Mean latency:        778.7 ms
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO 
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO Percentage of the requests served within a certain time
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO   50%      753 ms
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO   90%      845 ms
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO   95%      1018 ms
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO   99%      1995 ms
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO  100%      30008 ms (longest request)
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO 
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO  100%      30008 ms (longest request)
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO 
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO   503:   1 errors
[Thu Mar 12 2020 17:19:21 GMT-0400 (Eastern Daylight Time)] INFO    -1:   1 errors

load checks after distances
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO 
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Target URL:          https://psykrop-api.herokuapp.com/api/images
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Max requests:        600
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Concurrency level:   1
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Agent:               keepalive
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO 
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Completed requests:  600
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Total errors:        2
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Total time:          490.64715551800003 s
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Requests per second: 1
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Mean latency:        817.6 ms
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO 
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO Percentage of the requests served within a certain time
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO   50%      697 ms
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO   90%      924 ms
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO   95%      1064 ms
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO   99%      2833 ms
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO  100%      30008 ms (longest request)
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO 
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO  100%      30008 ms (longest request)
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO 
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO   503:   1 errors
[Mon May 18 2020 09:49:47 GMT-0400 (Eastern Daylight Time)] INFO    -1:   1 errors
