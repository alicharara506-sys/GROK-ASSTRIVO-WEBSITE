/** True only when the GPU can create a hardware WebGL context. Software
 *  renderers often clear to opaque black and composite above HTML. */
export function canRenderWebGLScene(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const options: WebGLContextAttributes = {
      failIfMajorPerformanceCaveat: true,
      alpha: true,
    };
    const gl = (canvas.getContext("webgl2", options) ||
      canvas.getContext("webgl", options)) as WebGLRenderingContext | null;
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    if (info) {
      const renderer = gl.getParameter(info.UNMASKED_RENDERER_WEBGL);
      if (
        typeof renderer === "string" &&
        /swiftshader|llvmpipe|softpipe|microsoft basic render|cpu/i.test(
          renderer,
        )
      ) {
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
}

export const hasWebGL = canRenderWebGLScene;
