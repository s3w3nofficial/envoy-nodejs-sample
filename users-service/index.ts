import express, { Application, Request, Response } from "express";
import { User } from "./models/user.model";

const app: Application = express();
const port = 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send([
    {
      name: 'test-user'
    } as User
  ])
});

app.use('/users/api/v:version/', router)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}