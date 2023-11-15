<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <img
        @click="home()"
        class="navbar-brand"
        style="height: 75px; width: "
        src="@\assets\picture\logo.png"
        alt=""
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <!-- Add 'ms-auto' class to the <ul> element -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{
              $t("navbar.home")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              ><span>{{ $t("navbar.about") }}</span></router-link
            >
          </li>
          <!-- <router-link to="/service" class="nav-link"
              ><span>{{ $t("navbar.service") }}</span></router-link
            > -->
          <!-- <a
              class="btn nav-link"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{{ $t("navbar.service") }}</span>
            </a> -->

          <el-dropdown class="nav-item">
            <router-link class="nav-link" to="/service" style="margin-top: 2px"
              >{{ $t("navbar.service") }} <i class="bx bx-chevron-down"></i
            ></router-link>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  ><router-link to="/service1" class="menu-service">{{
                    $t("service.taxservice")
                  }}</router-link></el-dropdown-item
                >
                <el-dropdown-item
                  ><router-link to="/service2" class="menu-service">{{
                    $t("service.account")
                  }}</router-link></el-dropdown-item
                >
                <el-dropdown-item
                  ><router-link to="/businessregister" class="menu-service">{{
                    $t("service.registeration")
                  }}</router-link></el-dropdown-item
                >
                <el-dropdown-item
                  ><a
                    href="https://www.tax.gov.kh/km/categories/64qke344011330727"
                    target="_blank"
                    class="menu-service"
                    >{{ $t("service.other") }}</a
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link"
              ><span>{{ $t("navbar.contact") }}</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/other" class="nav-link"
              ><span>{{ $t("navbar.other") }}</span></router-link
            >
          </li>
          <div>
            <li class="nav-item">
              <router-link
                v-if="hasJsTokenCookie"
                class="btn btn-success"
                to="/dashboard"
                >{{ $t("navbar.dashboard") }}</router-link
              >
              <button
                v-else
                type="button"
                class="btn btn-success"
                @click="dialogVisible = true"
              >
                {{ $t("navbar.log_in") }}
              </button>
            </li>
          </div>
          <li class="nav-item">
            <button class="btn" @click="changeLanguage">
              <div v-if="checkLang">
                <img src="../assets/svg/en.svg" width="25" />
              </div>
              <div v-else>
                <img src="../assets/svg/km.svg" width="25" />
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <el-dialog v-model="dialogVisible" width="30%" center>
    <div class="modal-dialog">
      <div class="modal-content">
        <p
          class="header"
          style="text-align: center; margin-top: 15px"
          id="exampleModalLabel"
        >
          {{ $t("navbar.log_in") }}
        </p>
        <div class="modal-body mb-3">
          <label for="username">{{ $t("login.username") }}</label>
          <input
            id="username"
            type="text"
            v-model="username"
            style="background-color: rgba(226, 226, 226, 1)"
            class="form-control"
            aria-describedby="emailHelp"
          />
          <label for="password">{{ $t("login.password") }}</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            style="background-color: rgba(226, 226, 226, 1)"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="button"
          @click="postLogin()"
          style="width: 100%; margin: auto"
          class="btn btn-primary btn-block"
        >
          Login
        </button>
        <p style="text-align: center; margin-top: 15px">
          Did'nt have Account? Contact to Admin
        </p>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { login } from "../api/Service";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import VueCookies from "vue-cookies";
import { useI18n } from "vue-i18n";
const dialogVisible = ref(false);
const { locale } = useI18n();

const router = useRouter();
const username = ref("");
const password = ref("");
const hasJsTokenCookie = VueCookies.get("jstoken");
async function postLogin() {
  try {
    const response = await login(username.value, password.value);
    const jstoken = response.data;
    VueCookies.set("jstoken", jstoken, "1d", null, null, true);
    ElNotification({
      title: "Success",
      duration: 2000,
      message: "Login Success",
      type: "success",
    });
    router.push("/dashboard");
  } catch (e) {
    console.log(e);
    ElNotification({
      title: "Failed",
      duration: 2000,
      message: "Check your username and password again.",
      type: "error",
    });
  }
}
function home() {
  router.push("/");
}

const checkLang = computed(() => locale.value === "en");
function changeLanguage() {
  locale.value = checkLang.value ? "kh" : "en";
}
</script>

<style scoped>
.nav-item {
  font-weight: bold;
  margin-left: 5px;
  font-size: 16px;
}
.active {
  border: 1px solid rgb(9, 112, 182);
  border-radius: 5px;
  background-color: rgb(9, 112, 182);
  color: white !important; /* Set the text color to white */
}
.header {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
.menu-service {
  font-family: "Poppins";
  text-decoration: none;
}
/* Add custom styles here */
</style>
