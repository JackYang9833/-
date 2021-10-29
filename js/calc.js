new Vue({
    el:'.wrapper',
    data:{
        title:'进制转换',
        vlst:{'vClass':['box10','box2','box8','box16'],
              'vTitle':['十进制','二进制','八进制','十六进制']}}})
$(".box10").bind('input propertychange', function() {
    var a = $(".box10").val();
    var k=(a==' ')?'#':parseInt(a);
    var sHex=k.toString(16);
    var sOtc=k.toString(8);
    var sbinary=k.toString(2);
    $(".box2").val(0+sbinary);$(".box8").val(sOtc);$(".box16").val('0x'+sHex);
})
$(".box2").bind('input propertychange', function() {
   $('.box10').val(toDecimal($('.box2').val()));
   $('.box8').val((toDecimal($('.box2').val())).toString(8));
   $('.box16').val((toDecimal($('.box2').val())).toString(16));
}) 
$(".box8").bind('input propertychange', function() {
    $('.box10').val(toOct($('.box8').val()));//
   $('.box2').val((toOct($('.box8').val())).toString(2));
   $('.box16').val((toOct($('.box8').val())).toString(16));
})
$(".box16").bind('input propertychange', function() {
    $('.box10').val(toOct($('.box16').val()));
   $('.box2').val((toOct($('.box16').val())).toString(2));
   $('.box8').val((toOct($('.box16').val())).toString(8));
})
 function toDecimal(bin){
    var res=0,j=0,binStr=String(bin);
    for (var i = binStr.length-1; i >= 0; i--) {
    res += binStr[j] * Math.pow(2, i)
    j += 1
}return res;}
function toOct(otc){
    var res=0,j=0,binStr=String(otc);
    for (var i = binStr.length-1; i >= 0; i--) {
    res += binStr[j] * Math.pow(8, i)
    j += 1
}return res;}
function toOct(hex){
    var res=0,j=0,h;
    var binStr=String(hex);
    for (var i = binStr.length-1; i >= 0; i--) {
        h= (binStr[j]=='a'||binStr[j]=='A')? 10:
        (binStr[j]=='b'||binStr[j]=='B')?11:
        (binStr[j]=='c'||binStr[j]=='C')?12:
        (binStr[j]=='d'||binStr[j]=='D')?13:
        (binStr[j]=='e'||binStr[j]=='E')?14:
        (binStr[j]=='f'||binStr[j]=='F')?15:binStr[j];;;
    res +=h * Math.pow(16, i)
    j += 1
}return res;}