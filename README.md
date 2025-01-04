# **JadeUI**
**Lit based opensource UI component**

* This project is not avaliable to use. It's on Develop.
---

## **Scripts**

The following scripts are defined in the `package.json` file. These commands help with development, building, and previewing the project.

### **Available Commands**

- **`npm start`**  
  Starts the development server using Vite with the configuration located at `config/vite.config.js`.  
  - This is equivalent to running `npm run dev`.  
  - Once started, the project will be accessible in your browser at [http://localhost:5173](http://localhost:5173).

- **`npm run dev`**  
  Starts the Vite development server, similar to `npm start`.  
  - Hot Module Replacement (HMR) is enabled, allowing real-time updates during development.

- **`npm run build`**  
  Builds the project for production.  
  - The output is optimized and saved to the `dist/` directory.  
  - This uses the Vite build process, configured in `config/vite.config.js`.

- **`npm run preview`**  
  Serves the built files from the `dist/` directory in a local server.  
  - Useful for testing the production build locally before deployment.  
  - The preview server is accessible at [http://localhost:5173](http://localhost:5173).

- **`npm test`**  
  Placeholder for running tests.  
  - Currently, it outputs an error message indicating no tests are specified.

---

## **How to Use**

### **Install Dependencies**  
Install all required dependencies with the following command:

```bash
npm install
```

### **Run the Development Server**  
To start a local development server, use:

```bash
npm start
```

or:

```bash
npm run dev
```

### **Build for Production**  
Create an optimized production build:

```bash
npm run build
```

### **Preview the Production Build**  
Preview the production build locally to ensure everything is working as expected:

```bash
npm run preview
