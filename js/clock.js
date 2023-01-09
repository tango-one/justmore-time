function time() {


    const time = new Date();

    let timer = time.getHours();
    let min = time.getMinutes();
    let sek = time.getSeconds();
    let ss = time.getMilliseconds();

        // adds zero when there is not 2 diggits

    if(timer < 10) {
        timer = "0" + timer;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sek < 10) {
        sek = "0" + sek;
    }

    console.log(time);

    


    document.getElementById("tid").innerHTML = (timer + ':' + min + ':' + sek + ':' + ss );

    };

    setInterval(time, 100);

    time();
