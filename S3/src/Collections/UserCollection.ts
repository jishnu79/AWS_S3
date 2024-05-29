const multer = require('multer')
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import env from 'dotenv'
env.config()

const BUCKET_NAME = process.env.BUCKET_NAME
const BUCKET_REGION = process.env.BUCKET_REGION
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY
const AWS_ACCEESS_KEY = process.env.AWS_ACCEESS_KEY
const s3 = new S3Client({
    credentials: {
        accessKeyId: AWS_ACCEESS_KEY,
        secretAccessKey: AWS_SECRET_KEY
    },
    region: BUCKET_REGION
});

interface MulterRequest extends Request {
    file: any;
}

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
// interface Foo { Bucket?: string, key: string, Body?: File,contentType?:String };
export const post = async (req: Express.Request, res: Express.Response) => {
    upload.single('image')
    const params: any = {
        Bucket: BUCKET_NAME,
        key: (req as MulterRequest).file.name,
        Body: (req as MulterRequest).file.buffer,
        contentType: (req as MulterRequest).file.mimetype
    }

    console.log((req as MulterRequest).file);
    const comand = new PutObjectCommand(params)
    await s3.send(comand)
} 