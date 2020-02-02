/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji "jeden"
function jeden() {

    //deklaracja zmiennej blokowej i przypisanie wartosci
    var zmienna1 = 1;

    //deklaracja funkcji "jeden"
    function dwa() {

        //wyświetlenie w logu zmiennej "zmienna1"
        console.log(zmienna1);

        //deklaracja zmiennej blokowej i przypisanie wartosci
        var zmienna2 = 3;
    }

    //wywołanie funkcji "dwa"
    dwa();

    // proba wypisania "zmienna2", która nie wypisze sie ponieważ ma zasieg w funkcji dwa()
    console.log(zmienna2);
}

// wywołanie funkcji jeden która wyświetla zmienna1 i wyrzuca ReferanceError ponieważ nie widzi zmienna2
jeden();