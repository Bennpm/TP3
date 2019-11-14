panel = function(el, show, hide) {
    
    var element1 = document.getElementById(show);
    var element2 = document.getElementById(hide);
    element1.style.display = "block";
    element2.style.display = "none";
    
    var unBold=document.getElementsByTagName("A");
    unBold[0].style.fontWeight="normal";
    unBold[1].style.fontWeight="normal";
    el.style.fontWeight="bold";
  }

window.onload = function () {
    console.log('loading')
    fetchJson()
}

// Cette fonction n'est plus necessaire. Elle servait a mettre a jour l'image pour la seance 2

/*function myFunction() {
  var image = document.getElementById("fig3");
  image.src = "fig4.png";
}*/

function fetchJson() {
    fetch('http://localhost:8080/JSON/output.json')                           // On va chercher les donnees sur le serveur dans le fichier output.json
        .then(response => {
            return response.json()
        })
        .then(res => {
            var table = document.createElement("table")


            document.getElementById("outputTable").appendChild(table)         // On ajoute la table a l'outputTable

            var ligne = document.createElement("tr")


            // On cree les colonnes du tableau avec les variables necessaires 

            ligne.insertCell(0).innerHTML = "Consumer Segment" 
            ligne.insertCell(1).innerHTML = "Population"
            ligne.insertCell(2).innerHTML = "Volume Baseline Recontract"
            ligne.insertCell(3).innerHTML = "ARPU Baseline Recontract"
            ligne.insertCell(4).innerHTML = "Volume Scenario Recontract"
            ligne.insertCell(5).innerHTML = "ARPU Scenario Recontract"
            ligne.insertCell(6).innerHTML = "Volume Baseline NewCustomers"
            ligne.insertCell(7).innerHTML = "ARPU Baseline NewCustomers"
            ligne.insertCell(8).innerHTML = "Volume Scenario NewCustomers"
            ligne.insertCell(9).innerHTML = "ARPU Scenario NewCustomers"
            table.appendChild(ligne)

            var tab = res["consumer.segment"];

            // On parcourt le tableau afin  de le remplir

            // On parcout chaque ligne une a une, en remplissant ses colones 

            for (let i = 0; i < tab.length; i++) {
                var ligne = document.createElement("tr")
                ligne.insertCell(0).innerHTML = tab[i]["Consumer.Segment"]
                ligne.insertCell(1).innerHTML = tab[i]["Population"]
                ligne.insertCell(2).innerHTML = tab[i]["Volume.Baseline.Recontract"]
                ligne.insertCell(3).innerHTML = tab[i]["ARPU.Baseline.Recontract"]
                ligne.insertCell(4).innerHTML = tab[i]["Volume.Scenario.Recontract"]
                ligne.insertCell(5).innerHTML = tab[i]["ARPU.Scenario.Recontract"]
                ligne.insertCell(6).innerHTML = tab[i]["Volume.Baseline.NewCustomers"]
                ligne.insertCell(7).innerHTML = tab[i]["ARPU.Baseline.NewCustomers"]
                ligne.insertCell(8).innerHTML = tab[i]["Volume.Scenario.NewCustomers"]
                ligne.insertCell(9).innerHTML = tab[i]["ARPU.Scenario.NewCustomers"]
                table.appendChild(ligne)
            }

            var ligne = document.createElement("tr")

            var th = document.createElement("th")
            th.appendChild(document.createTextNode("Estimated mobile data usage"))
            th.style.color = "black"
            ligne.appendChild(th)
            table.appendChild(ligne)

            var tab = res["estimated.usage"];

            // On parcout chaque ligne une a une, en remplissant ses colones 

            for (let i = 0; i < tab.length; i++) {
                var ligne = document.createElement("tr")
                ligne.insertCell(0).innerHTML = tab[i]["Estimated.mobile.data.usage"]
                ligne.insertCell(1).innerHTML = tab[i]["Population"]
                ligne.insertCell(2).innerHTML = tab[i]["Volume.Baseline.Recontract"]
                ligne.insertCell(3).innerHTML = tab[i]["ARPU.Baseline.Recontract"]
                ligne.insertCell(4).innerHTML = tab[i]["Volume.Scenario.Recontract"]
                ligne.insertCell(5).innerHTML = tab[i]["ARPU.Scenario.Recontract"]
                ligne.insertCell(6).innerHTML = tab[i]["Volume.Baseline.NewCustomers"]
                ligne.insertCell(7).innerHTML = tab[i]["ARPU.Baseline.NewCustomers"]
                ligne.insertCell(8).innerHTML = tab[i]["Volume.Scenario.NewCustomers"]
                ligne.insertCell(9).innerHTML = tab[i]["ARPU.Scenario.NewCustomers"]
                table.appendChild(ligne)
            }
        })
        .catch(err => {
            console.error('this is the error: ', err)
        })
}
