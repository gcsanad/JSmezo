function sliderErtek(){
    document.getElementById("mezokSzamaErtek").innerText=document.getElementById("mezokSzama").value;
    document.getElementById("mezokSzelessegErtek").innerText=document.getElementById("mezokSzelessege").value;
}

function mezoKeszitese(){
    let mezokSzama = document.getElementById("mezokSzama").value;
    let mezo = document.getElementById("mezok");
    let mezokSzelessege = document.getElementById("mezokSzelessege").value;
    mezo.innerHTML="";

    for (let indexSor = 0; indexSor < mezokSzama; indexSor++) {
        let ujSor = document.createElement("tr");
        for (let indexOszlop = 0; indexOszlop < mezokSzama; indexOszlop++) {
            let ujOszlop = document.createElement("td");
            ujOszlop.style.width = mezokSzelessege+"px";
            ujOszlop.style.height = mezokSzelessege+"px";
            if (indexOszlop % 2 === 0) {
                if (indexSor % 2 === 0) {
                    ujOszlop.style.backgroundColor = "cyan";
                }
                else{
                    ujOszlop.style.backgroundColor = "black";
                }
            }
            else{
                if (indexOszlop % 2 === 0) {
                    ujOszlop.style.backgroundColor = "cyan";
                }
                else{
                    ujOszlop.style.backgroundColor = "black";
                }
            }
            
            ujSor.appendChild(ujOszlop);
        }
        mezo.appendChild(ujSor)
        
    }
    mezo.style.borderCollapse= "collapse";
}