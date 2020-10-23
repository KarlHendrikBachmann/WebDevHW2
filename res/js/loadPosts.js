
$(function () {
    $('.main-container').on('click', '.like-button', function () {
        $(this).toggleClass("liked");
    })

    var request = new XMLHttpRequest();
    request.open('GET', 'https://private-anon-7b9e836ba6-wad20postit.apiary-mock.com/posts');
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            loadPosts(jQuery.parseJSON(this.responseText));
            }
        };
    request.send();
    
    });

function loadPosts(data) {
    for (var post in data) {
        constructPost(data[post]);
    }
};

function constructPost(object) {
    var dataObject = "";
            dataObject +=
            "<div class='post'>";
            if (object['author'] != null) {
                dataObject += 
                "<div class='post-author'>"+
                "<span class='post-author-info'>"+
                "<img src='"+object['author']['avatar']+"'alt='Post author'>"+
                "<small>" + object['author']['firstname'] + " " + object['author']['lastname'] +"</small>"+
                "</span>"+
                "<small>"+object['createTime']+"</small>"+
                "</div>";
            }

            if (object['media'] != null) {

                if (object['media']['type'] == 'video') {
                    dataObject +=
                    "<div class='post-image'>"+
                    "<video src='"+object['media']['url']+"' alt=''>"+
                    "</div>";
                }
                if (object['media']['type'] == 'image') {
                    dataObject +=
                    "<div class='post-image'>"+
                    "<img src='"+object['media']['url']+"' alt=''>"+
                    "</div>";   
                }
            }

            if (object['text'] != null) {
                dataObject += 
                "<div class='post-title'>"+
                "<h3>"+object['text']+"</h3>"+
                "</div>";
            }
            dataObject += 
            "<div class='post-actions'>"+
            "<button type='button' name='like' class=like-button liked>"+object['likes']+"</button>"+
            "</div>"+
            "</div>";
            $(".main-container").append(dataObject); 
    }
