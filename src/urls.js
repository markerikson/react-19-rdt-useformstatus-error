// The DevTools server is hardcoded to use `/recording/` as a base path
const isDevtoolsUrl = window.location.pathname.includes("recording");
export const basePath = isDevtoolsUrl
  ? "/recording/test/examples/rdt-react-19/dist/index.html"
  : "/";
export const makeRelativePath = path => (isDevtoolsUrl ? `${basePath}/${path}` : path);
