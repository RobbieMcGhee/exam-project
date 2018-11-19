class LineItem{
    constructor(product, quantity, price){
        this.product = product;
        this.quantity = quantity;
        this.price = price;        
    } 
    
    createHTML(){
     return "<h1 class='item'>" + this.product.type + "</h1>";
    }
}