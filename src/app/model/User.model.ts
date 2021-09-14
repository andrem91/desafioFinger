import { Address } from "./address.model";
import { Company } from "./company.model";

export class User {
  public id?: number;
  public name?: string;
  public email?: string;
  public address: Address = new Address();
  public company: Company = new Company();

}
