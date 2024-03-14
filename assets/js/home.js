//Global variables and functions
var slider_content = $(".division_4").html(), add = ["The 2024 trending Skills Report is here!", "Smartest way to get Hired"], count = 0;
owl_carousel();

//Detect window resize
window.addEventListener('resize', function(event) {
    $(".division_4").html(slider_content); //Re-asign division_4 content
    owl_carousel(); //Call owl carousel
});

//Owl carousel
function owl_carousel(){
    $('.division_4 .owl-carousel').owlCarousel({
        autoplayHoverPause:true,
	    autoplay: true,
		    loop: true,
		    margin: 0,
		    dots: true,
		    nav: false,
		    responsiveClass: true,
		    responsiveRefreshRate:10,
		    responsive: {
		    0: {
			    items: 1,
			    margin: 10,
			    stagePadding: 0,
		    }
	    }
    });
    let dot_length = $(".owl-dot").length;
    let owl = $(".owl-carousel");
    owl.owlCarousel();
    owl.on("changed.owl.carousel", function(event){
        $(".tab_btn li button").removeClass("active");
        for (let i=0; i<=dot_length; i++){
            if ($(".owl-dot:nth-child("+i+")").hasClass("active")){
                $(".tab_btn li:nth-child("+i+") button").addClass("active");
            }
        }
    });
}
const slider = (no) => { $(".owl-dot:nth-child("+no+")").click(); }

setInterval(function(){
    document.getElementsByClassName("add")[0].innerHTML = add[count] + ' <iconify-icon icon="heroicons:arrow-up-right-16-solid"></iconify-icon>';
    count == add.length-1 ? count = 0 : count++;
}, 8000);
