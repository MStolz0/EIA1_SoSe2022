var eu      = 444.7;

function EU() {
    var eu_2022 = 444.7;
    var eu_2008 = 440.6;
    var wachstum_eu = eu_2022 / eu_2008;
    var wachstum_eu_gesamt = eu_2022 - eu_2008;
    console.log("Gesamteinwohnerzahl 2022 in der EU "+ eu_2022 +"Mio. Einwohnerzahl relativ zur Eu "+ 0 +"% Wachstumsrate seit 2008 "+ wachstum_eu.toFixed(2) +"% Wachstumsrate Gesamt zwischen 2008 und 2022 "+ wachstum_eu_gesamt.toFixed(2) +"Mio. ")

    document.querySelector("#gesamt").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Europa in 2022"

    document.getElementById("num1").innerHTML = eu_2022 + "Mio";
    document.getElementById("num2").innerHTML = "100%";
    document.getElementById("num3").innerHTML = wachstum_eu.toFixed(2) + "%";
    document.getElementById("num4").innerHTML = wachstum_eu_gesamt.toFixed(2) + "Mio";

    document.querySelector(".chart").setAttribute("style","height:100%")


}

function Deutschland() {
var de_2022 = 83.75;
var de_2008 = 82.11;
var de_relativ_eu = 100 / eu * de_2022;
var wachstum = de_2022 / de_2008;
var wachstum_gesamt = de_2022 - de_2008

console.log("Gesamteinwohnerzahl 2022 in Deutschland "+ de_2022 +"Mio. Einwohnerzahl relativ zur Eu "+ de_relativ_eu.toFixed(2) +"% Wachstumsrate seit 2008 "+ wachstum.toFixed(2) +"% Wachstumsrate Gesamt zwischen 2008 und 2022 "+ wachstum_gesamt.toFixed(2) +"Mio. ")

document.querySelector("#gesamt").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022"

document.getElementById("num1").innerHTML = de_2022 + "Mio";
document.getElementById("num2").innerHTML = de_relativ_eu.toFixed(2) + "%";
document.getElementById("num3").innerHTML = wachstum.toFixed(2) + "%";
document.getElementById("num4").innerHTML = wachstum_gesamt.toFixed(2) + "Mio";

document.querySelector("#de").setAttribute("class","wrapper active");
document.querySelector("#it").setAttribute("class","wrapper");
document.querySelector("#fr").setAttribute("class","wrapper");
document.querySelector("#sp").setAttribute("class","wrapper");

document.querySelector(".chart").setAttribute("style","height:18.8%")

}

function Frankreich() {
var fr_2022 = 65.48;
var fr_2008 = 62.14;
var fr_relativ_eu = 100 / eu * fr_2022;
var wachstum_fr = fr_2022 / fr_2008;
var wachstum_fr_gesamt = fr_2022 - fr_2008;

console.log("Gesamteinwohnerzahl 2022 in Frankreich "+ fr_2022 +"Mio. Einwohnerzahl relativ zur Eu "+ fr_relativ_eu.toFixed(2) +"% Wachstumsrate seit 2008 "+ wachstum_fr.toFixed(2) +"% Wachstumsrate Gesamt zwischen 2008 und 2022 "+ wachstum_fr_gesamt.toFixed(2) +"Mio. ")

document.querySelector("#gesamt").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022"

document.getElementById("num1").innerHTML = fr_2022 + "Mio";
document.getElementById("num2").innerHTML = fr_relativ_eu.toFixed(2) + "%";
document.getElementById("num3").innerHTML = wachstum_fr.toFixed(2) + "%";
document.getElementById("num4").innerHTML = wachstum_fr_gesamt.toFixed(2) + "Mio";

document.querySelector("#de").setAttribute("class","wrapper");
document.querySelector("#it").setAttribute("class","wrapper");
document.querySelector("#fr").setAttribute("class","wrapper active");
document.querySelector("#sp").setAttribute("class","wrapper");

document.querySelector(".chart").setAttribute("style","height:14.7%")

}

function Italien() {
var it_2022 = 59.53;
var it_2008 = 59.00;
var it_relativ_eu = 100 / eu * it_2022;
var wachstum_it = it_2022 / it_2008;
var wachstum_it_gesamt = it_2022 - it_2008;

console.log("Gesamteinwohnerzahl 2022 in Italien "+ it_2022 +"Mio. Einwohnerzahl relativ zur Eu "+ it_relativ_eu.toFixed(2) +"% Wachstumsrate seit 2008 "+ wachstum_it.toFixed(2) +"% Wachstumsrate Gesamt zwischen 2008 und 2022 "+ wachstum_it_gesamt.toFixed(2) +"Mio. ")

document.querySelector("#gesamt").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022"

document.getElementById("num1").innerHTML = it_2022 + "Mio";
document.getElementById("num2").innerHTML = it_relativ_eu.toFixed(2) + "%";
document.getElementById("num3").innerHTML = wachstum_it.toFixed(2) + "%";
document.getElementById("num4").innerHTML = wachstum_it_gesamt.toFixed(2) + "Mio";

document.querySelector("#de").setAttribute("class","wrapper");
document.querySelector("#it").setAttribute("class","wrapper active");
document.querySelector("#fr").setAttribute("class","wrapper");
document.querySelector("#sp").setAttribute("class","wrapper");

document.querySelector(".chart").setAttribute("style","height:13.4%")

}

function Spanien() {
var sp_2022 = 47.36;
var sp_2008 = 45.98;
var sp_relativ_eu = 100 / eu * sp_2022;
var wachstum_sp = sp_2022 / sp_2008;
var wachstum_sp_gesamt = sp_2022 - sp_2008;

console.log("Gesamteinwohnerzahl 2022 in Spanien "+ sp_2022 +"Mio. Einwohnerzahl relativ zur Eu "+ sp_relativ_eu.toFixed(2) +"% Wachstumsrate seit 2008 "+ wachstum_sp.toFixed(2) +"% Wachstumsrate Gesamt zwischen 2008 und 2022 "+ wachstum_sp_gesamt.toFixed(2) +"Mio. ")

document.querySelector("#gesamt").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2022"

document.getElementById("num1").innerHTML = sp_2022 + "Mio";
document.getElementById("num2").innerHTML = sp_relativ_eu.toFixed(2) + "%";
document.getElementById("num3").innerHTML = wachstum_sp.toFixed(2) + "%";
document.getElementById("num4").innerHTML = wachstum_sp_gesamt.toFixed(2) + "Mio";

document.querySelector("#de").setAttribute("class","wrapper");
document.querySelector("#it").setAttribute("class","wrapper");
document.querySelector("#fr").setAttribute("class","wrapper");
document.querySelector("#sp").setAttribute("class","wrapper active");

document.querySelector(".chart").setAttribute("style","height:10.7%")

}

document.querySelector(".germany").addEventListener("click", Deutschland);
document.querySelector(".france").addEventListener("click", Frankreich);
document.querySelector(".italy").addEventListener("click", Italien);
document.querySelector(".spain").addEventListener("click", Spanien);
document.querySelector(".stars").addEventListener("click",EU);