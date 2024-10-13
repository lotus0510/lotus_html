
document.addEventListener('DOMContentLoaded',function(){
    fun_certificate_img()
    img_fun()
    fun_chart()
    certificate_box()
})

let certificate = document.getElementById('certificate')
let certificate_img1 = document.getElementsByClassName('certificate_img')[0]
let certificate_img2 = document.getElementsByClassName('certificate_img')[1]
let certificate_img3 = document.getElementsByClassName('certificate_img')[2]

let cer_img1 = document.createElement('img')
let cer_img2 = document.createElement('img')
let cer_img3 = document.createElement('img')

function fun_certificate_img(){
    cer_img1.src = img_box[0]
    cer_img2.src = img_box[1]
    cer_img3.src = img_box[2]
    certificate_img1.appendChild(cer_img1)
    certificate_img2.appendChild(cer_img2)
    certificate_img3.appendChild(cer_img3)

}




let img1 = 'img/20240109_人身保險.jpg';
let img2 = 'img/20231110_外匯.jpg';
let img3 = 'img/20230512_授信.jpg';
let img4 = 'img/20240522_投信投顧.jpg';
let img5 = 'img/20230224_理財規劃.jpg';
let img6 = 'img/20230927_衍生性.jpg';
let img7 = 'img/20230109_銀行內控.jpg';
let img8 = 'img/20220620_金融常識.jpg';
let img9 = 'img/20221124_信託.jpg';
let img10 = 'img/20230806_普業.jpg';
let img11 = 'img/20231021_防洗錢.jpg';
let img12 = 'img/20240425_普業.jpg';
let img13 = 'img/20240709_產險.jpg';
let img14 = 'img/20240918_期貨.jpg';

let img_box = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

// 箭頭
function img_fun() {
    let item = 0;
    const Rarrow = document.getElementById('right_arrow');
    const Larrow = document.getElementById('left_arrow');
    const img_box_length = img_box.length;  // 獲取圖片陣列長度

    function fun_cer_img() {
        // 確保圖片索引在合法範圍內
        cer_img1.src = img_box[item % img_box_length];
        cer_img2.src = img_box[(item + 1) % img_box_length];
        cer_img3.src = img_box[(item + 2) % img_box_length];
    }

    Rarrow.onclick = function() {
        item = (item + 1) % img_box_length;  // 往右時增加索引並循環
        fun_cer_img();
    }

    Larrow.onclick = function() {
        item = (item - 1 + img_box_length) % img_box_length;  // 往左時減少索引並循環
        fun_cer_img();
    }

    fun_cer_img();  // 初始化圖片顯示
}




function fun_chart(){
    let ctx = document.getElementById('mychart').getContext('2d')
    let mychart = new Chart(ctx,{
        type: 'line',
        data:{
            labels:['110-1','110-2','111-1','111-2','112-1','112-2','113-1','113-2'],
            datasets:[{
                label:'score',
                data:[78.17,77.64,79.17,82,86.18,84.56],
            }],
        },
        options:{
            scales:{
                y:{
                    min:60,
                    max:100,
                }
            }
        }

    })
}
