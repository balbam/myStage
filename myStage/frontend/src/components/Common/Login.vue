<template>
  <div class="login-page container d-flex justify-content-center align-items-center py-5">
    <div class="login-box w-100" style="max-width: 420px;">
      <!-- 제목 -->
      <h2 class="text-center fw-bold mb-4 text-danger">로그인</h2>

      <!-- 설명 -->
      <div class="bg-light border p-3 mb-4 text-sm">
        <p class="mb-1">
          My 통계는 공연예술통합전산망에 데이터를 전송하는<br />
          <strong class="text-danger">공연시설 및 기획제작사 대상으로 운영하는 전용 서비스</strong>입니다.
        </p>
        <p class="mb-1">
          공연예술통합전산망에 수집된 공연정보와 맞춤형 통계를 제공합니다.
        </p>
        <p class="mb-0 text-muted" style="font-size: 0.85rem;">
          * 공연예술통합전산망 공연시설 및 기획제작사DB에 등록되었다면,<br />
          회원가입 및 로그인하여 서비스를 이용하실 수 있습니다.
        </p>
      </div>

      <!-- 입력 폼 -->
      <form>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="아이디" v-model="userId" />
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" placeholder="비밀번호" v-model="password" />
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="rememberId" v-model="rememberMe" />
          <label class="form-check-label" for="rememberId">아이디 저장</label>
        </div>
        <button type="submit" class="btn btn-dark w-100">로그인</button>
      </form>

      <!-- 하단 링크 -->
      <div class="d-flex justify-content-center gap-3 mt-3">
        <a href="#" class="text-decoration-none text-secondary small">아이디 찾기</a>
        <a href="#" class="text-decoration-none text-secondary small">비밀번호 찾기</a>
        <a href="#" class="text-decoration-none text-secondary small">회원가입</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userId = ref('')
const password = ref('')
const rememberMe = ref(false)
</script>

<style scoped>
.login-page {
  min-height: 100vh;
}

.text-sm {
  font-size: 0.92rem;
}

.login-box input::placeholder {
  color: #aaa;
}
</style>
