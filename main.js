$(document).ready(function(){

    var bruin = new Page(
        $('#bruin').attr('data-page-id'),
        $('#bruin').attr('data-original-likes')
    )
    var trojan = new Page(
        $('#trojan').attr('data-page-id'),
        $('#trojan').attr('data-original-likes')
    )

    bruin.getLikes();
    trojan.getLikes();

});


/* constructors */

function Page(id, original_likes) {
    this.id = id;
    this.original_likes = original_likes;
    this.getLikes = function() {
        var s = document.createElement('script');
        s.src = 'https://graph.facebook.com/?id='+this.id+'&callback=setLikes';
        document.getElementsByTagName('head')[0].appendChild(s);
    }
}


/* utility functions */

function setLikes(data){
    var elem = $('*[data-page-id="'+data.id+'"]');
    elem.find('.total').text(data.likes);

    var delta = data.likes - elem.attr('data-original-likes');
    elem.find('.delta').text(delta);
}
