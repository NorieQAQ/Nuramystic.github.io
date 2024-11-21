// 获取按钮元素
const dayNightButton = document.getElementById('dayNightButton');
// 获取场景元素
const scene = document.getElementById('scene');

// 为按钮添加点击事件监听器
dayNightButton.addEventListener('click', function () {
    if (scene.classList.contains('day')) {
        // 如果当前是白天场景，切换为黑夜场景
        scene.classList.remove('day');
        scene.classList.add('night');
    } else {
        // 如果当前是黑夜场景，切换为白天场景
        scene.classList.remove('night');
        scene.classList.add('day');
    }
});