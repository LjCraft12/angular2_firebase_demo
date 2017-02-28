import { PropertyPage } from './app.po';

describe('property App', function() {
  let page: PropertyPage;

  beforeEach(() => {
    page = new PropertyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
