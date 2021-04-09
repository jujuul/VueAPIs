export default {
    data() {
        return {
            commonData: "公共的数据",
        }
    },
    methods: {
        commonMethod() {
            console.log("公共的方法");
        },
    },
    mounted() {
        console.log("common mounted");
    },
}