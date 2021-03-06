/**
 * The Arrow Mob Class
 * @extends {Mob}
 */
class ArrowMob extends Mob {

    /**
     * The Arrow Mob constructor
     * @param {Object} data
     */
    constructor(data) {
        super();

        this.name      = "Arrow";
        this.slogan    = "Fast and furious";
        this.text      = "Fast in straight lines, slow in curves";
        this.color     = "rgb(207, 99, 99)";

        this.interval  = 600;
        this.amount    = 10;
        this.bosses    = 1;
        this.lifeMult  = 0.8;
        this.baseSpeed = 2;
        this.money     = 1;
        this.defense   = 0;
        this.isArrow   = true;
        this.content   = `
            <div class="arrowHead"></div>
            <div class="arrowTail"></div>
        `;

        this.init(data);
    }



    /**
     * Changes the speed of the mob depending on whether is in a straight line or turning
     * @param {Number}  time
     * @param {Boolean} newCell
     * @param {Boolean} turned
     * @returns {Void}
     */
    specialPower(time, newCell, turned) {
        if (newCell) {
            this.counter += 1;
            if (this.count > 1) {
                this.actualSpeed = this.speed;
            }
        }
        if (turned) {
            this.counter = 0;
            this.actualSpeed = this.speed / 2;
        }
    }
}
