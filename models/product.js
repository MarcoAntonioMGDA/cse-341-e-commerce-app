const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
    constructor(title, isbn, price, description, author, pyear) {
        //this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.price = price;
        this.description = description;
        this.author = author;
        this.pyear = pyear;
    }

    save() {
        const db = getDb();
        return db.collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
        .collection('products')
        .find()
        .toArray()
        .then(products => {
          console.log(products);
          return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static findById(prodId) {
        const db = getDb();
        return db
        .collection('products')
        .find({_id: new mongodb.ObjectId(prodId)})
        .next()
        .then(product => {
            console.log(product);
            return product;
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Product;