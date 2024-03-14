//Filters
document.getElementsByClassName("filter_icon")[0].addEventListener("click", function(){
    modal('filters', 'open');
});


//Modal
function modal(type, op){
    switch (op){
        case "open":
            document.getElementsByClassName("modal")[0].style.display = "flex";
            overlay("","modal");
        break;
        case "close":
            document.getElementsByClassName("modal")[0].style.display = "none";
        break;
    }
}
    
//Location search
$("input[name='location_search']").on("input", function(){
    let autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementsByName("location_search")[0]), {
        types: ['(cities)'],

    });
    autocomplete = new google.maps.places.Autocomplete((document.getElementsByName("location_search")[1]), {
        types: ['(cities)']
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        let near_place = autocomplete.getPlace();
    });
});


//On form submit
$("form").on("submit", function(event){
    event.preventDefault();
    if ($(this).hasClass("form_location")){
        form_operation($(this).attr("class"), $(this).children("input").val());
    }
});


//Form operation
function form_operation (name, val){
    switch (name){
        case "form_location":
            let tag = $("."+name).parent().next(".tags");
            tag.append('<small class="tag">'+val+' <a href="javascript:void(0)" onclick="this.parentNode.remove()"><i class="fa fa-times"></i></a></small>');
        break;
    }
}


//Fetch job titles
readTextFile("packages/job-titles.json", function(text){
    var data = JSON.parse(text);
    alert(data);
});
