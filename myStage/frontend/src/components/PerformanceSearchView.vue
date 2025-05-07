<template>
  <div class="container py-5 performance-search">

    <!-- 검색 영역 -->
    <div class="bg-light p-4 rounded mb-4">
      <div class="row align-items-center g-3">
        <div class="col-md-8">
          <input
              type="text"
              class="form-control"
              placeholder="검색어 입력"
              v-model="keyword"
          />
        </div>
        <div class="col-md-2">
          <button class="btn btn-danger w-100">검색</button>
        </div>
        <div class="col-md-2">
          <div class="dropdown">
            <button class="btn btn-outline-dark dropdown-toggle w-100" type="button" data-bs-toggle="dropdown">
              조건 검색
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">기간 설정</a></li>
              <li><a class="dropdown-item" href="#">지역 선택</a></li>
              <li><a class="dropdown-item" href="#">장르 선택</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 상태 태그 -->
      <div class="mt-3">
        <span class="badge bg-light border text-dark me-2">
          공연중 <button class="btn-close btn-sm ms-2" @click="removeTag"></button>
        </span>
      </div>
    </div>

    <!-- 장르 필터 버튼 -->
    <div class="d-flex flex-wrap gap-2 mb-3">
      <button v-for="genre in genres" :key="genre"
              class="btn"
              :class="genre === selectedGenre ? 'btn-danger' : 'btn-outline-secondary'"
              @click="selectGenre(genre)">
        {{ genre }}
      </button>
    </div>

    <!-- 검색 결과 정보 -->
    <div class="d-flex justify-content-between align-items-center mb-2">
      <span>총 검색 건수: <strong>{{ performances.length }}</strong></span>
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-list"></i>
        <i class="bi bi-grid"></i>
        <select class="form-select form-select-sm w-auto">
          <option>최근 업데이트 순</option>
          <option>공연일순</option>
        </select>
      </div>
    </div>

    <hr />

    <!-- 공연 목록 -->
    <div class="row g-3">
      <div class="col-md-4" v-for="item in performances" :key="item.id">
        <div class="d-flex gap-3 border-bottom pb-3">
          <img :src="item.poster" class="rounded" style="width: 100px; height: 140px; object-fit: cover;" />
          <div class="flex-grow-1">
            <span class="badge bg-light border text-dark mb-1">{{ item.genre }}</span>
            <h6 class="fw-bold text-truncate">{{ item.title }}</h6>
            <p class="mb-1 small">기간: {{ item.startDate }} ~ {{ item.endDate }}</p>
            <p class="mb-1 small">장소: {{ item.place }}</p>
            <p class="mb-1 small text-truncate">주최: {{ item.host }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')
const selectedGenre = ref('전체')

const genres = [
  '전체', '연극', '뮤지컬', '서양음악(클래식)', '한국음악(국악)', '대중음악',
  '무용(서양/한국무용)', '대중무용', '서커스/마술', '복합'
]

const performances = ref([
  {
    id: 1,
    title: '첼리스트 이명로 하우스 콘서트',
    poster: 'https://via.placeholder.com/100x140.png?text=포스터',
    startDate: '2025.04.11',
    endDate: '2026.04.24',
    place: '여연하우스',
    genre: '서양음악(클래식)',
    host: '여연히'
  },
  {
    id: 2,
    title: '마술사 자미의 벌룬쇼',
    poster: 'https://via.placeholder.com/100x140.png?text=포스터',
    startDate: '2025.05.03',
    endDate: '2025.06.29',
    place: '삼성플레이스',
    genre: '서커스/마술',
    host: '예술상자'
  },
  {
    id: 3,
    title: '제67회 창악회 정기연주회',
    poster: 'https://via.placeholder.com/100x140.png?text=포스터',
    startDate: '2025.05.07',
    endDate: '2025.05.07',
    place: '예술의전당',
    genre: '서양음악(클래식)',
    host: '창악회'
  }
])

function selectGenre(genre) {
  selectedGenre.value = genre
}

function removeTag() {
  console.log('태그 제거')
}
</script>

<style scoped>
.performance-search input::placeholder {
  color: #aaa;
}

.bi {
  cursor: pointer;
  font-size: 1.1rem;
  color: #666;
}
.bi:hover {
  color: #e84545;
}
</style>
