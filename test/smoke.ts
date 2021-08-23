
describe('Smoke test', () => {
    it.skip('Tools QA Should be Alive', () => {
        browser.url('/')
        expect(browser).toHaveTitle('ToolsQA');
    })
})