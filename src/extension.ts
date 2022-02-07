import * as vscode from 'vscode';
import RemessaParser from './RemessaParser';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('febraban-viewer.openRemessa', () => {
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;

		if (editor) {
			let document = editor.document;
			let selection = new vscode.Selection(document.positionAt(0), document.positionAt(document.getText().length));

			// Get selected text
			let text = document.getText(selection);

			// Create parser
			let parser = new RemessaParser(text);
			let linhas = parser.getLinhas();

			// linhas.forEach(linha => {
			// 	console.log(linha.getLinha());
			// });

			const linhasFormatadas = linhas.map(linha => (linha.getTableRow()));

			console.log(linhasFormatadas.join(''));

			// let formatter = new TableWriter();
			// let formattedResult = formatter.getFormattedTable(records, settings.upperCaseHeader, settings.markdownFormat);

				
			// // Open new window
			// async () => {
			// 	let newDoc = await vscode.workspace.openTextDocument({
			// 		content: linhasFormatadas.join('')
			// 	});

			// 	vscode.window.showTextDocument(newDoc, vscode.ViewColumn.Active);
			// };
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
