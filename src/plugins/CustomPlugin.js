export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('dateFormatter', function (date, pattern) {
            if (pattern === undefined) {
                pattern = 'YY-MM-DD hh:mm:ss'
            }
            let weeks = ["周日",
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六"];
            let year = date.getFullYear(),
                month = date.getMonth() + 1,//月份是从0开始的
                day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds(),
                week = weeks[date.getDay()];
            let preArr = Array.apply(null, Array(10)).map(function (elem, index) {
                return '0' + index;
            });

            return pattern.replace(/yy/g, year)
                .replace(/MM/g, preArr[month] || month)
                .replace(/dd/g, preArr[day] || day)
                .replace(/hh/g, preArr[hour] || hour)
                .replace(/mm/g, preArr[min] || min)
                .replace(/ss/g, preArr[sec] || sec)
                .replace(/ww/g, week);
        })

        // 全局函数 uuid
        Vue.prototype.uuid = function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            let uuid = s.join("");
            return uuid;
        }

        // 定义全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })

        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = () => {
            alert('你好啊')
        }
    }
}