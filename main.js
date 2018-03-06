!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() =>{
            n+=1
            container.innerHTML = prefix + code.substring(0,n)
            styleTag.innerHTML = prefix + code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },20)
    }
    let code = `
    /*
    *首先，来一张皮卡丘的脸
    */
    .preview{
        border:1px solid green;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFE600;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*
    *画一个鼻子吧 
    */
    .nose{
        width: 0;
        height: 0;
        border-style: solid;
        border-color:black transparent transparent transparent;
        border-width: 12px;
        border-radius: 11px;
        position: absolute;
        top: 28px;
        left: 50%;
        margin-left: -12px;  
    }
    /*
    *再画两只眼珠子
    */
    .eye{
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.left::after{
        content: '';
        display: block;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        border: 2px solid #000000;
        background: white;
        position: absolute;
        left: 5px;
        top: -1px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .eye.right::after{
        content: '';
        display: block;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 7px;
        border: 2px solid #000000;
        top: -1px;
    }
    /*
    *点两点腮红 
    */
    .face{
        width: 68px;
        height: 68px;
        background: #FF0000;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
        top:90px;
    }
    .face.left{
        right: 50%;
        margin-right: 120px;
        
    }
    .face.right{
        left: 50%;
        margin-left: 120px;
    }
    /*
    *然后是上嘴唇 
    */
    .upperLip{
        width: 80px;
        height: 25px;
        border: 2px solid #000000;
        position: absolute;
        background: #FFE600;
     
    }
    .upperLip.left{
        right: 50%;
        top:64px;
        border-top: none;
        border-right: none;
        border-bottom-left-radius: 40px 25px; 
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;
        top:64px;
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 40px 25px; 
        transform: rotate(20deg);
    }
    /*
    *来，笑一个 
    */
    .lowerLip-wrapper{
        width:300px;
        height: 150px;
        position: absolute;
        bottom: -58px;
        right: 50%;
        margin-right: -150px;
        overflow: hidden;
    
    }
    .lowerLip{
        border-radius: 200px/2000px;
        width:300px;
        height: 4000px;
        background: #9B000A;
        border: 2px solid #000000;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip::before{
        content: '';
        width: 130px;
        height: 130px;
        background: #FF485F;
        position: absolute;
        bottom: -10px;
        right: 50%;
        margin-right: -65px;
        border-radius: 50%;
    }
    /*
    *Pika Pika (*^_^*) 
    */
    `
    writeCode('',code)
}.call()