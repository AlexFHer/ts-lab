import { UserFormOutput } from "../interfaces/form-output";

export const formOutputMock: UserFormOutput = {
  name: 'John',
  email: 'email@',
  age: 30,
  hobbies: ['hobby1'],
  secondName: 'Doe',
  city: {
    name: 'city',
    country: 'country'
  }
}
