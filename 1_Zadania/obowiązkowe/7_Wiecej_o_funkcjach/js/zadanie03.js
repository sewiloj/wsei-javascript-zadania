//Funckja jest poprawnie wywoływana
hello();
function hello() {
    console.log("Cześć");
};
//Funckja jest poprawnie wywoływana
hello();

//Wyrzucany jest błąd, mówiący o tym, że nie możemy użyć funkcji przed jej zadeklarowaniem
welcome();
let welcome = function () {
    console.log("Witaj");
};
//Funckja jest poprawnie wywoływana
welcome();


// gdy używamy wyrażenia funkcyjego, musimy wywoływać funkcje po jej zdeklarowaniu
