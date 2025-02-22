let buttons = [];

let child_container = document.getElementById("child-container");

let count = [10, 10];

child_container.style.gridTemplateColumns = "1fr ".repeat(count[0]);
child_container.style.gridTemplateRows = "1fr ".repeat(count[1]);

let selected_type = "block-player"; // block-player | block-end | block-wall | block

let is_player_present = false;

let block_select_wall = document.getElementById("select-block-wall");
let block_select_end = document.getElementById("select-block-end");
let block_select_player = document.getElementById("select-block-player");
let block_select_erase = document.getElementById("select-block-erase");

function select_type(type) {
	let previous_block_select = document.getElementById("select-" + selected_type);
	previous_block_select.className = `select-block select-${selected_type}`;

	let block_select = document.getElementById("select-" + type);
	block_select.className = `select-block-selected select-${type}`;
	selected_type = type;
}

function clicked(id, event) {
	let button = document.getElementById(id);
	if (button.className == "block-player" || button.className == "block-end" && selected_type != "player-block") {
		document.getElementById(`select-${button.className}`).disabled = false;
	}
	button.className = selected_type;
	if (selected_type == "block-player" || button.className == "block-end") {
		document.getElementById(`select-${button.className}`).disabled = true;
		select_type('block-wall');
	}
	return button;
}

for (let x = 1; x <= count[0]; x++) {
	for (let y = 1; y <= count[1]; y++) {
		let button = document.createElement("button");
		button.id = `${x},${y}`;
		button.className = "block";
		button.onclick = x => clicked(button.id, x);
		buttons.push(button);
		child_container.append(button);
	}
}

