export default {
  async fetch(request, env) {
    // Serve the static calculator files through the Cloudflare Assets binding.
    return env.ASSETS.fetch(request);
  }
};
