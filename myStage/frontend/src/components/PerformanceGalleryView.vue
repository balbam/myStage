<template>
  <div class="performance-gallery container-fluid py-5">
    <div class="row">

      <!-- 상단 필터 영역 -->
      <aside class="px-4 mb-4">
        <h5 class="fw-bold mb-3">공연정보</h5>

        <div class="genre-scroll-wrapper">
          <ul class="d-flex flex-nowrap genre-list mb-0">
            <li v-for="genre in genres" :key="genre" class="me-2">
              <button
                  class="btn rounded-pill text-nowrap"
                  :class="genre === selectedGenre ? 'btn-danger text-white' : 'btn-outline-secondary'"
                  @click="selectGenre(genre)"
              >
                {{ genre }}
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <!-- 하단 공연 리스트 -->
      <section class="col-md-10">
        <div class="d-flex flex-wrap justify-content-start gap-4 px-3">
          <div
              v-for="item in filteredPerformances"
              :key="item.id"
              class="text-center"
              style="width: 170px"
          >
            <img :src="item.poster" class="img-fluid rounded mb-2" style="height: 240px; object-fit: cover;" />
            <h6 class="text-truncate">{{ item.title }}</h6>
            <p class="text-muted small mb-1">{{ item.startDate }} ~ {{ item.endDate }}</p>
            <span class="badge bg-dark rounded-pill">{{ item.genre }}</span>
          </div>
        </div>

        <!-- 페이지네이션 -->
        <div class="d-flex justify-content-center align-items-center mt-4">
          <button class="btn btn-outline-secondary btn-sm me-2" @click="prevPage" :disabled="currentPage === 1">
            ‹
          </button>
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <button class="btn btn-outline-secondary btn-sm ms-2" @click="nextPage" :disabled="currentPage === totalPages">
            ›
          </button>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const genres = [
  '전체', '연극', '뮤지컬', '서양음악(클래식)', '한국음악(국악)',
  '대중음악', '무용(서양/한국무용)', '대중무용', '서커스/마술',
  '복합', '아동', '대학로', '내한', '배리어프리', '축제'
]

const selectedGenre = ref('전체')
const currentPage = ref(2)
const totalPages = ref(8)

const performances = ref([
  {
    id: '1',
    title: '신화의 무도 (舞蹈) : 디...',
    poster: 'https://via.placeholder.com/300x420?text=포스터1',
    startDate: '25.05.31',
    endDate: '25.05.31',
    genre: '무용'
  },
  {
    id: '2',
    title: '제49회 울산시립무용...',
    poster: 'https://via.placeholder.com/300x420?text=포스터2',
    startDate: '25.06.27',
    endDate: '25.06.27',
    genre: '무용'
  },
  {
    id: '3',
    title: '제55회 동아무용콩쿠르',
    poster: 'https://via.placeholder.com/300x420?text=포스터3',
    startDate: '25.05.08',
    endDate: '25.05.08',
    genre: '무용'
  },
  {
    id: '4',
    title: '이애주춤 범열곡 31주...',
    poster: 'https://via.placeholder.com/300x420?text=포스터4',
    startDate: '25.05.21',
    endDate: '25.05.21',
    genre: '무용'
  },
  {
    id: '5',
    title: 'CHOI HOJONG 1ST ...',
    poster: 'https://via.placeholder.com/300x420?text=포스터5',
    startDate: '25.05.24',
    endDate: '25.05.24',
    genre: '무용'
  }
])

const selectGenre = (genre) => {
  selectedGenre.value = genre
}

const filteredPerformances = computed(() => {
  if (selectedGenre.value === '전체') return performances.value
  return performances.value.filter(p => p.genre.includes(selectedGenre.value))
})

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
</script>

<style scoped>
.performance-gallery {
  background: linear-gradient(to right, #f8eaea, #f1f0f7);
  min-height: 100%;
}

/* 기존 버튼 스타일 유지 */
.genre-list .btn {
  font-size: 0.9rem;
  padding: 6px 16px;
}

/* 가로 슬라이드용 추가 스타일 */
.genre-scroll-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
}

.genre-scroll-wrapper::-webkit-scrollbar {
  height: 6px;
}
.genre-scroll-wrapper::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

.genre-list {
  padding: 0;
  margin: 0;
}

.genre-list li {
  list-style: none;
  flex-shrink: 0;
}

.genre-list .btn {
  text-wrap: nowrap;
}
</style>
