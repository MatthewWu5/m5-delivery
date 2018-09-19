class GlobalStore {
  store: any

  getStore() {
    return this.store
  }

  setStore(store: any) {
    this.store = store
  }

  getState() {
    return this.store.getState()
  }
}

export default new GlobalStore()
