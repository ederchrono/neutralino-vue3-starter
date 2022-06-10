export { }

declare global {
  interface Window {
    Neutralino: { init: () => void }
  }
}
