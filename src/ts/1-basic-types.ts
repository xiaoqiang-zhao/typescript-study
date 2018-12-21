let isDone: boolean = false;

export default {
    isDone,
    getStr() {
        this.isDone = !this.isDone;
        if (!this.isDone) {
            return 'true';
        }
        else {
            return 'false'
        }
    }
}
