$(document).ready(function(){
    var bruin_page_id = $('#bruin').attr('data-page-id');
    var trojan_page_id = $('#trojan').attr('data-page-id');

    var bruin = new Page(bruin_page_id, 0);
    var trojan = new Page(trojan_page_id, 0);

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
    $('*[data-page-id="'+data.id+'"]').text(data.likes);
}
