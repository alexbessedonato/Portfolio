import React from "react";
import { ReactTerminal } from "react-terminal";
import { commands } from "./constants/terminalCommands";

export const Terminal = () => {
  return (
    <div className="px-8 pb-12 mt-12">
      <ReactTerminal
        className="px-40 pb-50"
        welcomeMessage="Welcome to my Macintosh 2010 themed portfolio! "
        showControlButtons={false}
        commands={commands}
        theme="material-light"
        errorMessage="command was not found. use -help to see commands"
      />
    </div>
  );
};
