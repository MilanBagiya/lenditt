export interface IDataList {
    name?: string;
    creation_date?: Date;
    type?: Type;
}

export enum Type {
    User = "user",
    Admin = "admin"
}