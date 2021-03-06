// GOOGLE AUTH
export type User = {
  displayName: string
  email: string
  phoneNumber: string
  photoURL: string
  providerId: string
  uid: string
}

export type Error = { message: string; code: string }

export type Product = {
  name: string
  price: string
  id?: string
}
