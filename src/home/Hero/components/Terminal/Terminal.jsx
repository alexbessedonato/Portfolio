import React from "react";
import { ReactTerminal } from "react-terminal";
import { commands } from "./constants/terminalCommands";

export const Terminal = () => {
  return (
    <div className="h-full overflow-auto">
      <ReactTerminal
        className="h-full"
        welcomeMessage="Welcome to my Macintosh 2010 themed portfolio! "
        showControlButtons={false}
        commands={commands}
        theme="material-light"
        errorMessage="command was not found. use -help to see commands"
      />
    </div>
  );
};