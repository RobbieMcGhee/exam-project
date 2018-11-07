class Order {
    constructor(id, status, items){
        this.id = id;
        this.status = status;

        // TODO: Look if list is actually of type lineItem
        this.items = items;

    }

    getOrderFromStorage(){
        var orderJson = localStorage.getItem("order");

        if(orderJson){
            var orderRaw = JSON.parse(orderJson);
            
            var order = new Order(orderRaw.id, orderRaw.status, orderJson.items );

            return order;
        }
    }

    saveOrderToStorage(){
        // Save order to storage

        alert("Order saved");
    }
}