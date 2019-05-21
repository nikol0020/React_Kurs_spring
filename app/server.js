const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
    console.log('NODE_ENV not found, defaulting to development');
}

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at localhost:8080 in ${isProduction ? 'production' : 'dev'} mode`);
});
