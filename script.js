// 数据定义
const featuresData = [
    {
        title: "专业化制作",
        text: "通过标准化SOP流程保障内容品质稳定，运用AI辅助系统提升制作效率，实现营销内容从策划文档到落地的全链路专业化赋能。",
        image: "images/feature1.jpg" // 使用本地图片
    },
    {
        title: "多样化玩法",
        text: "融合新服预约、助力/人拉人、集换卡、抽签、抽奖、AI创作、小游戏、积分兑换等10多种内容营销形态，形成\"标准化模板+个性化定制\"的组合打法，实现全场景渗透营销。",
        image: "images/feature2.jpg" // 使用本地图片
    },
    {
        title: "持久性收益",
        text: "从私域生态打造、客户关系维护、合作资产沉淀等长期视角布局，凭借持续优化的营销策略，为合作方创造源源不断的收益增长。",
        image: "images/feature3.jpg" // 使用本地图片
    }
];

const casesData = [
    {
        title: "小游戏",
        description: "轻量化互动设计，可玩性增加留存\n复活玩法增加社交裂变传播\n即时奖励提升玩家参与积极性\n数据埋点驱动玩法迭代优化",
        cases: [
            { image: "images/game1.jpg", link: "https://xy2-yxhd.h5.163.com/newyear-2025/index.html" },
            { image: "images/game2.jpg", link: "https://moba-yxhd.h5.163.com/westlake-2024-rc/index.html?channel=netease" },
            { image: "images/game3.jpg", link: "https://dhgl-yxhd.h5.163.com/carnival-2024-h5-rc/index.html?channel=netease#/home" }
        ]
    },
    {
        title: "人拉人",
        description: "裂变式里程碑式奖励机制\n双向激励激活社交关系链\n阶梯式任务提升用户留存\n可视化邀请进度增强驱动力",
        cases: [
            { image: "images/invite1.jpg", link: "https://racingmaster.easebar.com/spring-outing-dev/tw.html?v=4#/" },
            { image: "images/invite2.jpg", link: "https://dhgl-yxmini.h5.163.com/spring-h5-test/dev/?channel=netease#/home" }
        ]
    },
    {
        title: "抽奖",
        description: "概率性玩法刺激多轮参与\n实时开奖提升情绪峰值体验\n池子动态更新保持新鲜感\n定制化奖项精准匹配客群",
        cases: [
            { image: "images/lottery1.jpg", link: "https://echoes.inner.game.163.com/g123-dhgl/fabao/index.html" },
            { image: "images/lottery2.png", link: "https://echoes.inner.game.163.com/gitlab/everdev-projects/g123/scratch-lottery-web/rc/h5/index.html?channel=netease#/home" }
        ]
    },
    {
        title: "集换卡",
        description: "稀缺卡牌构建收藏价值体系\n多维任务解锁梯度奖励\n社交玩法增加社交货币谈资\n卡面IP联动强化品牌印记",
        cases: [
            { image: "images/collect1.jpg", link: "https://dhgl-yxhd.h5.163.com/jljzx/index.html" },
            { image: "images/collect2.jpg", link: "https://echoes.inner.game.163.com/gitlab/everdev-projects/dahua-desktop/zxc-h5/dev/xy2/index.html#/home" }
        ]
    },
    {
        title: "抽签",
        description: "运势/福利绑定增强仪式感\n动态概率调节平衡成本收益\n个性化签文提升内容共鸣\n多次抽取引导持续关注",
        cases: [
            { image: "images/wish1.jpg", link: "https://echoes.inner.game.163.com/gitlab/everdev-projects/g78-24spring/moba-24-spring-web/dev/index.html#/home?channel=netease" },
            { image: "images/wish2.jpg", link: "https://racingmaster.easebar.com/newyear-2025-ja-rc/index.html" }
        ]
    },
    {
        title: "预约",
        description: "预热期玩法激活期待心理\n锁定潜在客户提升转化确定性\n进度可视化强化仪式体验\n稀有权益构建稀缺性认知",
        cases: [
            { image: "images/appoint1.jpg", link: "https://speed-yxhd.h5.163.com/speed-version-reserve/index.html#/pages/activity/index" },
            { image: "images/appoint2.jpg", link: "https://evem.h5.163.com/advance-party-assemble/index.html#/" }
        ]
    }
];

