#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program.name("practice-cli").description("A simple cli setup").version("0.0.0");

program
  .command("greet")
  .description("Greet a provided name")
  .argument("<name>", "the name to be greeted")
  .action((name: string) => console.log(`Hello ${name}`));

program.parse();
