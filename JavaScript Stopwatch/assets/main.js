window.onload=()=>
{

    var btnStart = document.getElementById('button_start')
    var btnStop = document.getElementById('button_stop')
    var btnReset = document.getElementById('button_reset')

    var txtSecond = document.getElementById('second')
    var txtTick = document.getElementById('tick')

    var second = 00
    var tick = 00
    var Interval
    btnStart.onclick=function(){
        clearInterval(Interval)
        Interval =setInterval(funcStart,10)
    }
    btnStop.onclick=function(){
        clearInterval(Interval)
    }
    btnReset.onclick=function(){
        clearInterval(Interval)
        tick='00'
        second='00'
        txtSecond.innerHTML=second
        txtTick.innerHTML=tick
    }
    function funcStart()
    {
        tick++
        if(tick <=9)
        {
            txtTick.innerHTML="0"+tick
        }else if(tick >9 && tick< 100)
        {
            txtTick.innerHTML=tick
        }else if (tick>=100 )
        {
            tick=00
            txtTick.innerHTML='0'+0
            second++
            if(second <=9)
            {
                txtSecond.innerHTML="0"+second
            }else if(second>9)
            {
                txtSecond.innerHTML=second
            }
        }
    }

}
//just a simple code 
//another code here
//just a simple code 
//just a simple code 
//just a simple code 
//just a simple code 
//just a simple code 
//just a simple code 

