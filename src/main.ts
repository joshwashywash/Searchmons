import './app.postcss';
import App from './App.svelte';
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
});

const app = new App({
  target: document.body
});

export default app;
