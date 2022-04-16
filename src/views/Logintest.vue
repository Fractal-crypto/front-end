<template>
  <header>
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <router-link class="navbar-brand" exact to="/">

        <span class="navbar-brand-title d-sm-none d-md-inline" style ="font-size : 0px" >START</span>
      </router-link>

      <!-- TODO: For XS breakpoint, this should be here...  -->
      <!-- <ReloadControl class="mr-3" /> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="text-right text-md-center" is-nav>
        <b-navbar-nav>
          <router-link v-if="!canRunBacktest" class="nav-link navbar-nav" to="/trade" style ="font-size : 0px"
            >Trading</router-link
          >
          <router-link v-if="!canRunBacktest" class="nav-link navbar-nav" to="/dashboard" style ="font-size : 0px"
            >Dashboard</router-link
          >
          <router-link class="nav-link navbar-nav" to="/graph" style ="font-size : 0px">Charts</router-link>

          <router-link v-if="canRunBacktest" class="nav-link navbar-nav" to="/backtest"
            >Backtest</router-link>
          <router-link v-if="!canRunBacktest" class="nav-link navbar-nav" to="/Per" style ="font-size : 0px"
            >Performance</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto" menu-class="w-100">
          <!-- TODO This should show outside of the dropdown in XS mode -->

          <li v-if="hasBots" class="nav-item">
            <!-- Hide dropdown on xs, instead show below  -->
            <b-nav-item-dropdown right class="d-none d-sm-block">
              <template #button-content>
                <b-avatar size="2em" button>FT</b-avatar>
              </template>

              <router-link
                v-if="botCount === 1"
                class="dropdown-item"
                to="/"
                @click.native="clickLogout()"
                >Sign Out</router-link
              >
            </b-nav-item-dropdown>
            <div class="d-block d-sm-none">
              <!-- Visible only on XS -->
              <li class="nav-item text-secondary ml-2 d-sm-none d-flex justify-content-between">
                <div class="d-flex">
                  <b-nav-text class="verticalCenter small mr-2">
                    {{ botName || 'No bot selected' }}
                  </b-nav-text>
                  <b-nav-text class="verticalCenter">
                    {{ isBotOnline ? 'Online' : 'Offline' }}
                  </b-nav-text>
                </div>
              </li>

              <router-link
                v-if="botCount === 1"
                class="nav-link navbar-nav"
                to="/"
                @click.native="clickLogout()"
                >Sign Out</router-link
              >
            </div>
          </li>
          <li v-else>
            <!-- should open Modal window! -->
            <LoginModal />
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<template>

    <main class="login2">
        <section class="forms">
            <form class="register" @submit.prevent="register">
                <h2>LOGIN</h2>
                <input
                    type="email"
                    placeholder="Email address"
                    v-model="register_form.email" />

                <input
                    type="password"
                    placeholder="Password"
                    v-model="register_form.password" />

                <input
                    type="submit"
                    value="Register" />
                    

            </form>

            

            <form class="login" @submit.prevent="login">
              
             <!--   <h2>login</h2>
                <input
                    type="email"
                    placeholder="Email address"
                    v-model="login_form.email" />

                <input
                    type="password"
                    placeholder="Password"
                    v-model="login_form.password" />

                <input
                    type="submit"
                    value="login" />--->

                    <input
                    type="submit"
                    value="Login" />

            </form>

            <form class="login"></form>
          
        </section>
    </main>
</template>

<script>
import { ref } from "@vue/composition-api"
import { useStore } from '@vueblocks/vue-use-vuex'
export default {
    setup () {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', register_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        return{
            login_form,
            register_form,
            login,
            register

        }
    }

}
</script>

<style>
forms {
    display: flex;
    min_height: 1000vh;
    background-color: #000;
}

from {
    flex: 1 1 0%;
    padding: 8rem 1rem 1rem;
    background-color: #000;

}
.login2 {
  background-color: #000;
}
form.register {
    color: rgb(0, 0, 0);
    background-color: #000;
    background-image: linear-gradient(
        to bottom right,
         #000 100%,
        rgb(5, 5, 5) 100%
    );
}

form.login {
    color: rgb(2, 2, 2);
    background-color: #000;
    height: 327px;
    background-image: linear-gradient(
        to bottom right,
         #000 70%,
        rgb(255, 28, 28) 100%
    );
}

h2 {
  padding-top: 50px;
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
  color: rgb(255, 255, 255);
}
input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	font-size: 1.3rem;
	margin-bottom: 2.5rem;
	padding: 1.1rem 1rem;
}
input:not([type="submit"]) {
	opacity: 0.9;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 2;
}
input::placeholder {
	color: inherit;
}
form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}
form.login input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 3px solid #FFF;
}
form.login input[type="submit"] {
	background-color: rgb(255, 255, 255);
	color: rgb(0, 0, 0);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 1.9rem;
	cursor: pointer;
	text-transform: uppercase;
}
form.register input[type="submit"] {
	background-color: #FFF;
	color: #000;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 2rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
