const express = require("express")
const router = express.Router()
const { getPost, createPost, deletePost, updatePost } = require("../controllers/posts")

router.get("/", getPost)
router.post("/", createPost)
router.delete("/delete/:id", deletePost)
router.patch('/update/:id', updatePost)

module.exports = router