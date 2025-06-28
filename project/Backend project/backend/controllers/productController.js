import database from "../config/db.js"

export const getAllProducts = async (req, res) => {
    try {
        const response = await database.query(`SELECT * FROM products ORDER BY create_at DESC`);
        console.log(`fetched data successfully: ${response.rows}`);
        res.status(200).json({ success: true, message: response.rows});
    } catch (error) {
        console.log(`This is error from productController.js (getAllProducts) ${error.message}`)
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}
export const createProducts = async (req, res) => {
    const {name, price, image} = req.body;
    console.log(name)
    if(!name || !price || !image){
        return res.status(400).json({success: false, message: "All fields are required"});
    }
    try {
        const response = await database.query("INSERT INTO products (name, image, price) VALUES ($1, $2, $3) RETURNING *",[name, image, price]);
        console.log(`Date Inserted successfully.Data: ${response}`);
        res.status(201).json({ success: true, message: response.rows[0]});
    } catch (error) {
        console.log(`This is error from productController.js (createProducts) ${error}`);
        res.status(500).json({success: false, message:  "Internal Server Error"});
    }
}
export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await database.query(`SELECT * FROM products WHERE id = ${id}`);
        res.status(200).json({success: true, message: response.rows[0]});
    } catch (error) {
        console.log(`This is error from productController.js (getProduct) ${error}`);
        res.status(500).json({success: false, message:  "Internal Server Error"});
    }
}
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {name, price, image} = req.body;
    try {
        const response = await database.query("UPDATE products SET name=$1,image=$2 ,price=$3 WHERE id=$4 RETURNING *",[name,image,price,id]);
        if(response.length === 0){
            return res.status(404).json({success: false, message: "Product Not found"});
        }
        res.status(200).json({success: true, message: response.rows[0]})
    } catch (error) {
        console.log(`This is error from productController.js (updateProduct) ${error}`);
        res.status(500).json({success: false, message:  "Internal Server Error"});
    }
}
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await database.query("DELETE FROM products WHERE id=$1 RETURNING *",[id]);
        if (response.length === 0){
            return res.status(404).json({success: false, message: "product not found"})
        }
        res.status(200).json({success: true, message: response.rows[0]});
    } catch (error) {
        console.log(`This is error from productController.js (deleteProduct) ${error.message}`);
        res.status(500).json({success: false, message:  "Internal Server Error"});
    }
}

