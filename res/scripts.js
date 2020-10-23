
$(function () {
    console.log("Javascript works");
    let likeButton = $('.like-button');    
    likeButton.click(function () {
        console.log("clicked on the like button");
        $(this).toggleClass("liked");
    })


    var request = new XMLHttpRequest();
    var data;
    request.open('GET', 'https://private-anon-7b9e836ba6-wad20postit.apiary-mock.com/posts');

    request.onreadystatechange = function () {
    if (this.readyState === 4) {
        //console.log('Status:', this.status);
        //console.log('Headers:', this.getAllResponseHeaders());
        //console.log('Body:', this.responseText);
        data = jQuery.parseJSON(this.responseText);
        }
    };
    
    request.onload = function () {
        console.log(data)
        for (var post in data) {
            object = data[post];
            
            if(object['media'] == null){
                console.log("did it break in if")
                $(".main-container").append(
                    "<div class='post'>" +
                    "<div class='post-author'>"+
                    "<span class='post-author-info'>"+
                    "<img src='"+object['author']['avatar']+"'alt='Post author'>"+
                    "<small>" + object['author']['firstname'] + " " + object['author']['lastname'] +"</small>"+
                    "</span>"+
                    "<small>"+object['createTime']+"</small>"+
                    "</div>"+
                    "<div class='post-title'>"+
                    "<h3>"+object['text']+"</h3>"+
                    "</div>"+
                    "<div class='post-actions'>"+
                    "<button type='button' name='like' class='like-button''>"+object['likes']+"</button>"+
                    "</div>"+
                    "</div>"
                  ); 
            }
            else if (object['text' == null]) {
                console.log("did it break in else")
                $(".main-container").append(
                    "<div class='post'>" +
                    "<div class='post-author'>"+
                    "<span class='post-author-info'>"+
                    "<img src='"+object['author']['avatar']+"'alt='Post author'>"+
                    "<small>" + object['author']['firstname'] + " " + object['author']['lastname'] +"</small>"+
                    "</span>"+
                    "<small>"+object['createTime']+"</small>"+
                    "</div>"+
                    "<div class='post-image'>"+
                    "<img src='"+object['media']['url']+"' alt=''>"+
                    "</div>"+
                    "<div class='post-actions'>"+
                    "<button type='button' name='like' class='like-button''>"+object['likes']+"</button>"+
                    "</div>"+
                    "</div>"
                  ); 
            } else {
                console.log("did it break in else")
                $(".main-container").append(
                    "<div class='post'>" +
                    "<div class='post-author'>"+
                    "<span class='post-author-info'>"+
                    "<img src='"+object['author']['avatar']+"'alt='Post author'>"+
                    "<small>" + object['author']['firstname'] + " " + object['author']['lastname'] +"</small>"+
                    "</span>"+
                    "<small>"+object['createTime']+"</small>"+
                    "</div>"+
                    "<div class='post-image'>"+
                    "<img src='"+object['media']['url']+"' alt=''>"+
                    "</div>"+
                    "<div class='post-title'>"+
                    "<h3>"+object['text']+"</h3>"+
                    "</div>"+
                    "<div class='post-actions'>"+
                    "<button type='button' name='like' class='like-button''>"+object['likes']+"</button>"+
                    "</div>"+
                    "</div>"
                  ); 
                }    
            }
    }

    request.send();
})


