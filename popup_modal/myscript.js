const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal_wrapper');
const close = document.querySelector(".close");
const p = document.querySelector("p");
trigger.addEventListener('click',function(){
    modalWrapper.classList.add('active');
});
close.addEventListener('click',function(){
    modalWrapper.classList.remove('active')
});
modalWrapper.addEventListener('click',function(e){
    if(e.target !==this)return;
    modalWrapper.classList.remove('active');
})
$(document).ready(function(){
    $('html').keyup(function(e){if(e.keyCode == 8)$(".inp").prev().focus()})  
    $(".inp").on({
        "keyup" : function(e){
            if($(this).val()> 0 && $(this).val() <9 ){
            var number_input_value = parseInt($(this).val());
            console.log(typeof(number_input_value));
            $(this).next().focus();
        }else{
            if(e.keyCode != 8){
                $("p").text(" FILL NUMBER ");
            }
           
            
        }
        if(e.keyCode == 37){
            $(".inp").prev().focus(); 

        }else if(e.keyCode == 38){
            $("this").next().focus(); 

        }
        }
    });
    $("#trigger").click(function(){
        $("h2").append($("#mobilenumber").val())
    });
    $(".otp").click(function(){
        $(".active").remove();
        $("#mobilenumber").val("");
    });    
});
