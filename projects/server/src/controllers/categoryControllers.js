const db = require("../models")
const category = db.Category
const {Op, Sequelize} = require('sequelize')

module.exports = {
    getCategory : async(req,res)=>{
        try {
            const result = await category.findAll({attributes:["id","Category"]})
            res.status(200).send(result)
        } catch (error) {
            console.log(error);
            res.status(400).send({error, msg:"Failed to get category"})
        }
    },
    addCategory: async(req,res)=>{
        try {
            const {Category} = req.body
            const result = await category.create({Category})
            res.status(200).send("Success to add category")
        } catch (error) {
            res.status(400).send({error, msg:"Failed to add category"})
        }
    },
    editCategory: async(req,res)=>{
        try {
            const {Category} = req.body
            const id = req.params.id
            console.log(req.params.id);
            const result = await category.update(
                {Category},
                {where:{id:id}}
            )
            res.status(200).send("Success to edit category")
        } catch (error) {
            res.status(400).send({error, msg:"Failed to edit category"})
        }
    },
    deleteCategory: async(req,res)=>{
        try {
            const id = req.params.id
            const result = await category.update(
                {isDeleted : true},
                {where:{id:id}}
            )
            res.status(200).send("Success to delete category")
        } catch (error) {
            res.status(400).send({error, msg:"Failed to delete category"})
        }
    },
}