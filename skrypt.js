function dodaj()
{
    var liczba1=parseInt(document.getElementById('pole1').value);
    var liczba2=parseInt(document.getElementById('pole2').value);
    var wynik=liczba1+liczba2;
    document.getElementById('wynik').innerText="Wynik: "+wynik;
}