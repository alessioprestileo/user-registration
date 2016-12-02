import { UserRegistrationPage } from './app.po';

describe('user-registration App', function() {
  let page: UserRegistrationPage;

  beforeEach(() => {
    page = new UserRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
