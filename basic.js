let button = document.getElementById('overview_box_button'); // 移到這裡
let content = document.querySelectorAll('#overview_box_content div');
let content_box = document.getElementById('overview_box_content')
let check = true;

let item_click = document.querySelectorAll('#overview_box_button_ul li');
let item_result = document.querySelectorAll('#overview_box_content div');

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < item_click.length; i++) {
        item_click[i].onclick = ()=>{
            move_box(i)
        }
    }
});

function move_box(element){
    if(check){
        button.style.width ='30%'
        item_result[element].style.right = '0'
        check = false
        content_box.style.width = '70%'
        item_result.forEach(function(num,index){
            if(index!== element){
                num.style.right = '0'
                num.style.bottom = '-100%'
            }
        })
    }else{

        item_result.forEach(function(num){
            num.style.right = '0'
            num.style.bottom = '-100%'
        })
        item_result[element].style.bottom = '0'
    }
}
