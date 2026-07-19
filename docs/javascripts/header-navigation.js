// 让网站标题可点击返回主页
document.addEventListener('DOMContentLoaded', function() {
    // 获取网站标题元素
    const headerTitle = document.querySelector('.md-header__title');
    
    if (headerTitle) {
        // 添加点击事件
        headerTitle.addEventListener('click', function(e) {
            // 如果点击的不是按钮，则跳转到主页
            if (!e.target.closest('.md-header__button')) {
                window.location.href = new URL('/', window.location.origin).href;
            }
        });
        
        // 添加视觉反馈
        headerTitle.style.cursor = 'pointer';
        headerTitle.title = '点击返回主页';
    }
});
