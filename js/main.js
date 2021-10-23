$(document).ready(getData=function ($) {
  jQuery.ajax({
    url: "https://v1.hitokoto.cn",
    dataType: "json",
    data:{c:'i'},
    async: false,
    success: function(data) {
      // $("p").append(data + "<br />");
      $('#word').text(data.hitokoto);
      $('#author').text('-'+data.from_who+"《" +data.from+"》");
      console.log(data);
    }
  });
});
setInterval(getData,5000)
