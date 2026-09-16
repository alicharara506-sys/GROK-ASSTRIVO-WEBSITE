import * as THREE from "three";

let texture: THREE.CanvasTexture | null = null;

export function getGlowTexture(): THREE.CanvasTexture {
  if (texture) return texture;

  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not create glow texture");
  }

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(255, 230, 255, 0.95)");
  gradient.addColorStop(0.18, "rgba(255, 80, 200, 0.55)");
  gradient.addColorStop(0.45, "rgba(155, 92, 255, 0.18)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
