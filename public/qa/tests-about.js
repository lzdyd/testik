suite('Тест страницы about', function() {
    test('Страница должна содержать ссылку на страницу контактов', function() {
       assert($('a[href="/contact"]').length);
    });
});