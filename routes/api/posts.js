const express = require('express');
const router = express.Router();
//Post model
const Posts = require('../../models/Post');


// @routes GET api/posts
// @desc GET ALL post
router.get('/', async (req, res) => {
	try {
		const post = await Posts.find();
		if (!post) throw Error('No items');
		res.status(200).json(post);
	} catch (e) {
		res.status(400).json({msg: e})
	}
})


// @routes POST api/posts
// @desc create an post
router.post('/', async (req, res) => {
	//res.send('Lets create post');
	//console.log(req.body);
	const newPost = new Posts(req.body);
	try {
		const post = await newPost.save();
		if (!post) throw Error('Something went wrong  while saveing the post');
		res.status(200).json(post);
	} catch (e) {
		res.status(400).json({msg: e})
	}
})


// @routes DELETE api/posts/:id
// @desc delete an post
router.delete('/:id', async (req, res) => {
	try {
		const post = await Posts.findOneAndDelete(req.params.id);
		if (!post) throw Error('No post found!');
		res.status(200).json({success: true});
	} catch (e) {
		res.status(400).json({msg: e})
	}

})


// @routes UPDATE api/posts/:id
// @desc update an post
router.patch('/:id', async (req, res) => {

	try {
		const post = await Posts.findOneAndDelete(req.params.id, req.body)
		if (!post) throw Error('Something went wrong while updating the post');
		res.status(200).json({success: true});
	} catch (e) {
		res.status(400).json({msg: e})
	}
})


// @routes GET api/posts;:id
// @desc GET an post
router.get('/:id', async (req, res) => {
	try {
		const post = await Posts.findById(req.params.id);
		if (!post) throw Error('No items');
		res.status(200).json(post);
	} catch (e) {
		res.status(400).json({msg: e})
	}
})
module.exports = router;

