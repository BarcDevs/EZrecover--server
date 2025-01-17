import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { csrfMiddleware } from '../middlewares/csrf'
import {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getReply,
    createReply,
    updateReply,
    getTags,
    getTag
} from '../controllers/FormController'

const router = Router()

router
    .route('/posts')
    .get(getPosts)
    .post(isAuthenticated, csrfMiddleware, createPost)

router
    .route('/posts/:postId')
    .get(getPost)
    .put(isAuthenticated, csrfMiddleware, updatePost)
    .delete(isAuthenticated, csrfMiddleware, deletePost)

router
    .route('/posts/:postId/reply')
    .post(isAuthenticated, csrfMiddleware, createReply)

router
    .route('/posts/:postId/reply/:replyId')
    .get(getReply)
    .put(isAuthenticated, csrfMiddleware, updateReply)
    .delete(isAuthenticated, csrfMiddleware, updateReply)

router.route('/tags').get(getTags)

router.route('/tags/:tagId').get(getTag)

export default router
