(window.onhashchange=function(){
    switch(location.hash)
    {
        case '':
            $('body').html('');
            location.hash='#/home';
        case '#/home': 
            $('body').html('');
            home();
            break;
        case '#/blog': 
            $('body').html('');
            blog();
            break;
        default:
            $('body').html('');
            blogsub();
            break;
    }
})();
function menu(){
    return $('<div></div>')
        .attr('class','menu')
        .css({'position':'absolute','top':'0px','left':'0px'})
        .append($('<a></a>')
            .attr('class','item')
            .attr('id','item1')
            .click(function(){
                location.hash='#/home';
            })
            .text('主页')
    );
}
function home(){
    document.titie='主页';
    $('body')
        .append(menu())
        .append($('<div></div>'));
}
function blog(){
    menu();
}
function blogsub(){
    if(location.hash.search('blogsub')!=-1)
    {
        var a=location.hash.split('/');
        var sub=a.pop();
        menu();
    }
}