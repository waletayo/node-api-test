import Product from "./product.model";
import {BAD_REQUEST, CATCH, CREATED, FETCH, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, SUCESS} from "../../util/status-code";

/**
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {function} next The callback to the next program handler
 * @return {Object} res The response object
 */
exports.createProduct = (req, res, next) => {
    console.log(req.file);
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        color: req.body.color,
        category: req.body.category,
        productImage: req.file.path
    });
    product.save()
        .then(saveProduct => {
            if (!saveProduct) {
                return res.status(BAD_REQUEST).json({
                    status: false,
                    message: CATCH,

                })
            } else {
                res.status(CREATED).json({
                    status: true,
                    message: SUCESS,
                    data: saveProduct
                })
            }
        }).catch(error => {
        return res.status(INTERNAL_SERVER_ERROR).json({
            status: false,
            message: CATCH,
            data: error
        })
    })

};

/**
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {function} next The callback to the next program handler
 * @return {Object} res The response object
 */
exports.getAllProduct = (req, res, next) => {
    Product.find()
        .select("name price ")
        .then(products => {
            if (!products) {
                return res.status(NOT_FOUND).json({
                    status: false,
                    message: FETCH,
                })
            } else {
                return res.status(OK).json({
                    status: true,
                    message: SUCESS,
                    data: products
                })
            }
        }).catch(error => {
        return res.status(INTERNAL_SERVER_ERROR).json({
            status: false,
            message: CATCH,
            data: error
        })
    })

};


/**
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {function} next The callback to the next program handler
 * @return {Object} res The response object
 */


exports.getProductById = (req, res, next) => {
    Product.findById({_id: req.params.id})
        .then(product => {
            if (!product) {
                return res.status(NOT_FOUND).json({
                    status: false,
                    message: FETCH,
                })
            } else {
                return res.status(OK).json({
                    status: true,
                    message: SUCESS,
                    data: product
                })
            }
        }).catch(error => {
        return res.status(INTERNAL_SERVER_ERROR).json({
            status: false,
            message: CATCH,
            data: error
        })
    })
};


