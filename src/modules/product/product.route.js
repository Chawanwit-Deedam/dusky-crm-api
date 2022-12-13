import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import ProductController from './controllers/product.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { DeleteProductDto } from './dto/delete-product.dto.js';


const ProductRouter = express.Router()
const validator = createValidator({})

ProductRouter.get('/', ProductController.getProduct)
ProductRouter.get('/:id', ProductController.getProductById)
ProductRouter.post('/', validator.body(CreateProductDto), ProductController.createProduct)
ProductRouter.patch('/:id', validator.body(UpdateProductDto), ProductController.updateProduct)
ProductRouter.delete('/', validator.body(DeleteProductDto), ProductController.deleteProductById)

export default ProductRouter