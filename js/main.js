var xhr=new XMLHttpRequest();
if(xhr.readyState==4&&xhr.status==200){
  $('#word').text(data.hitokoto)
}else{
  $('#word').text("正在获取...")
}
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
let load="<div id=\"preloader\">Page is loading,please wait a while...</div>";
$('body').append(load);
document.onreadystatechange=function(){
  if(document.readyState=="complete"){
    $('#preloader').hide();
  }
}
