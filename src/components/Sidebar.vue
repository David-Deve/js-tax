<template>
  <div class="sidebar" :class="{ close: !isSidebarOpen }">
    <div class="logo-details">
      <img
        class="ms-3 me-2"
        style="height: 25px"
        src="@\assets\picture\logo.png"
        alt=""
      />
      <span class="logo_name">JS TAX SERVICES</span>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/dashboard">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">Dashboard</span>
        </router-link>
        <ul class="sub-menu blank">
          <li>
            <router-link class="link_name" to="/dashboard"
              >Dashboard</router-link
            >
          </li>
        </ul>
      </li>
      <!-- <li>
        <div class="iocn-link">
          <router-link to="#">
            <i class="bx bx-user"></i>
            <span class="link_name">User</span>
          </router-link>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li><router-link class="link_name" to="#">User</router-link></li>
          <li><router-link to="/user">All User</router-link></li>
          <li><router-link to="/createuser">Create User</router-link></li>
        </ul>
      </li> -->
      <li>
        <router-link to="/user">
          <i class="bx bx-user"></i>
          <span class="link_name">User</span>
        </router-link>
        <ul class="sub-menu blank">
          <li>
            <router-link class="link_name" to="/user">User</router-link>
          </li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <router-link to="#">
            <i class="bx bx-book-alt"></i>
            <span class="link_name">Posts</span>
          </router-link>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li><router-link class="link_name" to="#">Posts</router-link></li>
          <li><router-link to="/updatehomepage">Home</router-link></li>
          <li><router-link to="/updateaboutpage">About Us</router-link></li>
          <li><router-link to="/updateservice1">Service(TAX)</router-link></li>
          <li>
            <router-link to="/updateservice2">Service(Accouting)</router-link>
          </li>
          <li>
            <router-link to="/updatebusniesspage"
              >Business Register</router-link
            >
          </li>
          <li>
            <router-link to="/updateotherlicenses">Other License</router-link>
          </li>
          <li><router-link to="/updatecontact">Contact</router-link></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <router-link to="/client">
            <i class="bx bx-buildings"></i>
            <span class="link_name">Client</span>
          </router-link>
        </div>
        <ul class="sub-menu blank">
          <li>
            <router-link class="link_name" to="/client">Client</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/consultation">
          <i class="bx bx-paper-plane"></i>
          <span class="link_name">Consultation</span>
        </router-link>
        <ul class="sub-menu blank">
          <li>
            <router-link class="link_name" to="/consultation"
              >Consultation</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <router-link to="#">
            <i class="bx bxs-dollar-circle"></i>
            <span class="link_name">Tax</span>
          </router-link>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li><router-link to="/alltax">AllTax</router-link></li>
          <li><router-link to="/credittax">CREDIT</router-link></li>
          <li><router-link to="/debittax">DEBIT</router-link></li>
          <li><router-link to="/reimburstax">REIMBURSEMENT</router-link></li>
          <li><router-link to="/statementtax">STATEMENT</router-link></li>
          <li><router-link to="/taxclose">Check List</router-link></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <router-link to="#">
            <i class="bx bxs-file-export"></i>
            <span class="link_name">Invoice</span>
          </router-link>
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li><router-link to="/allinvoice">Invoice</router-link></li>
          <li><router-link to="/credittax">CREDIT</router-link></li>
          <li><router-link to="/debittax">DEBIT</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/">
          <i class="bx bx-home"></i>
          <span class="link_name">Home</span>
        </router-link>
        <ul class="sub-menu blank">
          <li><router-link class="link_name" to="/">Home</router-link></li>
        </ul>
      </li>
      <li>
        <div class="profile-details">
          <div class="profile-content">
            <!--<img src="image/profile.jpg" alt="profileImg">-->
          </div>
          <div class="name-job">
            <div class="profile_name">{{ getUserInfo.infoUser.username }}</div>
            <div class="job">
              {{ getUserInfo.role }},ID:{{ getUserInfo.infoUser.id }}
            </div>
          </div>
          <a @click="deleteToken()"><i class="bx bx-log-out"></i></a>
        </div>
      </li>
    </ul>
  </div>
  <section class="home-section" :class="{ close: !isSidebarOpen }">
    <div class="home-content">
      <!-- <i class="bx bx-menu" @click="toggleSidebar"></i> -->
      <h3 class="ms-4">Admin Panel</h3>
    </div>
    <br /><br /><br />
    <slot name="Content"></slot>
  </section>
</template>
<script setup>
import { useAuthentication } from "../stores/Store";
import { onMounted, ref } from "vue";
import VueCookies from "vue-cookies";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
const isSidebarOpen = ref(true);

const getUserInfo = useAuthentication();
getUserInfo.getinfoUser();
// const toggleSidebar = () => {
//   isSidebarOpen.value = !isSidebarOpen.value;
// };
const router = useRouter();
function deleteToken() {
  VueCookies.remove("jstoken");
  ElNotification({
    title: "Success",
    duration: 2000,
    message: "Logout",
    type: "success",
  });
  router.push("/");
}
onMounted(() => {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  // let sidebar = document.querySelector(".sidebar");
  // let sidebarBtn = document.querySelector(".bx-menu");
  // sidebarBtn.addEventListener("click", () => {
  //   sidebar.classList.toggle("close");
  // });
});
</script>
<style scoped>
/* Google Fonts Import Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #11101d;
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
}
.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links {
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  background: #1d1b31;
}
.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link {
  display: block;
}
.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
}
.sidebar.close .nav-links i.arrow {
  display: none;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
}
.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}
.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}
.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

.one {
  width: 80%;
  margin-left: 10%;
  background-color: black;
  height: 400px;
}

.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 12px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details {
  background: none;
}
.sidebar.close .profile-details {
  width: 78px;
}
.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}
.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img {
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}
.sidebar .profile-details .job {
  font-size: 12px;
}
.home-section {
  position: relative;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}
.sidebar.close ~ .home-section {
  left: 78px;
  width: calc(100% - 78px);
}
.home-section .home-content {
  height: 60px;
  display: flex;
  align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #11101d;
  font-size: 35px;
}
.home-section .home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
}
.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}
@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }
}
</style>
