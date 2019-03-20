$("button").click(function(){
    var on = $(".name").val();
    $(".result").text( "I will have" + on );
});
$("button").click(function(){
    var ok= $(".okay").val();
    $(".answer").text("I am going to be a" + ok );
});
$("button").click(function(){
    var off = $(".future").val();
    $(".questions").text("I am going to be " + (parseInt(off) + 10));
});