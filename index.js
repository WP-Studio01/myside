(window.onhashchange=function(){
    // alert(location.hash);
    switch(location.hash)
    {
        case '':
            $('body').html('');
            location.hash='#/home';
        case '#/home': 
            $('body').html('');
            // alert('home');
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
function createMenuItem(name,side){
    return $('<a></a>')
            .attr('class','item')
            .css({'border':'solid gray 2px','padding':'5px','cursor':'pointer'})
            .click(function(){
                location.hash=side;
            })
            .text(name)
}
function menu(){
    return $('<div></div>')
        .attr('class','menu')
        .css({'position':'absolute','top':'2%','left':'2px'})
        .append(createMenuItem('主页','#/home'))
        .append(createMenuItem('文章','#/blog'));
}
function home(){
    document.titie='主页';
    // alert('home');
    $('body')
        .append(menu())
        .append($('<div></div>').css({'height':'60px'}))
        .append($('<div></div>')
            .append($('<img src="https://avatars.githubusercontent.com/u/98379477"></img>')
                .css({'width':'100px','height':'100px'}))
            .append($('<p>我是一位五年级的男生,喜欢编程</p>'))
        );
}
function blog(){
    document.title='博客';
    $('body')
        .append(menu());
}
function blogsub(){
    if(location.hash.search('blogsub')!=-1)
    {
        var a=location.hash.split('/');
        var sub=a.pop();
        menu();
    }
}