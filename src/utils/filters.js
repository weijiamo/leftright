/**
 * A plugin of Vue.js providing custom filters.
 *
 * @param Vue
 *    the Vue class.
 * @author Kayson Li
 */
exports.install = function(Vue) {
    //Set decimal places for numbers.
    Vue.filter('digit', function(value, decimalPlace) {
        return value.toFixed(decimalPlace || 2);
    });

    //Format date object.
    Vue.filter('dateformat', function(value, format) {
        var year = value.getFullYear();
        var month = value.getMonth() + 1;
        var date = value.getDate();
        var hour = value.getHours();
        var minute = value.getMinutes();
        var second = value.getSeconds();
        return format.replace(/Y/, year).replace(/m/, month).replace(/d/, date).replace(/hh/, hour)
            .replace(/H/, hour).replace(/i/, minute).replace(/s/, second);
    });
};