var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");
setInterval(function () {
    socket.emit("get stats", []);
}, 3000);

socket.on("send stats", function (statistics) {
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Time</td><td>Vegetarian eat count</td><td>Predator eat count</td><td>Human eat count</td><td>Grass mul</td><td>Vegetarian mul</td><td>Predator mul</td><td>Human mul</td>";
    for (var st of statistics) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + st.timestamp + "</td>";
        tableHTML += "<td>" + st.vegetarianeatcount + "</td>";
        tableHTML += "<td>" + st.predatoreatcount + "</td>";
        tableHTML += "<td>" + st.humaneatcount + "</td>";
        tableHTML += "<td>" + st.grassmul + "</td>";
        tableHTML += "<td>" + st.vegetarianmul + "</td>";
        tableHTML += "<td>" + st.predatormul + "</td>";
        tableHTML += "<td>" + st.humanmul + "</td>";
        tableHTML += "</tr>";
    }

    table.innerHTML = tableHTML;
})

