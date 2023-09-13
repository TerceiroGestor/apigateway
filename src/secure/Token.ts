import jwt from 'jsonwebtoken';

export class Token {

    private readonly key: string = process.env.JWT_SECRET || '';
    private readonly sensitiveKeys: string[] = ['password', 'id', 'cpf', 'rg'];

    public async generateToken(data: any, exp: any) {

        try {
            const datafilter = await this.dataFilter(data);
            const token = jwt.sign(datafilter, this.key, { expiresIn: exp });
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
                    Object.assign(data, { isvalid: true });
                    resolve({ validate: true, message: 'Success in validating token!', data });
                }
            });
        });

    }

    public async dataFilter(data: any) {

        const permitted: Record<string, string> = {};
        const prohibited: Record<string, string> = {};

        for (const key in data) {
            if (data.hasOwnProperty(key)) {

                if (this.sensitiveKeys.includes(key)) {
                    prohibited[key] = data[key];
                } else {
                    permitted[key] = data[key];
                }

            }

        }

        return permitted;
    }
}
