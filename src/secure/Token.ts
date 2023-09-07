import jwt from 'jsonwebtoken';

export class Token {

    private readonly key: string = process.env.JWT_SECRET || '';

    public async generateToken(data: any, exp: any) {

        try {
            const token = jwt.sign(data, this.key, { expiresIn: exp });
            return token;
        } catch (error) {
            console.error('Erro ao gerar o token JWT:', error);
            throw error;
        }
    }

    public async validateToken(token: string): Promise<{ validate: boolean; message: string; data?: any }> {

        return new Promise((resolve) => {
            jwt.verify(token, this.key, (error: any, data: any) => {
                if (error) {
                    resolve({ validate: false, message: 'Error validating token!' });
                } else {
                    resolve({ validate: true, message: 'Success in validating token!', data });
                }
            });
        });

    }
}
