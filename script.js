// TODO: add code here
let json = [];
let astronautCode = '';

window.addEventListener("load", function() {
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then(function(response) {
        response.json().then(function(json) {
            console.log(json[1].skills);

            const container = document.getElementById("container");

            for (let i in json) {
                astronautCode = astronautCode.concat(`
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="images/${json[i].picture}">
            </div>
            <br>`
                );
            };
            console.log(astronautCode);

            container.innerHTML = astronautCode;
        });
    });
});
