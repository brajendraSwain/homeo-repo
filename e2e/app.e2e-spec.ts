import { HomeoRepoPage } from './app.po';

describe('homeo-repo App', () => {
  let page: HomeoRepoPage;

  beforeEach(() => {
    page = new HomeoRepoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
