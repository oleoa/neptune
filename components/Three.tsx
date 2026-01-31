"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

interface ThreeJsWallpaperProps {
  className?: string;
}

export default function ThreeJsWallpaper({
  className = "",
}: ThreeJsWallpaperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const clockRef = useRef(new THREE.Clock());
  const animationRef = useRef<number>(0);

  // Create circular sprite texture so points render as round "balls"
  const createCircleTexture = () => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, size, size);

    const center = size / 2;
    const radius = size / 2;

    const gradient = ctx.createRadialGradient(
      center,
      center,
      radius * 0.1,
      center,
      center,
      radius,
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,0.9)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    return texture;
  };

  const initScene = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x112f44, 0.035);
    sceneRef.current = scene;

    // Camera (fixed)
    const camera = new THREE.PerspectiveCamera(
      45,
      rect.width / rect.height,
      0.1,
      100,
    );
    camera.position.set(0, 0, 12);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(rect.width, rect.height);
    renderer.setClearColor(0x112f44, 1);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x216686, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x36b0df, 0.9);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Particles
    const particleCount = 900;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color("#112f44");
    const colorB = new THREE.Color("#216686");
    const colorC = new THREE.Color("#36b0df");

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Random position
      positions[i3 + 0] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;

      // Blend between three colors
      const t = Math.random();
      const u = Math.random() * (1 - t);
      const v = 1 - t - u;

      colors[i3 + 0] = colorA.r * t + colorB.r * u + colorC.r * v;
      colors[i3 + 1] = colorA.g * t + colorB.g * u + colorC.g * v;
      colors[i3 + 2] = colorA.b * t + colorB.b * u + colorC.b * v;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3),
    );

    // Circular sprite texture for round particles
    const circleTexture = createCircleTexture();

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      map: circleTexture || undefined,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height);
    });
    resizeObserver.observe(canvas);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const elapsed = clockRef.current.getElapsedTime();

      // Faster particle drift, independent of mouse
      const posAttr = particlesRef.current!.geometry.attributes
        .position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const z0 = posAttr.getZ(i);
        posAttr.setZ(i, z0 + Math.sin(elapsed * 0.9 + i * 0.06) * 0.01);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  useEffect(() => {
    initScene();

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [initScene]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-screen h-screen z-[-1] ${className}`}
    />
  );
}
