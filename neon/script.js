var request = new XMLHttpRequest();

request.open('GET', 'https://discord.com/api/guilds/772241655809966101/widget.json', true);

request.onload = function() {
    if (request) {
        var data = JSON.parse(request.responseText);
        document.getElementById("discord-counter").innerHTML = data.presence_count;
    } else {
    }
};

request.onerror = function() {
};

request.send();