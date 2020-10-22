$(function () {
    $('.avatar').click(function () {
        $('#profile-info').toggle()
    });
    loadUserInfo()
        .then(function (response) {
            user = new Profile(
                response.firstname,
                response.lastname,
                response.email,
                response.avatar
            );

            displayUserInfo(user)
        })
        .catch(function () {
            alert('Error loading user info')
        });
});

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-93c7059ce6-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}
function displayUserInfo(user) {
    $('#profile-name').text(user.firstname + " " + user.lastname);
    $('#profile-email').text(user.email);
    $('.avatar').attr("src", user.avatar);
}