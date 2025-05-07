var posts=["2024/10/05/asd/","2024/10/05/hello-world/","2024/10/15/ad/","2024/12/18/123/","2025/05/06/2025-5-6/","2025/05/06/jk/","2025/05/06/page/","2025/05/07/报告/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };