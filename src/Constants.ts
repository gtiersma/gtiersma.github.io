// Excludes padding

import type { Instance, Props } from "tippy.js"

// This should match the width of #app in main.css
export const PAGE_WIDTH: number = 960

export const DEFAULT_TIPPY_PROPS: any = {
  duration: [500, 100],
  content: "",
  delay: [1000, 0],
  hideOnClick: false,
  followCursor: true,
  theme: "light",
  onShown: (instance: Instance<Props>) => {
    window.addEventListener("mousemove", function handler(e) {
      instance.hide()
      // @ts-ignore
      e.currentTarget?.removeEventListener(e.type, handler)
    })
  }
}