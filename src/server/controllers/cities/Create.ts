import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICity {
	name: string;
  state: string;
}

const bodySchema: yup.Schema<ICity> = yup.object().shape({
	name: yup.string().required().min(3),
	state: yup.string().required().min(3)
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
	let validatedData: ICity | undefined = undefined;


	try {
		validatedData = await bodySchema.validate(req.body, {abortEarly: false});
	} catch (error) {
		const yupError = error as yup.ValidationError;

		const errors: Record<string, string> = {};

		
		yupError.inner.forEach(error => {
			if (!error.path) return;

			errors[error.path] = error.message;
		}); 

		return res.status(400 ).json({
			errors
		});
	}
	

	return res.send(validatedData);
};