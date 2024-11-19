window.onload = function() {
    const startTime = new Date();
    const runtimeDisplay = document.getElementById('runtime-display');
    setInterval(() => {
        const currentTime = new Date();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000); // 计算经过的秒数，也可以按分钟、小时等更合适的时间单位来格式化显示
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
        runtimeDisplay.innerHTML = `网站已运行: ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    }, 1000);
};