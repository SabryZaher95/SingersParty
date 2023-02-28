$('#open').click(function(){
    $('.side-menu').toggle(500)
});

$(document).ready(function () {
    $('#singers .one').css('display', 'block');
    $("#singers h3").click(function () {
        console.log(this)
        $(this).next().slideToggle(500);
        $("#singers p").not($(this).next()).slideUp(500);
    });

    //------------CountDown---------------------
    // Set the date we're counting down to
    //const countDownDate = new Date("May 5, 2023 15:30:00").getTime();
    const countDownDate = new Date("Mar 26, 2023 15:30:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element
    $('.days').html(days + " D");
    $('.hours').html(hours + " h");
    $('.minutes').html(minutes + " m");
    $('.seconds').html(seconds + " s");
        
    // If the count down is over, write Expired note
    if (distance <= 0) {
        clearInterval(x);
        $('.count-container').css({"justify-content": "center", "font-size": "25px"});
        $('.count-container').html('<p class="text-center">EXPIRED</p>');
    }
    }, 1000);
});

let count = 100;
$('#msg').keypress(function(e){
    let x = $('#msg').val();
    count--;
    if(count < 0) {
        e.preventDefault();
    }
    else{
        $('form p span').html(count);
    }
    
    console.log(x);
})