var colors=["#FF2A68", "#FF5E3A", "#FFCD02", "#0BD318", "#5AC8FB", "#1D62F0", "#5856D6", "#C643FC","#5BCAFF",  "#A4E786"];
var countdown;
var timeout;
$( document ).ready(function() {
    
    
    var i = 0;
    var start = 10;
        
    $("#countdown span").text(start-i);
    $("#countdown").css("background-color",colors[start-i]);
    
    
    $("button").click(function(){
        $("iframe").css("transition","0.5s");
        $("iframe").css("transform","scale(0)");
        setTimeout(function(){
            $("iframe").css("transition","10s");
        },10);
        clearInterval(countdown);
        clearTimeout(timeout);
        
        i = 0;
        start = 10;
        
        
         $("#countdown span").text(start-i);
         $("#countdown").css("background-color",colors[start-i]);
         
        countdown = setInterval(function(){
            if(i<start-1){
                $("#countdown span").css("transform","translateY(-50%) scale(0)");
                timeout = setTimeout(function(){
                    $("#countdown span").text(start-i);
                    $("#countdown span").css("transform","translateY(-50%) scale(1)");
                    $("#countdown").css("background-color",colors[i]);
                },500);
                
                
                i++;
            }else{
                clearInterval(countdown);
                $("iframe").css("transform","scale(1)");
            }
            
        },1000);
    });
   
});