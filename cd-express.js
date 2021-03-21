module.exports = {
    port:3000,
    debug:false,
    static:{
        "~":["./docs"],
    },
    open:{
        enabled:false,
        app: 'chrome',
        url:"/"
    }
}