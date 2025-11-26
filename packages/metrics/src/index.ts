export class Insight {
  constructor() {}

  init() {
    // promise
    // js error tracking
    window.addEventListener("error", (e) => {
      console.log("Error:", e);
    });
  }
}
