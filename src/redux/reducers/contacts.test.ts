import contactsReducer, { contactInitState } from './contacts'
import { ACTIONS } from '../actionTypes'
test('Default test', () => {
  const id = 1
  const action = {
    type: ACTIONS.GET_CONTACTS,
    payload: id
  }
  const resultState: IStore.IContact = contactsReducer(contactInitState, action)
  expect(resultState.test).toEqual('filtered contacts')
  expect(resultState.items).toEqual(
    contactInitState.items.filter((x: any) => x.id == id)
  )
})
