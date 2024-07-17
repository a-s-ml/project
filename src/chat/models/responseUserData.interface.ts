import { responseUserInterface } from "./responseUser.nterface";

export class responseUserDataInterface {
    query_id?: string | null;
    user: responseUserInterface;
    auth_date: string; 
}
