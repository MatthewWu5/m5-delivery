declare namespace IStore {
  interface IRoot {
    contact: IContact
    portal: IPortal
  }

  interface IContact {
    items: Contact[]
    test: string
  }

  interface IPortal {
    title: string
    description: string
    packageJson: any
  }
}
