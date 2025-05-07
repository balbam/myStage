<template>
  <nav class="gnb navbar navbar-expand-lg bg-white border-bottom py-2 px-4">
    <div class="container-fluid justify-content-between align-items-center">

      <!-- 로고 -->
      <div class="d-flex align-items-center gap-4">
        <a class="navbar-brand fw-bold text-danger fs-4 d-flex align-items-center" href="#">
          <span style="font-weight: 900;">K<span style="color: #FF5B5B;">O</span>PIS</span>
          <span class="ms-2 text-dark fs-6">공연 한눈에</span>
        </a>

        <!-- 하드코딩된 GNB 메뉴 -->
        <ul class="navbar-nav flex-row gap-4">
          <li class="nav-item">
            <a class="nav-link fw-medium text-dark" href="#">공연 검색</a>
          </li>
        </ul>
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

        <div class="icon-links d-flex align-items-center gap-3">
          <a href="#" class="text-dark small d-flex flex-column align-items-center">
            <i class="bi bi-compass"></i>
            <small class="mt-1">주변정보찾기</small>
          </a>
          <a href="#" class="text-dark small d-flex flex-column align-items-center">
            <i class="bi bi-person"></i>
            <small class="mt-1">MY통계로그인</small>
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>


<style scoped>
ul.d-flex {
  padding: 0;
  margin: 0;
}

ul.d-flex li {
  list-style: none;
}

.nav-link {
  padding: 0 !important;
  font-size: 1rem;
  font-weight: 600;
  color: #111 !important;
}

.nav-link:hover {
  color: #e84545 !important;
}

</style>

