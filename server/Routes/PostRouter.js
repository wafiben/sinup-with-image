const express=require('express');
const router=express.Router();
const {PostMovie,searchMovie,getMovies}=require('../Controllers/PostController')
const isAuth=require('../midelware/isAuth')
const upload = require('../midelware/uploads');

/* router.get('/',isAuth,getPosts)
router.post('/',isAuth,addPost) */
router.post('/s',PostMovie)
router.post('/',searchMovie)
router.get('/',getMovies)




module.exports=router
