<template>
  <div class="container py-5 performance-detail">

    <!-- 제목 & 예매 버튼 -->
    <div class="d-flex justify-content-between align-items-start mb-4">
      <div>
        <h3 class="fw-bold">
          첼리스트 이명로 하우스 콘서트: 보이지 않는 정상을 향해 <span class="text-secondary">[대구]</span>
        </h3>
        <span class="badge bg-light border text-muted mt-2">서양음악(클래식)</span>
      </div>
    </div>
    <hr />

    <!-- 상세 영역 -->
    <div class="row g-4">
      <!-- 포스터 -->
      <div class="col-md-4 text-center">
        <img :src="posterUrl" class="img-fluid rounded border" alt="포스터" />
        <div class="text-start mt-2">
          <small class="text-danger fw-bold">* 최종수정: 2025.05.02</small><br />
          <div class="dropdown mt-2">
            <button class="btn btn-outline-danger btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
              정보오류 수정요청
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">포스터 변경</a></li>
              <li><a class="dropdown-item" href="#">내용 수정 요청</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 공연 상세 테이블 -->
      <div class="col-md-8">
        <table class="table table-bordered">
          <tbody>
          <tr>
            <th>공연기간</th>
            <td>2025.04.11(금) ~ 2026.04.24(금)</td>
          </tr>
          <tr>
            <th>공연장소</th>
            <td>어연히하우스</td>
          </tr>
          <tr>
            <th>공연시간</th>
            <td>금요일(13:00)</td>
          </tr>
          <tr>
            <th>관람연령</th>
            <td>만 5세 이상</td>
          </tr>
          <tr>
            <th>티켓가격</th>
            <td>전석 50,000원</td>
          </tr>
          <tr>
            <th>출연진</th>
            <td>이명로</td>
          </tr>
          <tr>
            <th>제작진</th>
            <td>해당정보 없음</td>
          </tr>
          <tr>
            <th>주최·주관</th>
            <td>어연히(주최·주관)</td>
          </tr>
          <tr>
            <th>기획·제작</th>
            <td>해당정보 없음</td>
          </tr>
          </tbody>
        </table>

        <!-- 목록 버튼 -->
        <div class="mt-4">
          <button class="btn btn-dark">목록 보기</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const posterUrl = 'https://via.placeholder.com/300x420.png?text=포스터'
</script>

<style scoped>
.performance-detail h3 {
  font-size: 1.4rem;
}

.performance-detail .table th {
  width: 20%;
  background-color: #f9f9f9;
  font-weight: 500;
}

.performance-detail .table td {
  vertical-align: middle;
}
</style>
