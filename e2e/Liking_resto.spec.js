
const assert = require('assert');

Feature('Liking resto');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked resto', ({I}) => {
  I.seeElement('#restocard-null');
});

Scenario('Liking one resto', async ({I}) => {
  I.seeElement('#restocard-null');
  I.amOnPage('#/');

  I.waitForElement('.card-item a', 60);
  I.seeElement('.card-item a');
  const firstResto = locate('.card-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('.favbutton', 60);
  I.seeElement('.favbutton');
  I.click('.favbutton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.card-item a', 60);
  I.seeElement('.card-item');
  const likedRestoTitle = await I.grabTextFrom('#card-name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one resto', async ({I}) => {
  I.amOnPage('#/');

  I.waitForElement('.card-item a', 60);
  I.seeElement('.card-item a');
  I.click(locate('.card-item a').first());

  I.waitForElement('.favbutton', 60);
  I.seeElement('.favbutton');
  I.click('.favbutton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.card-item a', 60);
  I.seeElement('.card-item a');

  const firstLikedResto = locate('.card-item a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);
  I.click(firstLikedResto);

  I.seeElement('.detail-name-resto');
  const DetailRestoTitle = await I.grabTextFrom('.detail-name-resto');

  assert.strictEqual(firstLikedRestoTitle, DetailRestoTitle);

  I.seeElement('#removefav');
  I.click('#removefav');

  I.amOnPage('/#/favorite');
  I.seeElement('#restocard-null');

  I.seeElement('.text-resto-item-not-found');
  I.see('No restaurant favorite list here', '.text-resto-item-not-found');
});

Scenario('Add review resto ', async ({I}) => {
  I.amOnPage('#/');

  I.waitForElement('.card-item a', 60);
  I.seeElement('.card-item a');
  I.click(locate('.card-item a').first());

  I.seeElement('input');
  I.fillField('input', 'Carrebale');
  I.seeElement('textarea');
  I.fillField('textarea', 'Good food, good price! All menus deserve with love, haha :)');

  I.seeElement('.addcomentbutton');
  I.click('.addcomentbutton');

  I.waitForElement('.comentitem', 120);

  const showNewComentplace = locate('.comentitem p').last();
  const showNewComent = await I.grabTextFrom(showNewComentplace);

  cekCommentPlace = locate('.textcoment').last();
  const cekComent = await I.grabTextFrom(cekCommentPlace);
  assert.equal(cekComent, showNewComent);
});

