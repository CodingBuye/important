/**
 * 代理模式的定义：为一个对象提供一个代用品或占位符，以便控制对它的访问。
 * 常用的虚拟代理形式：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要它的时候才去创建（例：使用虚拟代理实现图片懒加载）
 * 图片懒加载的方式：先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到img标签里面。
 */
var imgFunc = (function(){
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
})();

var proxyImage = (function(){
  var img = new Image();
  img.onload = function() {
    imgFunc.setSrc(this.src);
  }
  return {
    setSrc: function(src){
      imgFunc.setSrc('./loading.gif');
      img.src = src;
    }
  }
})();

proxyImg.setSrc('./pic.png');
