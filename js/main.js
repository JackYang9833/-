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
