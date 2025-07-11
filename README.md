
---

# 3D Portfolio

**3D Portfolio** is an immersive, scroll-based personal website built with **React Three Fiber**, **Three.js**, **GSAP**, and **Tailwind CSS**. It replaces the traditional portfolio with a cinematic, WebGL-powered experience that guides users through sections like Intro, About, Projects, and Contact using animated camera transitions and interactive 3D scenes.

---

## ✨ Features

* Scroll-triggered camera and scene animations using GSAP
* Real-time 3D rendering powered by React Three Fiber and Three.js
* Fully responsive layout using Tailwind CSS
* Modular scene structure for each portfolio section
* Optimized performance with lazy-loading and frustum culling
* Framer Motion transitions for content reveal animations
* Component-driven architecture for maintainability

---

## 🧱 Folder Structure

* `public/` – Static assets including 3D models and textures  
* `src/components/` – UI and 3D logic components  
* `src/scenes/` – Canvas-based scroll scenes (Intro, About, Projects, etc.)  
* `src/styles/` – Global styles and Tailwind configuration  
* `App.jsx` – Sets up canvas, scroll layers, and routing  
* `main.jsx` – Entry point for the React app

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```

git clone [https://github.com/LaeeqtheDev/3d-Portfolio.git](https://github.com/LaeeqtheDev/3d-Portfolio.git)
cd 3d-Portfolio

```

### 2. Install dependencies

```

npm install

```

### 3. Run the development server

```

npm run dev

```

Then open [http://localhost:3000](http://localhost:3000) in your browser to view the live project.

---

## 🧠 Customization Tips

* Replace 3D models in the `public/models` folder with `.glb` or `.gltf` files  
* Update camera movement and scene transitions inside each `scene/*.jsx` file  
* Modify colors and font styles using `tailwind.config.js`  
* Add more sections by creating new scenes and wiring them into the scroll layout  

---

## 🧑 Author

Made with 🚀 by [Syed Laeeq Ahmed](https://www.linkedin.com/in/syed-laeeq-ahmed/)

* 📬 Email: [laeeqahmed656@gmail.com](mailto:laeeqahmed656@gmail.com)  
* 🧑‍💻 GitHub: [github.com/LaeeqtheDev](https://github.com/LaeeqtheDev)

---

## 🌍 Deployment

* Frontend: Deploy via [Vercel](https://vercel.com) or [Netlify](https://netlify.com)  
* Hosting optimized for static WebGL sites with CDN support  

---

## 📄 License

Free to use for portfolio or educational purposes. Commercial or agency use requires attribution or permission from the author.

---

