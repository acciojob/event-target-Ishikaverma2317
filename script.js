class EventTarget {
    constructor() {
        // har event ke liye listeners store karenge
        this.listeners = {};
    }

    addEventListener(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        // duplicate listener na add ho
        if (!this.listeners[event].includes(callback)) {
            this.listeners[event].push(callback);
        }
    }

    removeEventListener(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(fn => fn !== callback);
        }
    }

    dispatchEvent(event) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(fn => fn());
        }
    }
}
