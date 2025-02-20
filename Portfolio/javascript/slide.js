
        // 슬라이드 리스트 선택
        const ul = document.querySelector('.slide-one ul');
        const left = document.querySelector(".chevron > .left");
        const right = document.querySelector(".chevron > .right");
        // 현재 슬라이드 인덱스 초기화
        let currentIndex = 0;
        // 총 슬라이드 수
        const totalSlides = 6;
        // 한 번에 보여줄 슬라이드 수
        const slidesToShow = 3;
        // 슬라이드를 표시하는 함수
        function showSlides() {
            // 각 슬라이드의 너비 (300px) * 현재 인덱스의 음수 값으로 이동
            const offset = -currentIndex * 1600;
            ul.style.transform = `translateX(${offset}px)`;
        }
        // 다음 슬라이드로 이동하는 함수
        function nextSlide() {
            // if (currentIndex < totalSlides - slidesToShow) { // 마지막 슬라이드 이전까지 이동 가능
            if (currentIndex < 1) {
                currentIndex++;
            } else {
                currentIndex = 0;  // 마지막 3개 뒤로 넘어가면 처음으로
            }
            showSlides();
        }
        // 이전 슬라이드로 이동하는 함수
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            }else{
                currentIndex = 1;
            }
                showSlides();
        }
        // 다음 버튼에 클릭 이벤트 리스너 추가
        right.addEventListener('click', nextSlide);
        // 이전 버튼에 클릭 이벤트 리스너 추가
        left.addEventListener('click', prevSlide);

        // 처음 슬라이드 표시
        showSlides();
