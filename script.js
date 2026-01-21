// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const contactBtn = document.getElementById('contactBtn');
    const themeToggle = document.getElementById('themeToggle');
    const messageModal = document.getElementById('messageModal');
    const closeModal = document.querySelector('.close-modal');
    const messageForm = document.getElementById('messageForm');
    
    // 1. 联系按钮点击事件 - 打开模态对话框
    contactBtn.addEventListener('click', function() {
        messageModal.style.display = 'flex';
    });
    
    // 2. 关闭模态对话框
    closeModal.addEventListener('click', function() {
        messageModal.style.display = 'none';
    });
    
    // 3. 点击模态对话框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === messageModal) {
            messageModal.style.display = 'none';
        }
    });
    
    // 4. 表单提交处理
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 简单验证
        if (name && email && message) {
            // 在实际项目中，这里会发送数据到服务器
            alert(`谢谢，${name}！\n您的消息已发送成功。\n我们会在24小时内通过 ${email} 回复您。`);
            
            // 重置表单
            messageForm.reset();
            
            // 关闭模态对话框
            messageModal.style.display = 'none';
        } else {
            alert('请填写所有字段！');
        }
    });
    
    // 5. 主题切换功能
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // 更新按钮图标和文本
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> 切换主题';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> 切换主题';
        }
    });
    
    // 6. 为技能条添加动画效果
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(level => {
            // 获取原始宽度
            const originalWidth = level.style.width;
            // 先将宽度设为0
            level.style.width = '0%';
            
            // 使用setTimeout延迟动画，创建交错效果
            setTimeout(() => {
                level.style.transition = 'width 1.5s ease-in-out';
                level.style.width = originalWidth;
            }, 300);
        });
    }
    
    // 页面加载后延迟执行技能条动画
    setTimeout(animateSkillBars, 500);
    
    // 7. 为兴趣项目添加点击效果
    const interestItems = document.querySelectorAll('.interest-item');
    interestItems.forEach(item => {
        item.addEventListener('click', function() {
            const interestName = this.querySelector('span').textContent;
            alert(`您点击了: ${interestName}\n这是我的兴趣爱好之一！`);
        });
    });
    
    // 8. 控制台欢迎信息
    console.log('%c👋 你好！欢迎查看我的个人介绍页面！', 'color: #2575fc; font-size: 16px; font-weight: bold;');
});