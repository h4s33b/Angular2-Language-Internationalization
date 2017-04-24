import { SimpleTranslatorPage } from './app.po';

describe('simple-translator App', () => {
  let page: SimpleTranslatorPage;

  beforeEach(() => {
    page = new SimpleTranslatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
