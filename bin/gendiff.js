#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number');
program.parse();
