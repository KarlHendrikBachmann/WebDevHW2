$(function() {
    loadUsers()
    .then(function(response){
        console.log("then")
        var counter = 0
        response.forEach(element => {
            counter++
            new User(
                element.firstname,
                element.lastname,
                element.avatar
            )
            showUsers(element,counter)
        });
        
    })
    .catch(
        alert('Error loading users')
    )
})

function loadUsers(){
    return $.get(
        {
            url: 'https://private-anon-03840aaebb-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}

function showUsers(element,id){
    $(".main-container").append("<div class='followBox'>\
        <div class='followFlex'>\
            <img src=" + element.avatar + ">\
            <h2>"+element.firstname + " " + element.lastname+"</h2>\
          <button type='button' class='followButton' id='button"+ id + "'>Follow</button>\
        </div>\
    </div>\
    ")
    $("#button" + id).click(function(){
        if($("#button" + id).hasClass("selected")){
            $("#button" + id).removeClass("selected")
            $("#button" + id).html("Follow")
        }
        else{
            $("#button" + id).addClass("selected")
            $("#button" + id).html("Followed")
        }
    })
}