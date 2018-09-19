import { handleActions, ReducerMap } from 'redux-actions'
import { ACTIONS } from '../actionTypes'

const All_CONTACTS: Contact[] = [
  {
    id: '1',
    name: {
      first: 'John',
      last: 'Doe'
    },
    phone: '555',
    email: 'john@gmail.com'
  },
  {
    id: '2',
    name: {
      first: 'Bruce',
      last: 'Wayne'
    },
    phone: '777',
    email: 'bruce.wayne@gmail.com'
  },
  {
    id: '3',
    name: {
      first: 'Bruce',
      last: 'Wayne'
    },
    phone: '777',
    email: 'bruce.wayne@gmail.com'
  }
]

export const contactInitState: IStore.IContact = {
  items: All_CONTACTS,
  test: 'default test'
}

const actionHandle: ReducerMap<IStore.IContact, any> = {
  [ACTIONS.GET_CONTACTS]: (
    state: IStore.IContact,
    action: ReduxActions.Action<number>
  ) => {
    return {
      items: All_CONTACTS.filter(x => x.id == action.payload.toString()),
      test: 'filtered contacts'
    }
  },
  [ACTIONS.UPDATE_CONTACTS]: (
    state: IStore.IContact,
    action: ReduxActions.Action<any>
  ) => {
    return {
      ...state,
      items: action.payload.items
    }
  },
  [ACTIONS.SET_CONTACTS_EMAIL]: (
    state: IStore.IContact,
    action: ReduxActions.Action<{ id: number; email: string }>
  ) => {
    return {
      ...state,
      test: action.payload.email
    }
  }
}

export default handleActions(actionHandle, contactInitState)
