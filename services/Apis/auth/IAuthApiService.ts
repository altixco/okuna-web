import { AxiosResponse } from '~/node_modules/axios';
import { UserData } from '~/types/models-data/auth/UserData';
import {
    GetUserApiParams,
    LoginApiParams,
    LoginResponse,
    RegistrationApiParams,
    RegistrationResponse,
    RequestResetPasswordApiParams, ResetPasswordApiParams, SearchUsersApiParams
} from '~/services/Apis/auth/AuthApiServiceTypes';

export interface IAuthApiService {

    login(data: LoginApiParams): Promise<AxiosResponse<LoginResponse>>;

    register(data: RegistrationApiParams): Promise<AxiosResponse<RegistrationResponse>>;

    resetPassword(data: ResetPasswordApiParams): Promise<AxiosResponse<void>>;

    requestResetPassword(data: RequestResetPasswordApiParams): Promise<AxiosResponse<void>>;

    getAuthenticatedUser(): Promise<AxiosResponse<UserData>>;

    getUser(params: GetUserApiParams): Promise<AxiosResponse<UserData>>;

    searchUsers(params: SearchUsersApiParams): Promise<AxiosResponse<UserData[]>>;
}
