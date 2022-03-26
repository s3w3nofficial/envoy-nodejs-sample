import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port = 3000;

const myLogger = function (req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl)
  next()
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(myLogger)

const router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

router.get("/test", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  })
})

app.use('/test-service/api/:version/', router)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}