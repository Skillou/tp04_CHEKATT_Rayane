export class Produit {
    public name: string;
    public quantity: number;
    public price: number;
    
    constructor(produit: Produit){
        this.name = produit.name;
        this.quantity = produit.quantity;
        this.price = produit.price;
    }
}