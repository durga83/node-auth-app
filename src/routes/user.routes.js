const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { hello } = require('../controllers/user.controller');

const router = express.Router();

/**
 * @swagger
 * /api/user/hello:
 *   get:
 *     summary: Protected route that returns a greeting message
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized, missing or invalid token
 */
router.get('/hello', authMiddleware, hello);

module.exports = router;
