<template>
  <nav class="gnb navbar navbar-expand-lg bg-white border-bottom py-2 px-4">
    <div class="container-fluid justify-content-between align-items-center">

      <!-- 로고 -->
      <div class="d-flex align-items-center gap-4">
        <router-link
            to="/"
            class="navbar-brand fw-bold text-danger fs-4 d-flex align-items-center text-decoration-none"
        >
          <span style="font-weight: 900;">K<span style="color: #FF5B5B;">O</span>PIS</span>
          <span class="ms-2 text-dark fs-6">공연 한눈에</span>
        </router-link>

        <!-- GNB 메뉴 -->
        <div class="d-flex gap-3">
          <router-link to="/" class="btn btn-link text-dark text-decoration-none fw-semibold">Home</router-link>
          <router-link to="/search" class="btn btn-link text-dark text-decoration-none fw-semibold">Search</router-link>
        </div>
      </div>

      <!-- 검색창 + 아이콘 -->
      <div class="d-flex align-items-center gap-4">
        <div class="search-box d-flex align-items-center border-bottom">
          <input
              type="text"
              class="form-control border-0 shadow-none px-1"
              placeholder="검색어를 입력하세요."
          />
          <i class="bi bi-search text-danger ms-2"></i>
        </div>

        <!-- 오른쪽 아이콘 -->
        <div class="icon-links d-flex align-items-center gap-3">
          <a href="#" class="text-dark small d-flex flex-column align-items-center text-decoration-none">
            <i class="bi bi-compass"></i>
            <small class="mt-1">주변정보찾기</small>
          </a>

          <router-link
              to="/login"
              class="text-dark small d-flex flex-column align-items-center text-decoration-none"
          >
            <i class="bi bi-person"></i>
            <small class="mt-1">MY통계로그인</small>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.search-box input::placeholder {
  color: #aaa;
}

.btn-link {
  font-size: 1rem;
  padding: 0;
}

.btn-link:hover {
  color: #e84545 !important;
}
</style>
