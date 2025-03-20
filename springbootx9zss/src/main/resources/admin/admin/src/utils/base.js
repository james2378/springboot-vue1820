const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootx9zss/",
            name: "springbootx9zss",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootx9zss/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot的雪具销售系统"
        } 
    }
}
export default base
