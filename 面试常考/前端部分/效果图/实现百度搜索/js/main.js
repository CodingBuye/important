var oText = document.querySelector("#text");
var oSearch = document.querySelector(".search");
var oUl = document.querySelector('ul');

function valueChange() {
  var val = oText.value.trim();
  oSearch.style.display = val ? "block" : "none";
  var jsonp = document.createElement('script');
  jsonp.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=getKeyWords";
  document.body.appendChild(jsonp);
}

function getKeyWords(data) {
  oUl.innerHTML = "";
  data.s.forEach(element => {
    var oLi = document.createElement("li");
    oLi.innerHTML = "<a href='https://www.baidu.com/s?wd='"+element+"'>"+element+"</a>";
    oUl.appendChild(oLi);
  })
}
