import { UserRegistraionPage } from './app.po';

describe('user-registraion App', function() {
  let page: UserRegistraionPage;

  beforeEach(() => {
    page = new UserRegistraionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
