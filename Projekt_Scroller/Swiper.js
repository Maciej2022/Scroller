class Swiper {
    constructor() {
        this.initialY = null;
        this.initialX = null;

        document.addEventListener('touchstart', this.startTouch);
        document.addEventListener('touchmove', this.moveTouch);
    }

    startTouch(event) {
        event.preventDefault();

        this.initialX = event.touches[0].clientX;
        this.initialY = event.touches[0].clientY;
    }

    moveTouch(event) {
        if(this.initialX || this.initialY) return;

        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;

        const diffX = this.initialX - currentX;
        const diffY = this.initialY - currentY;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            
        }
    }
}

new Swiper();