// 全局变量定义
let swiper = null;

// 当页面加载完成时执行的初始化函数
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 初始化特征选项卡
        switchFeature(0);
        
        // 初始化案例选项卡
        switchCase(0);
        
        // 创建烟花效果
        createFireworks();
        
        console.log('初始化完成');
    } catch(error) {
        console.error('初始化失败:', error);
    }
});

// 特征选项卡切换函数
function switchFeature(index) {
    try {
        // 更新按钮样式
        const buttons = document.querySelectorAll('.team-intro .tab-button');
        if (!buttons || buttons.length === 0) {
            console.error('未找到特征选项卡按钮');
            return;
        }
        
        buttons.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // 更新内容
        const featureText = document.querySelector('.feature-text');
        const featureImage = document.querySelector('.feature-image img');
        
        if (!featureText || !featureImage) {
            console.error('未找到特征内容元素');
            return;
        }
        
        // 获取文本内容
        let text = featuresData[index].text;
        
        // 定义需要高亮的关键词
        const keywords = [
            "标准化SOP流程", "AI辅助系统", "全链路专业化赋能", 
            "标准化模板+个性化定制", "全场景渗透营销",
            "私域生态打造", "客户关系维护", "合作资产沉淀", "持续优化",
            "新服预约", "助力/人拉人", "集换卡", "抽签", "抽奖", "AI创作", "小游戏", "积分兑换"
        ];
        
        // 为关键词添加样式
        keywords.forEach(keyword => {
            if (text.includes(keyword)) {
                text = text.replace(keyword, `<span class="highlight-keyword">${keyword}</span>`);
            }
        });
        
        // 设置HTML内容
        featureText.innerHTML = text;
        
        featureImage.src = featuresData[index].image;
        featureImage.alt = featuresData[index].title;
        
        // 添加动画效果
        if (typeof featureText.classList.add === 'function') {
            featureText.classList.add('animate__animated', 'animate__fadeIn');
            featureImage.classList.add('animate__animated', 'animate__fadeIn');
            
            // 移除动画类，以便下次切换可以再次触发
            setTimeout(() => {
                featureText.classList.remove('animate__animated', 'animate__fadeIn');
                featureImage.classList.remove('animate__animated', 'animate__fadeIn');
            }, 1000);
        }
    } catch(error) {
        console.error('切换特征选项卡失败:', error);
    }
}

// 案例选项卡切换函数
function switchCase(index) {
    try {
        // 更新按钮样式
        const buttons = document.querySelectorAll('.game-cases .tab-button');
        if (!buttons || buttons.length === 0) {
            console.error('未找到案例选项卡按钮');
            return;
        }
        
        buttons.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // 更新描述
        const caseDescription = document.querySelector('.case-description');
        if (!caseDescription) {
            console.error('未找到案例描述元素');
            return;
        }
        
        // 将描述文本分行并转换为HTML列表
        const descriptionLines = casesData[index].description.split('\n');
        let descriptionHTML = '<ul>';
        
        descriptionLines.forEach(line => {
            if (line.trim() !== '') {
                descriptionHTML += `<li><span>${line}</span></li>`;
            }
        });
        
        descriptionHTML += '</ul>';
        caseDescription.innerHTML = descriptionHTML;
        
        // 更新轮播图
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        if (!swiperWrapper) {
            console.error('未找到轮播图容器');
            return;
        }
        
        swiperWrapper.innerHTML = '';
        
        casesData[index].cases.forEach(caseItem => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            const link = document.createElement('a');
            link.href = caseItem.link;
            link.target = '_blank';
            
            const img = document.createElement('img');
            img.src = caseItem.image;
            img.alt = casesData[index].title;
            
            link.appendChild(img);
            slide.appendChild(link);
            swiperWrapper.appendChild(slide);
        });
        
        // 初始化Swiper
        setTimeout(() => {
            initSwiper();
        }, 100); // 延迟初始化，确保DOM已更新
        
        // 添加动画效果
        if (typeof caseDescription.classList.add === 'function') {
            caseDescription.classList.add('animate__animated', 'animate__fadeIn');
            
            // 移除动画类，以便下次切换可以再次触发
            setTimeout(() => {
                caseDescription.classList.remove('animate__animated', 'animate__fadeIn');
            }, 1000);
        }
    } catch(error) {
        console.error('切换案例选项卡失败:', error);
    }
}

