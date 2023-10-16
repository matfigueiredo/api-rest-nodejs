import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  
	return res.send('Hello World!');
});

router.post('/post', (req,res) => {

	return res.status(201).json(req.body);
});




export { router };