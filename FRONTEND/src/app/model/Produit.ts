export class Produit {
    public name: string;
    public image: string;
    public quantity: number;
    public description: string;
    public price: number;
    
    constructor(produit: Produit){
        this.name = produit.name;
        this.image = produit.image;
        this.quantity = produit.quantity;
        this.description = produit.description;
        this.price = produit.price;
    }
}