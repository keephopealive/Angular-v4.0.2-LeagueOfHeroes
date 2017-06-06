import { LeagueOfHeroesPage } from './app.po';

describe('league-of-heroes App', () => {
  let page: LeagueOfHeroesPage;

  beforeEach(() => {
    page = new LeagueOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
