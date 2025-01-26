#!/usr/bin/env node

import { Command } from "commander";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import { sandbox } from "./sandbox";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(`${__dirname}/../package.json`, "utf8"));

const program = new Command();
program.name(pkg.name).description(pkg.description).version(pkg.name);

program
  .command("sandbox")
  .description("Testing")
  .action(async () => {
    await sandbox();
  });

program.parse(process.argv);
