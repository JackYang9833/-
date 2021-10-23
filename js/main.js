function getData(){
  jQuery.ajax({
    url: "https://v1.hitokoto.cn",
    dataType: "json",
    data:{'c':'j'},
    async: false,
    success: function (data) {
      $('#word').text(data.hitokoto);
      $('#author').text("— " + data.from_who)
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
