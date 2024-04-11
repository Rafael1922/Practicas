const deg = 6;
                const hr = document.querySelector('#hr');
                const mn = document.querySelector('#mn');
                const sc = document.querySelector('#sc');

                setInterval(() => {
                    let day = new Date();
                    let hh = day.getHours() * 30;
                    let mm = day.getMinutes() * deg;
                    let ss = day.getSeconds() * deg;

                    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
                    mn.style.transform = `rotateZ(${mm}deg)`;
                    sc.style.transform = `rotateZ(${ss}deg)`;
                });
                ejecutar();
    function ejecutar(){
        let f = new Date();
        let h = f.getHours();
        let m = f.getMinutes();
        let s = f.getSeconds();

        let hora = h+":"+m+":"+s;

        document.getElementById('reloj').innerHTML=hora;
        setTimeout(()=>{ejecutar()},1000);
    }
