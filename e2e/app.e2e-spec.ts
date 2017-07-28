import { CodaPage } from './app.po';

describe('coda App', () => {
  let page: CodaPage;

  beforeEach(() => {
    page = new CodaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
