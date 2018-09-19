import request from './index'
import { AxiosPromise } from 'axios'

export const requestLoginUrl = 'http://localhost:8081/react-ts/login'
export const requestPreLoginUrl = 'http://localhost:8081/react-ts/preLogin'
export const requestContactsUrl =
  'http://localhost:8081/react-ts/contacts?phone='

export const requestPreLoginInfo = (): AxiosPromise<PreLoginInfo> =>
  request.get(requestPreLoginUrl)

export const requestLogin = (
  username: string,
  password: string
): AxiosPromise<any> => request.post(requestLoginUrl)

export const requestContacts = (phoneNumber: string): AxiosPromise<any> =>
  request.get(requestContactsUrl + phoneNumber)
