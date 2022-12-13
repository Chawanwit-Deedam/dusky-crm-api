import ProductService from '../services/product.service.js'
const ProductController = {
    getProduct: async (req, res) =>{
        const product = await ProductService.getAll()

        res.status(200).json({
            success: true,
            data: product
        })
    },
    getProductById: async (req, res) => {
        const { id } = req.params
        const product = await ProductService.getOne(id)

        res.status(200).json({
            success: true,
            data: product
        })
    },

    createProduct: async (req, res) => {
        ///const id = req.body.id
        const { productType, productName, productPrice } = req.body
        const created = await ProductService.create({ productType, productName, productPrice })
    
        res.status(201).json({
            success: true,
            data: created
        })
    },
    updateProduct: async (req, res) =>{
        const { id } = req.params
        const { productType, productName, productPrice } = req.body
        const updated = await ProductService.updateOne(id, { productType, productName, productPrice })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteProductById: async (req, res) => {
        const { id } = req.body
        const product = await ProductService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: product
        })
    },
}
export default ProductController