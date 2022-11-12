export interface LoginInfo
{
    email:string;
    password:string;
}
export interface User extends LoginInfo
{
    name:string;
    profileUrl:string;
    phoneNumber:string;
    aadharId:string;
}

//Created LoggedInDetails with user and token for authentication
export interface LoggedInDetails
{

    user:User;
    token:string;
}