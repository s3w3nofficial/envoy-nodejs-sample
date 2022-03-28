import { IONObject } from "./ion-object.model";

export interface Collection<T extends IONObject> extends IONObject {
  value: T[]
}