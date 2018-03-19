<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card">
        <transition 
          name="fade" 
          appear>
          <div class=" card-header bg-dark text-white text-center">
            <router-link 
              :to="{name:'Dashboard'}"
              tag="a">
              <h1 class="text-white">Caspar Coding</h1>
              <h2 class="text-white">Developers</h2>
            </router-link>
            <div class="clearfix"/>
          </div>
        </transition>
        <div class="card-body">
          <router-view/>
        </div>
        <div class="card-footer text-center">
          <router-link :to="{name:'Login'}">Login</router-link>
          <hr>
          <router-link :to="{name:'PasswordReset'}">Reset your password</router-link>
          <hr>
          <router-link :to="{name: 'RegisterDeveloper'}">
            Register as a Developer
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 320px;
}

.card-body {
  min-width: 300px;
  padding: 1rem;
}
</style>
