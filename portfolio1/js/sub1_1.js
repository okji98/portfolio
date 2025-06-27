$(document).ready(function() {
    
    // 페이지네이션 클릭 이벤트
    $(".board_page > a").click(function(e){
        e.preventDefault(); // 기본 링크 동작 방지
        
        // 모든 페이지 버튼에서 select 클래스 제거
        $(".board_page > a").removeClass("select");
        // 클릭된 버튼에 select 클래스 추가
        $(this).addClass("select");
        
        // 클릭된 버튼의 인덱스 가져오기 (첫 번째와 마지막 화살표 버튼 제외)
        let allButtons = $(".board_page > a");
        let clickedIndex = allButtons.index(this);
        
        // 화살표 버튼들을 제외한 실제 페이지 번호 계산
        let pageButtons = $(".board_page > a").not(':first').not(':last').not(':nth-child(2)').not(':nth-last-child(2)');
        let pageIndex = pageButtons.index(this);
        
        // 유효한 페이지 번호인 경우에만 테이블 변경
        if (pageIndex >= 0) {
            // 모든 테이블 숨기기
            $(".board_list table").removeClass("view");
            // 해당 인덱스의 테이블 보이기
            $(".board_list table").eq(pageIndex).addClass("view");
        }
    });
    
    // 검색 기능
    $(".board_title form").submit(function(e) {
        e.preventDefault();
        // 여기에 검색 로직 추가
        console.log("검색 실행");
    });
    
    // 검색 버튼 클릭
    $(".board_title button").click(function(e) {
        e.preventDefault();
        // 검색 실행
        let searchTerm = $("#search_input").val();
        console.log("검색어:", searchTerm);
    });
    
});