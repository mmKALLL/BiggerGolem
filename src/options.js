// Saves options to localStorage.
function save_options() {
    var select = document.getElementById("style");
    var style = select.children[select.selectedIndex].value;
    localStorage["style"] = style;

    var chess_pieces_select = document.getElementById("chess_pieces");
    var chess_pieces = chess_pieces_select.children[chess_pieces_select.selectedIndex].value;
    localStorage["chess_pieces"] = chess_pieces;
    localStorage["chess_size"] = document.getElementById("chess_size").value;

    var reversiOpts = document.getElementById("reversi");
    localStorage["background"] = reversiOpts.green.checked;
    localStorage["go"] = reversiOpts.go.checked;

    var goOpts = document.getElementById("go");
    localStorage["goCoordinates"] = goOpts.coordinates.checked;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options saved.";
    setTimeout(function () {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var selected_style = localStorage["style"];
    var selected_chess_pieces = localStorage["chess_pieces"];
    var selected_chess_size = localStorage["chess_size"];
    var selected_reversiGreen = localStorage["background"];
    var selected_reversiGo = localStorage["go"];
    var selected_goCoordinates = localStorage["goCoordinates"]

    if (!selected_style) {
        return;
    }
    var select = document.getElementById("style");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == selected_style) {
            child.selected = "true";
            break;
        }
    }

    var chess_pieces_select = document.getElementById("chess_pieces");
    for (var i = 0; i < chess_pieces_select.length; i++) {
      var child = chess_pieces_select.children[i];
      if (child.value == selected_chess_pieces) {
          child.selected = "true";
          break;
      }
    }
    if (selected_chess_size) document.getElementById("chess_size").value = selected_chess_size;

    var reversiOpts = document.getElementById("reversi");
    if (selected_reversiGreen == "true") reversiOpts.green.checked = true;
    if (selected_reversiGo == "true") reversiOpts.go.checked = true;

    var goOpts = document.getElementById("go");
    if (selected_goCoordinates == "true") goOpts.coordinates.checked = true
}
//eventhandler
el = document.getElementById("save-options")
if (el) el.addEventListener("click", save_options);
restore_options();
