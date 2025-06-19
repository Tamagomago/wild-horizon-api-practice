## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

### Optional (but recommended)

If you want auto-restarting during development, install `nodemon` globally or locally:

```bash
# Global installation 
npm install -g nodemon

# OR local installation 
npm install --save-dev nodemon
```

### Running the API

You can run the Wild Horizons API in two ways:

1. **Development mode with `nodemon`** (auto-restarts on file changes):
   ```bash
   npm run dev
   ```

2. **Start the server normally**:
   ```bash
   npm start
   ```

> Make sure `nodemon` is installed if using the dev mode.