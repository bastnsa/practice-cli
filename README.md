A simple CLI setup for practice projects.

### Setup

1. Install dependencies

```bash
pnpm install
```

2. Build the project (creates `dist/`)

```bash
# tsc
pnpm build
```

3. Link globally for usage

```bash
pnpm link --global
```

Now you can run `practice` from anywhere.

### Usage

Available commands:

```bash
# Display general usage
practice

# Greet someone
practice greet John
```

### Development

1. Start watch mode (rebuilds `dist/` on changes)

```bash
# tsc --watch
pnpm dev
```

2. Run project

```bash
# With global link
practice

# Without global link
pnpm start
```

### Cleanup

When you're done developing, remove the global link:

```bash
pnpm uninstall --global practice-cli
```
