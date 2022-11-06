const grade = document.getElementById('grade');

let first_selected_piece = null;
let second_selected_piece = null;
let count_incorrect_pieces = 0;

for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 6; x++) {
        const new_piece = document.createElement('div');
        new_piece.id = "x"+x+"y"+y;
        new_piece.style.top = y*50+"px";
        new_piece.style.left = x*50+"px";
        new_piece.style.backgroundPositionX = ( (x*25 / (6 - 1)) * 100) + "%";
        new_piece.style.backgroundPositionY = ( (y*25 / (4 - 1)) * 100) + "%";
        new_piece.setAttribute('onclick', 'click_piece(this)');
        grade.appendChild(new_piece);
    }
}


function shuffle_pieces(interactions) {
    for (let i = 0; i < interactions; i++) {
        var selected_1X = 0;
        var selected_1Y = 0;
        var selected_2X = 0;
        var selected_2Y = 0;

        while (selected_1X == selected_2X && selected_1Y == selected_2Y) {
            selected_1X = Math.round(Math.random() * (6 - 1));
            selected_1Y = Math.round(Math.random() * (4 - 1));
            selected_2X = Math.round(Math.random() * (6 - 1));
            selected_2Y = Math.round(Math.random() * (4 - 1));
        }

        first_selected_piece = document.getElementById("x"+selected_1X+"y"+selected_1Y);
        second_selected_piece = document.getElementById("x"+selected_2X+"y"+selected_2Y);
        change_pieces();
    }
}


function click_piece(piece) {
    if (first_selected_piece == null) {
        first_selected_piece = piece;
        // first_selected_piece.style.border = "2px solid red";
    } 
    else if (second_selected_piece == null) {
        second_selected_piece = piece;
        // second_selected_piece.style.border = "2px solid blue";
        change_pieces();
        show_texts();
        // first_selected_piece.style.border = "0px solid red";
        // second_selected_piece.style.border = "0px solid red";
    }
}


function change_pieces() {
    let first_selected_piece_previous_top = first_selected_piece.style.top;
    let first_selected_piece_previous_left = first_selected_piece.style.left;
    
    // console.log("Previous: ", first_selected_piece_previous_top, first_selected_piece_previous_left);
    first_selected_piece.style.top = second_selected_piece.style.top;
    first_selected_piece.style.left = second_selected_piece.style.left;
    // console.log("Next: ", first_selected_piece.style.top, first_selected_piece.style.left);
    second_selected_piece.style.top = first_selected_piece_previous_top;
    second_selected_piece.style.left = first_selected_piece_previous_left;

    first_selected_piece = null;
    second_selected_piece = null;

    validate();
}


function validate() {
    let correct = true;
    count_incorrect_pieces = 0;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 6; x++) {
            const piece = document.getElementById("x"+x+"y"+y);
            if (piece.style.top != y*50+"px" || piece.style.left != x*50+"px") {
                count_incorrect_pieces += 1;
                correct = false;
            }
        }
    }

    // console.log("Incorrect: ", count_incorrect_pieces);
    // let count_correct_pieces = 24 - count_incorrect_pieces;
    // console.log("Correct: ", count_correct_pieces);

    if (correct) {
        alert("Parabéns, você conseguiu!");
    }
}


function show_texts() {
    for (let y = 7; y > count_incorrect_pieces; y--) {
        console.log("y: ", y);
        // console.log("p__0"+String(y));
        // console.log(document.querySelectorAll('*[id]'))
        const item = document.getElementById("p__0"+String(y));
        // console.log(item);
        item.style.display = "";
    }
};

shuffle_pieces(3);

// https://www.youtube.com/watch?v=Qyms0ohJF84