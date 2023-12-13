class Product {
    #buku; 
    #harga;
    
    constructor(buku, harga) {
        this.#buku = buku;
        this.#harga = harga;
    }

    get buku() {
        return this.#buku
    }

    set buku(newBuku) {
        this.#buku = newBuku;
    }

    get harga() {
        return this.#harga;
    }

    set harga(newHarga) {
        this.#harga = newHarga;
    }
    displayInfo() {
        console.log(Nama Produk: ${this.#buku})
        console.log(Harga Produk: ${this.#harga})
    }

     determineHargaCategory() {
        if (this.#harga < 50.000) {
            return 'Murah';
        } else if (this.#harga >= 50.000 && this.#harga < 100.000) {
            return 'Sedang';
        } else {
            return 'Mahal';
        }
    }
} 

const product = new Product('buku',25);

console.log(Nama Produk: ${product.name}, Harga Produk: ${product.harga});

product.harga =45;

console.log(Nama Produk: ${product.name}, Harga Produk ${product.harga});

console.log(Harga Produk: ${product.determineHargaCategory()})

product.harga = 100
product.displayInfo()
console.log(Harga Produk: ${product.determineHargaCategory()})