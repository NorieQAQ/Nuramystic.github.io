const start = new Date('2024-11-17T00:00:00');

function calculateUptime() {
    const current = new Date();
    const elapsed = current - start;
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;
    return {
        days: days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
    };
}

setInterval(() => {
    const uptime = calculateUptime();
    console.log(`网站已运行 ${uptime.days} 天 ${uptime.hours} 小时 ${uptime.minutes} 分钟 ${uptime.seconds} 秒`);
    // 这里添加代码用于更新页面上显示运行时间的元素内容，后续在 HTML 中会创建对应的元素
    const uptimeDisplay = document.getElementById('uptime-display');
    if (uptimeDisplay) {
        uptimeDisplay.innerHTML = `网站已运行 ${uptime.days} 天 ${uptime.hours} 小时 ${uptime.minutes} 分钟 ${uptime.seconds} 秒`;
    }
}, 1000);
