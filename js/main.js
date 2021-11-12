var xhr=new XMLHttpRequest();
if(xhr.readyState==4&&xhr.status==200){
  $('#word').text(data.hitokoto)
}else{
  $('#word').text("正在获取...")
}
setInterval(function(){
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
},5000)
  var loader="\<div class=\"loader-wrapper\">"+
    "<div class=\"loader loader-7\">"+
      "<div class=\"line line1\"></div>"+
      "<div class=\"line line2\"></div>"+
      "<div class=\"line line3\"></div>"+
    "</div>"+
"</div>";
$('body').append(loader);
$('title').text('正在加载...');
document.onreadystatechange=function(){
if(document.readyState=="complete"){
$('title').text('');
$('.loader-wrapper').fadeOut();
}
}
