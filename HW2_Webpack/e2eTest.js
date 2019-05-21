import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:8080`;

test('e2e test', async t => {
    await t
        .typeText('h1', 'React Todo App!!!')
        .expect(Selector('h1').innerText).eql('React Todo App!!!');
});
