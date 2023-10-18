import { Router } from 'express';
import { CitiesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  
	return res.send('Hello World!');
});

router.post('/cities',CitiesController.createBodyValidator, CitiesController.create);




export { router };