interface User {
  name: string;
  email: string;
  address?: string;
}

function getUser(): User {
  return {
    name: 'Dieisson',
    email: 'dieissonnarde@gmail.com'
  }
}

function setUser(user: User) {
  // ...
}