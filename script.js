function sendMessage() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    if (message.trim() === ":clearchat") {
        clearChat();
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_message.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("message").value = "";
        }
    };
    xhr.send("name=" + name + "&message=" + message);
}

function fetchMessages() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "fetch_messages.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("chat-box").innerHTML = xhr.responseText;
            setTimeout(fetchMessages, 1000);
        }
    };
    xhr.send();
}

function clearChat() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "clear_chat.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("chat-box").innerHTML = "";
        }
    };
    xhr.send();
}

fetchMessages();
