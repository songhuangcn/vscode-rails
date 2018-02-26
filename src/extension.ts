'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { dirname, join, basename } from 'path';
import {RailsHelper}  from './rails_helper';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "rails" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('rails-nav', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        //vscode.window.showInformationMessage('Hello World!');
        if(!vscode.window.activeTextEditor) {
            return;
        }

        var relativeFileName = vscode.workspace.asRelativePath(vscode.window.activeTextEditor.document.fileName);
      
        var line = vscode.window.activeTextEditor.document.lineAt(vscode.window.activeTextEditor.selection.active.line).text

        var rh = new RailsHelper(relativeFileName, line);
        rh.showFileList();
    });

    context.subscriptions.push(disposable);
}
// this method is called when your extension is deactivated
export function deactivate() {
}