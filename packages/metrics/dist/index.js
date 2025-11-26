// src/index.ts
var Insight = class {
  constructor() {
  }
  init() {
    window.addEventListener("error", (e) => {
      console.log("Error:", e);
    });
  }
};
export {
  Insight
};
