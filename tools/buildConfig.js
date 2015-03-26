({
    baseUrl: '../src/',

    mainConfigFile: '../src/require.config.js',
    dir: "../build",

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery'
    },

    skipDirOptimize: true,
    optimizeAllPluginResources: true,
    removeCombined: true,

    preserveLicenseComments: false,
    optimizeCss: 'standard',

    modules: [
        {
            name: "pages/about",
            exclude: ['common']
        },
        {
            name: "pages/details",
            exclude: ['common']
        }
    ]

})