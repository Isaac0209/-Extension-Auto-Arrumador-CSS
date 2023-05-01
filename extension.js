// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	
	let comando = vscode.commands.registerCommand('ARC.arrumar', () => {
		// @ts-ignore
		const editor = vscode.window.activeTextEditor;
		var positions = posicoes(";")
		var positions1 = posicoes("{")
		var positions2 = posicoes("}")

		editor.edit((editbuilder) => {
		  	for(var i = 0; i<positions.length; i++){
				editbuilder.insert(positions[i], "\n")			
		  	}
			for(var i = 0; i<positions1.length; i++){
				editbuilder.insert(positions1[i], "\n")			
	  		}
			for(var i = 0; i<positions2.length; i++){
				editbuilder.insert(positions2[i], "\n")			
			}
		});
		  context.subscriptions.push(comando);

		})

}
function posicoes(letra) {
	const editor = vscode.window.activeTextEditor;
		if (editor) {
		  const searchString = letra;
		  const doc = editor.document;
		  const positions = [];
		  for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
			const line = doc.lineAt(lineIndex);
			let charIndex = line.text.indexOf(searchString);
			while (charIndex !== -1) {
			  positions.push(new vscode.Position(lineIndex, charIndex + 1));
			  charIndex = line.text.indexOf(searchString, charIndex + 1);
			}
		  }
		  return positions;
		}
		
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
