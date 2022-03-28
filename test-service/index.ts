import express, { Application, NextFunction, Request, Response } from "express";
import { Link } from "./models/hateoas/link.model";
import { TestCollection } from "./models/test-collection.model";
import { Test } from "./models/test.model";

const app: Application = express();
const port = 3010;

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
    self: {
      href: 'http://localhost:3000/test-service/api/v1/test',
      rel: [ 'collection' ]
    } as Link,
    value: [
      {
        self: {
          href: 'http://localhost:3000/test-service/api/v1/test',
          rel: [ 'item' ]
        } as Link,
        name: "test"
      } as Test
    ]
  } as TestCollection)
})

app.use('/test-service/api/v:version/', router)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}