function Vector2(x, y){

    this.x =typeof x !== 'undefined' ? x : 0; //if type of x is not equal to undefined, x will be x, otherwise it will be 0
    this.y =typeof y !== 'undefined' ? y : 0;

}