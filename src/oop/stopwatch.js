function Stopwatch() {
  let startTime,
    endTime,
    duration,
    isRunning = false;

  this.start = () => {
    if (isRunning) throw new Error("Stopwatch has already been started");

    isRunning = true;
    startTime = new Date();
  };

  this.stop = () => {
    if (!isRunning) throw new Error("Stopwatch is already stopped.");

    isRunning = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    duration = 0;
    isRunning = false;
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}

