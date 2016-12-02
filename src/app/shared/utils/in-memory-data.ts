export class InMemoryData {
  createDb() {
    let users = [
      {
        id: 1,
        emailAddress: 'alessioprestileo@gmail.com',
        name: 'Alessio Prestileo',
        password: 'password1'
      },
      {
        id: 2,
        emailAddress: 'richardfeynman@gmail.com',
        name: 'Richard Feynman',
        password: 'password2'
      },
      {
        id: 3,
        emailAddress: 'nielsbohr@gmail.com',
        name: 'Niels Bohr',
        password: 'password3'
      }
    ];
    return { users };
  }
}
