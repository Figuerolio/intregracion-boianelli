import { Router } from 'express';

import config from '../config.js';
import collectionModel from '../dao/models/collection.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).send({ origin: config.SERVER, payload: 'GET' });
    } catch (err) {
        res.status(500).send({ origin: config.SERVER, payload: null, error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        res.status(200).send({ origin: config.SERVER, payload: 'POST' });
    } catch (err) {
        res.status(500).send({ origin: config.SERVER, payload: null, error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        res.status(200).send({ origin: config.SERVER, payload: 'PUT' });
    } catch (err) {
        res.status(500).send({ origin: config.SERVER, payload: null, error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.status(200).send({ origin: config.SERVER, payload: 'DELETE' });
    } catch (err) {
        res.status(500).send({ origin: config.SERVER, payload: null, error: err.message });
    }
});

export default router;