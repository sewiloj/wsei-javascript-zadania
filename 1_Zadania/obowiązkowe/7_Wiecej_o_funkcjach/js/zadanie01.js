
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//utworzenie funkcji sortArray
function sortArray() {

    //zdefiniowanie tablicy i przypisanie danych
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie funkcji sort na elementach tablicy
    points.sort(function (a, b) {
        //porównanie elementów
        return a - b;
    });

    //zwracanie posortowanej tablicy
    return points;
}

//wywołanie funkcji sortArray()
sortArray();
