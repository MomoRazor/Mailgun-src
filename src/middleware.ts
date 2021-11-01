import { NextFunction, Request, Response } from 'express';
import { API_KEY } from './enviornment';

export const bouncer = (req: Request, res: Response, next: NextFunction) => {
    if (API_KEY) {
        console.log(req.headers.authorization);
        if (API_KEY === req.headers.authorization) {
            next();
        } else {
            console.error('Missing Token');
            res.status(401).end('Missing Token');
        }
    } else {
        next();
    }
};
