# Spinning Cube

A small demo app that renders an interactive Three.js scene with React, TypeScript, and Vite. The canvas showcases a gently spinning cube along with grid and axis helpers so you can explore the scene with orbit controls.

## Features
- **Real-time 3D canvas** powered by `@react-three/fiber`, complete with ambient and directional lighting plus an HDRI environment from `@react-three/drei`.
- **Interactive controls** including an OrbitControls rig for panning/zooming and HUD buttons rendered with `Html` overlays. The primary button pauses and resumes the cube animation at runtime.
- **Reusable scene objects** split into a `BasicScene` wrapper and a `SpinningBox` component that owns its rotation and scale animation logic.

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the Vite dev server:
   ```bash
   npm run dev
   ```
   The app will be available at the URL printed in the terminal.

## Available scripts
- `npm run dev` – Start the development server with hot module reloading.
- `npm run build` – Type-check and emit a production build.
- `npm run preview` – Preview the production build locally after running `npm run build`.
- `npm run lint` – Run ESLint across the project.

## Project structure
- `src/App.tsx` – Bootstraps the canvas, lighting, orbit controls, and HUD interactions.
- `src/scene/BasicScene.tsx` – Adds scene helpers and mounts the spinning cube mesh.
- `src/components/SpinningBox.tsx` – Encapsulates the cube geometry, material, and animation loop using `useFrame`.

## Customization tips
- Adjust the camera position or field of view inside `App.tsx` to change the default vantage point.
- Swap in different helpers or meshes in `BasicScene` to experiment with other Three.js primitives.
- Tweak rotation speed, scale, or color by editing the `useFrame` callback and material props in `SpinningBox`.

## License
This project inherits the default licensing of the original template. Add your own license file if you plan to distribute it.
