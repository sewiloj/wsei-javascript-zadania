/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//funkcja "jeden"
function jeden() {

    //zmienna o zasiegu blokowym
    var zmienna1 = 1;

    //funckja "dwa"
    function dwa() {

        //wyświetlenie "zmienna1"
        console.log(zmienna1);

        //zmianna o zasiegu blokowym
        var zmienna2 = 3;
    }

    //wywołanie funkcji "dwa"
    dwa();

    // proba wypisania "zmienna2"
    // zmienna nie ma "zasiegu" poza funkcje "dwa" poniewaz
    // jej przypisanie znajduje się wewnatrz funkcji "dwa" 
    console.log(zmienna2);
}

// wywołanie funkcji jeden
jeden();