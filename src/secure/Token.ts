import jwt from 'jsonwebtoken';
import util from 'util';

export class Token {

    public async generateToken(data: any, exp: any) {

        try {
            const key = process.env.JWT_SECRET || '';
            const token = jwt.sign(data, key, { expiresIn: exp });
            return token;
        } catch (error) {
            console.error('Erro ao gerar o token JWT:', error);
            throw error;
        }
    }

    public async validateToken(key: any, token: any): Promise<{ validate: boolean; message: string; data?: any }> {

        return new Promise((resolve) => {
            jwt.verify(token, key, (error: any, data: any) => {
                if (error) {
                    resolve({ validate: false, message: 'Error validating token!' });
                } else {
                    resolve({ validate: true, message: 'Success in validating token!', data });
                }
            });
        });

    }
}
