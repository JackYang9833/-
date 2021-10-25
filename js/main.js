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
var str=" <div id=\"circularG\">"+
       "<div id=\"circularG_1\" class=\"circularG\"></div>"+
      "<div id="\circularG_2\" class=\"circularG\"></div>"+
        "<div id=\"circularG_3\" class=\"circularG\"></div>"+
       "<div id=\"circularG_4\" class=\"circularG\"></div>"+
       " <div id=\"circularG_5\" class=\"circularG\"></div>"+
       "<div id=\"circularG_6\" class=\"circularG\"></div>"+
        "<div id=\"circularG_7\" class=\"circularG\"></div>"+
        "<div id=\"circularG_8\" class=\"circularG\"></div>"+
     "</div>";
$('#body').append(str);
document.onreadystatechange=function(){
  if(document.readyState=="complete"){
    
  }
}
