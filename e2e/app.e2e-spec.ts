import { Chapter11Page } from './app.po';

describe('chapter11 App', () => {
  let page: Chapter11Page;

  beforeEach(() => {
    page = new Chapter11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
