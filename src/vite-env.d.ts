/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    constructor(
      target: Element | Element[] | string | string[],
      options?: { type?: string; linesClass?: string }
    );
    revert(): void;
  }
}
