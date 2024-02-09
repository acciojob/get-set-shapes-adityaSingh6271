class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}

	getArea(){
		return this._width * this._height;
	}
}

class square extends Rectangle {
	constructor(side) {
		super(side, side);
		this._side = side;
	}
	getPerimeter(){
		return 4 * this._side;   
	}
}


window.Rectangle = Rectangle;
window.square = Square;