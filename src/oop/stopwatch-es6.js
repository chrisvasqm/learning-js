class Stopwatch {
  #startTime = null;
  #endTime = null;
  #duration = 0;
  #isRunning = false;

  start() {
    if (this.#isRunning) throw new Error("Stopwatch has already been started");

    this.#isRunning = true;
    this.#startTime = new Date();
  }

  stop() {
    if (!this.#isRunning) throw new Error("Stopwatch is already stopped.");

    this.#isRunning = false;
    this.#endTime = new Date();
    const seconds =
      (this.#endTime.getTime() - this.#startTime.getTime()) / 1000;
    this.#duration += seconds;
  }

  reset() {
    this.#startTime = null;
    this.#endTime = null;
    this.#duration = 0;
    this.#isRunning = false;
  }

  get duration() {
    return this.#duration;
  }
}
