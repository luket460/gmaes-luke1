/**
 * The Fast Ammo Class
 * @extends {Ammo}
 */
class FastAmmo extends Ammo {

    /**
     * The Fast Ammo constructor
     * @param {Tower}  tower
     * @param {Array}  targets
     * @param {Number} boardSize
     */
    constructor(tower, targets, boardSize) {
        super();

        this.center      = 3.5;
        this.rotateTower = true;
        this.rotateAmmo  = false;
        this.className   = "fastAmmo";
        this.spinAngle   = 0;

        this.init(tower, targets, boardSize);
    }

    /**
     * Moves the ammo according to the given time. Returns true if it reached the target
     * @param {Number} time
     * @returns {Boolean}
     */
    move(time) {
        this.changeAngle();
        this.changePos(time);
        this.changeDisplay();
        this.spin();

        if (this.decTimer(time)) {
            this.destroy();
            return true;
        }
        return false;
    }

    /**
     * Spins the ammo
     * @returns {Void}
     */
    spin() {
        this.spinAngle += 5;
        this.element.style.transform = Utils.rotate(this.spinAngle);
    }
}
