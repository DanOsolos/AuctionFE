import {
    Login
} from'../model/login' 

export class InterfaceUtil{
static getEmptyLoginInterface(): Login{
return {
    email: '',
    password: ''
}
}
}
