/**
 * LoginInfo interface with email and password fields
 */
export interface LoginInfo
{
    /**
     * email property of type string
     */
    email:string;
    /**
     * password property of type string
     */
    password:string;
}
/**
 * User interface with necessary fields
 */
export interface User extends LoginInfo
{
    /**
     * name property of type string
     */
    name:string;
    /**
     * profilePic property of type string
     */
    profilePic?:string;
    /**
     * phone Number property of type string
     */
    phoneNumber:string;
    /**
     * aadhaarId property of type string
     */
    aadhaarId:string;
    /**
     * userBookings property of any type which can be nullable
     */
    userBookings?:any;
}

/**
 * LoggedInDetails interface with user and token for authentication
 */
export interface LoggedInDetails
{
    /**
     * user property of type User
     */
    user:User;
    /**
     * token property of type string
     */
    token:string;
}