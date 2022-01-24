<template>
    <div>
        <header>
            <div class='container'>
                <div>
                    <b-navbar toggleable="lg" type="light" variant="info">
                        <b-navbar-brand>
							<nuxt-link to="/"><img src='/pictures/logo2.png' width='155'></nuxt-link>
						</b-navbar-brand>
                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
							<b-navbar-nav>
								<b-nav-item><nuxt-link to="/">主頁</nuxt-link></b-nav-item>
								<b-nav-item><nuxt-link to="/property">搜尋租盤</nuxt-link></b-nav-item>
								<b-nav-item><nuxt-link to="/blog">網誌</nuxt-link></b-nav-item>
								<b-nav-item><nuxt-link to="/faq">常見問題</nuxt-link></b-nav-item>
								<b-nav-item><nuxt-link to="/contact">聯絡我們</nuxt-link></b-nav-item>
							</b-navbar-nav>

							<!-- Right aligned nav items -->
							<b-navbar-nav class="ml-auto">
								<b-nav-item-dropdown right v-if='getuserjwt'>
									<!-- Using 'button-content' slot -->
									<template #button-content>
										我的帳號
									</template>
									<b-dropdown-item href="#">我的帳號 ({{ getuserjwt }})</b-dropdown-item>
									<b-dropdown-item @click='logout'>登出</b-dropdown-item>
								</b-nav-item-dropdown>
								<b-nav-item v-if='!getuserjwt'>
									<nuxt-link to='/users/signin'>
										<svg class='someright' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"/></svg> 登入
									</nuxt-link>
								</b-nav-item>
								<b-nav-item>
									<nuxt-link to="/" class="btn btnnew">免費放租</nuxt-link>
								</b-nav-item>
							</b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	computed:{
		getuserjwt(){
			return this.$store.getters['auth/getuserjwt']
		}
	},
	methods:{
		...mapMutations({
			logout: 'auth/logout'
		})
	}
}
</script>