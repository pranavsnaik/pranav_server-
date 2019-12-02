$("#dynamicbtn").live("click",function(){
    var data=$($(this).parent().parent()).remove();
    
});
 $("#edit1").live("click",function(){
     var data1=$($(this).parent().parent().children[0]).replacewith("");
     var data2=$($(this).parent().parent().children[1]).replacewith("");
     var data3=$($(this).parent().parent().children[2]).replacewith("");
 });
 $("#save1").live("click",function(){
    var data=$($(this).parent().parent().children[0]).load();
    var data1=$($(this).parent().parent().children[1]).load();
    var data2=$($(this).parent().parent().children[2]).load();
    
});
$(document).ready(function(){
    $("#btn").click(function(){
        var Name=$("#txt").val();
        var Cuisine=$("#txt1").val();
        var Price=$("#num").val();

        var row="<tr><td>" + Name + 
            "</td><td>" + Cuisine + 
            "</td><td>" + Price +
            "</td><td><input      type='button' id='dynamicbtn'     value='delete'>"+
            "</td><td><input      type='button' id='edit1'          value='edit'>"+
            "</td><td><input       type='button' id='save1'          value='save'></td></tr>";
            $("#table1").append(row);
    });
});