// 初始化Swiper
function initSwiper() {
    try {
        // 检查Swiper是否已加载
        if (typeof Swiper === 'undefined') {
            console.error('Swiper库未加载');
            return;
        }
        
        // 检查轮播图容器是否存在
        const swiperContainer = document.querySelector('.case-swiper');
        if (!swiperContainer) {
            console.error('未找到轮播图容器');
            return;
        }
        
        if (swiper) {
            swiper.destroy(true, true);
        }
        
        swiper = new Swiper('.case-swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        
        console.log('Swiper初始化成功，已启用自动轮播');
    } catch(error) {
        console.error('初始化Swiper失败:', error);
    }
}

// 复制邮箱
function copyEmail() {
    try {
        const email = document.querySelector('.email');
        if (!email) {
            console.error('未找到邮箱元素');
            return;
        }
        
        const emailText = email.textContent;
        
        // 检查剪贴板API是否可用
        if (!navigator.clipboard) {
            // 回退方案：创建临时输入框
            fallbackCopyTextToClipboard(emailText);
            return;
        }
        
        navigator.clipboard.writeText(emailText).then(() => {
            showCopyMessage();
        }).catch(err => {
            console.error('复制失败:', err);
            // 尝试回退方案
            fallbackCopyTextToClipboard(emailText);
        });
    } catch(error) {
        console.error('复制邮箱失败:', error);
    }
}

// 复制文本的回退方案
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // 设置样式使其不可见
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyMessage();
        } else {
            console.error('复制命令不可用');
        }
    } catch (err) {
        console.error('复制失败:', err);
    }
    
    document.body.removeChild(textArea);
}

// 显示复制成功消息
function showCopyMessage() {
    const copyMessage = document.getElementById('copyMessage');
    if (!copyMessage) {
        console.error('未找到复制消息元素');
        return;
    }
    
    copyMessage.classList.add('show');
    
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
}

// 创建烟花效果
function createFireworks() {
    try {
        const fireworksContainer = document.querySelector('.fireworks-container');
        if (!fireworksContainer) {
            console.error('未找到烟花容器');
            return;
        }
        
        // 每隔一段时间创建一个烟花（频率增加一倍，1000ms一次）
        setInterval(() => {
            // 随机位置
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // 随机颜色
            const hue = Math.floor(Math.random() * 360);
            const color = `hsl(${hue}, 100%, 50%)`;
            
            // 创建烟花元素
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${x}%`;
            firework.style.top = `${y}%`;
            firework.style.backgroundColor = color;
            
            fireworksContainer.appendChild(firework);
            
            // 动画结束后移除元素（延长至2000ms）
            setTimeout(() => {
                if (firework.parentNode === fireworksContainer) {
                    fireworksContainer.removeChild(firework);
                }
            }, 2000);
        }, 1000);
        
        console.log('烟花效果初始化成功');
    } catch(error) {
        console.error('创建烟花效果失败:', error);
    }
}

// 页面加载完成后再次检查
window.addEventListener('load', function() {
    // 检查Swiper是否已加载
    if (typeof Swiper !== 'undefined' && !swiper) {
        console.log('页面完全加载后初始化Swiper');
        setTimeout(initSwiper, 500);
    }
}); 