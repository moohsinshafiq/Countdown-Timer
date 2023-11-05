class Countdown {
    start(seconds) {
        this.stop(); // stop any existing countdown
        const end = new Date().getTime() + seconds * 1000;
        this.timerId = setInterval(() => {
            const now = new Date().getTime();
            const distance = end - now;
            if (distance < 0) {
                console.log("Countdown finished!");
                this.stop();
            }
            else {
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                console.log(`Time remaining: ${minutes}m ${seconds}s`);
            }
        }, 1000);
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }
}
const countdown = new Countdown();
countdown.start(20); // start a countdown for 10 seconds
export {};
