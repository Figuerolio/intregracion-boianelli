import { Router } from 'express';

import config from '../config.js';

const router = Router();

router.get('/view1', (req, res) => {
    res.render('view1', { data: data });
});

export default router;
