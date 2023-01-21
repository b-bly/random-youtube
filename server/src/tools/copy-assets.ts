import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "./client/src/assets", "./dist/" );
// shell.cp("-R", "../client/dist", "client/dist/")