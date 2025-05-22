A simple CLI setup to practice command-line development.

### Setup

1. Install dependencies

```bash
pnpm install
```

2. Build the project

```bash
pnpm build
```

3. Link globally for development

```bash
pnpm link --global
```

Now you can run `practice` from anywhere.

### Usage

Available commands:

```bash
# Show help
practice --help

# Greet someone
practice greet John
```

### Development

Watch mode (rebuilds on file changes):

```bash
pnpm dev
```

Run locally without global link:

```bash
pnpm start
```

### Cleanup

When you're done developing, remove the global link:

```bash
pnpm uninstall --global practice-cli
```

### Project Structure

- `src/index.ts` - Main CLI entry point with shebang
- `dist/` - Compiled JavaScript output (gitignored)
- `package.json` - Defines the `practice` binary command
