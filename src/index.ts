#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('practice-cli')
  .description('A simple CLI setup for practice projects')
  .version('0.0.0');

program
  .command('greet')
  .description('greet someone')
  .argument('<name>', 'name to be greeted')
  .action((name: string) => console.log(`Hello ${name}!`));

program.parse();
