function get_number()
{
    return Number(document.querySelector('input').value) || 0;
}
// make square and drop to screen
function make_square(number)
{
    for (let index = 0; index < number; index++) {
        let tmp = document.createElement('div')
        let size = Math.floor(Math.random()*150)+50;
        let x_pos = Math.abs(Math.floor(Math.random()*1600) - size);
        let y_pos = Math.abs(Math.floor(Math.random()*900)-size);
        tmp.style = `width:${size}px;height:${size}px;position:absolute; background-color:red; margin-left:${x_pos}px; margin-top:${y_pos}px;border:2px solid;`;
        document.querySelector('.figure-field').append(tmp);
        tmp.addEventListener('dblclick',function(){
            tmp.remove();
        })
        tmp.addEventListener('click' , function(){
            tmp.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        })
    }
}
// make triangle and drop to screen
function make_triangle(number)
{
    for (let index = 0; index < number; index++) {
        let tmp = document.createElement('div');
        let size = Math.floor(Math.random()*120)+50;
        let x_pos = Math.abs(Math.floor(Math.random()*1600) - size);
        let y_pos = Math.abs(Math.floor(Math.random()*900)-size);
        tmp.style = `width:0;height:0;border-left:${size}px solid transparent;border-right:${size}px solid transparent;border-bottom:${2 * size}px solid blue;position:absolute;margin-left:${x_pos}px; margin-top:${y_pos}px;`
        document.querySelector('.figure-field').append(tmp);
        tmp.addEventListener('dblclick',function(){
            tmp.remove();
        })
        tmp.addEventListener('click' , function(){
            tmp.style.borderBottomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        })
    }
}
// make circle and drop to screen
function make_circle(number)
{
    for (let index = 0; index < number; index++) {
        let tmp = document.createElement('div');
        let size = Math.floor(Math.random()*120)+50;
        let x_pos = Math.abs(Math.floor(Math.random()*1600) - size);
        let y_pos = Math.abs(Math.floor(Math.random()*900)-size);
        tmp.style = `height:${size}px;width:${size}px;background-color:green;border-radius:50%;border:2px solid black;position:absolute;margin-left:${x_pos}px; margin-top:${y_pos}px;`
        document.querySelector('.figure-field').append(tmp);
        tmp.addEventListener('dblclick',function(){
            tmp.remove();
        })
        tmp.addEventListener('click' , function(){
            tmp.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        })
    }
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector(".square").addEventListener("click",function (){
        make_square(get_number());
    });
    document.querySelector(".triangle").addEventListener("click",function (){
        make_triangle(get_number());
    });
    document.querySelector(".circle").addEventListener("click",function (){
        make_circle(get_number());
    });
});