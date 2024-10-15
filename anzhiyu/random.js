var posts=["2024/10/05/asd/","2024/10/05/hello-world/","2024/10/15/ad/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };