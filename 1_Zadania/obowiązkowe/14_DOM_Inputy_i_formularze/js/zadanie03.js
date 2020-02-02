document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('form');

    form.addEventListener("submit", validateSend)

    function validateSend() {
        event.preventDefault();
        let team1 = document.querySelector("#team1").value;
        let points1 = document.querySelector("#points1").value;
        let team2 = document.querySelector("#team2").value;
        let points2 = document.querySelector("#points2").value;

        let validateScore = (points1 >= 0 && points1 != "") && (points2 >= 0 && points2 != "");
        let validateTeam = (team1 != "" && team2 != "") && team1 != team2;
        if (validateScore && validateTeam) {
            addNewData(team1, team2, points1, points2);
        } else {
            alert("Wprowadzone dane są niepoprawne");
        }
    }

    function addNewData(team1, team2, points1, points2) {
        let table = document.querySelector('table tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${team1}</td><td>${team2}</td><td>${points1} - ${points2}</td>`;
        table.append(tr);
    }

});