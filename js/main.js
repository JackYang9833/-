function getData(){
  jQuery.ajax({
    url: "https://v1.hitokoto.cn",
    dataType: "json",
    data:{'c':'i'},
    async: false,
    success: function (data) {
      $('#word').text(data.hitokoto);
       const author=((data.from_who)==null)?'佚名':data.from_who;
      $('#author').text("— " + author)
    }
  })
}
setInterval(getData,5000)
// 进度条
let load="<div id=\"preloader\">加载中，请等待</div>";
$('body').append(load);
document.onreadystatechange=function(){
  var i=0;
  while(document.readyState=="loading"){
    i++;
    $('#preloader').text(i)
  }
  if(document.readyState=="complete"){
    $('#preloader').hide();
  }
}
