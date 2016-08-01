var options;

function WebpackPrepend(_options) {
    options = Object.assign({}, {
        before: '',
        after: ''
    }, _options);
}

WebpackPrepend.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation) {
        compilation.mainTemplate.plugin('startup', function(source) {
            return options.before + source + options.after;
        });
    });
};

module.exports = WebpackPrepend;
