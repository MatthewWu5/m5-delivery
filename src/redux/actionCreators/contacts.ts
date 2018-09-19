import { ACTIONS } from '../actionTypes'
import { requestContacts } from '@/request/api'

export function getContacts(payload: number) {
  return (dispatch: any) => {
    dispatch({
      type: ACTIONS.GET_CONTACTS,
      payload,
    })
  }
}

export function getContactsByPhoneNumber(phoneNumber: string) {
  return async (dispatch: any) => {
    const res = await requestContacts(phoneNumber)
    dispatch({
      type: ACTIONS.UPDATE_CONTACTS,
      payload: { phoneNumber, items: res.data },
    })
  }
}

export function setContactsEmail(payload: { id: number; email: string }) {
  return (dispatch: any, state: IStore.IRoot) => {
    dispatch({
      type: ACTIONS.SET_CONTACTS_EMAIL,
      payload,
    })
  }
}