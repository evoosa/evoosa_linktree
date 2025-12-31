# evoosa's linktree

## How to Build

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Build for production:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

The build output will be in the `build/` folder. Upload the contents to your hosting service (e.g., S3).

