Router.route('/', function() {
    this.redirect('/encrypt');
});

Router.route('/encrypt', {
    template: 'encrypt'
});

Router.route('/decrypt', {
    template: 'decrypt'
});

Router.configure({
    layoutTemplate: 'main'
});
