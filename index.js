var program = require("commander"),
	sys = require("sys");

program.version("0.0.1")
	.option("-i --init <name>", "Initializes a new template with the name <name>")
	.parse(process.argv);

console.log(program.args);
/*
	Folder structure:
	-- style.css - empty
	-- client.js - empty
	-- index.html - with standard content, style.css and client.js included
	create testjs --init

	In other folder:
	create testjs
	-> creates the file structure described above

	how about some kind of templating system?
*/