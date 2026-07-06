const i18n = {
    ja: {
        nav_play: "今すぐプレイ",
        hero_title: "完璧な物理演算。究極の3Dナインボール。",
        hero_subtitle: "ブラウザでプレイ可能な究極の3Dビリヤード（ナインボール）体験。リアルな挙動、洗練されたコントロール、そして圧倒的なグラフィック。",
        hero_cta: "無料でプレイ",
        features_title: "ゲームの特徴",
        feat1_title: "本格的なナインボール",
        feat1_desc: "公式ルールのナインボールを採用。ブレイクショットからのスリリングな展開を楽しめます。",
        feat2_title: "3D グラフィック",
        feat2_desc: "高品質な3Dレンダリング。美しい光と影が織りなす極上のプレイ空間。",
        feat3_title: "高度なコントロール",
        feat3_desc: "パワーチャージ、スピンコントロールなど、高度なテクニックを直感的なUIで操作可能。",
        controls_title: "遊び方",
        ctrl1_key: "左ドラッグ",
        ctrl1_desc: "視点移動・エイム",
        ctrl2_key: "スペース長押し",
        ctrl2_desc: "パワーチャージ",
        ctrl3_key: "スペース離す",
        ctrl3_desc: "ショット",
        ctrl4_key: "左下 UI",
        ctrl4_desc: "スピン設定",
        ctrl5_key: "C キー",
        ctrl5_desc: "カメラ視点変更",
        cta_title: "テーブルに立つ準備はできましたか？",
        cta_desc: "インストール不要、ブラウザですぐにプレイ可能です。",
        cta_btn: "ゲームを開始する"
    },
    ko: {
        nav_play: "지금 플레이하기",
        hero_title: "완벽한 물리 엔진. 궁극의 3D 나인볼.",
        hero_subtitle: "브라우저에서 즐길 수 있는 궁극의 3D 당구(나인볼) 경험. 사실적인 물리 엔진, 세련된 컨트롤, 그리고 압도적인 그래픽.",
        hero_cta: "무료로 플레이",
        features_title: "게임 특징",
        feat1_title: "정통 나인볼",
        feat1_desc: "공식 나인볼 규칙 적용. 브레이크 샷부터 시작되는 스릴 넘치는 전개를 즐겨보세요.",
        feat2_title: "3D 그래픽",
        feat2_desc: "고품질 3D 렌더링. 아름다운 빛과 그림자가 만들어내는 최고의 플레이 공간.",
        feat3_title: "고급 컨트롤",
        feat3_desc: "파워 차지, 스핀 컨트롤 등 고급 기술을 직관적인 UI로 조작 가능.",
        controls_title: "조작 방법",
        ctrl1_key: "좌클릭 드래그",
        ctrl1_desc: "시점 이동 및 조준",
        ctrl2_key: "스페이스바 길게",
        ctrl2_desc: "파워 차지",
        ctrl3_key: "스페이스바 떼기",
        ctrl3_desc: "샷",
        ctrl4_key: "좌측 하단 UI",
        ctrl4_desc: "스핀 설정",
        ctrl5_key: "C 키",
        ctrl5_desc: "카메라 시점 변경",
        cta_title: "테이블에 설 준비가 되셨나요?",
        cta_desc: "설치 필요 없이 브라우저에서 바로 플레이 가능합니다.",
        cta_btn: "게임 시작하기"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elements to animate
    const animElements = document.querySelectorAll('.feature-card, .control-item, .section-title, .cta-banner h2, .cta-banner p');
    
    animElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Language Switcher
    const langSwitch = document.getElementById('lang-switch');
    langSwitch.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                if (el.tagName === 'INPUT' && el.type === 'button') {
                    el.value = i18n[lang][key];
                } else {
                    el.innerText = i18n[lang][key];
                }
            }
        });
    });
});
