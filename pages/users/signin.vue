<template>
    <div>
        <section class="loginform">
	        <div class="container">
		        <div class='row'>
                    <div class='col-md-8 offset-md-2 '>
                        <div class="alert alert-primary" role="alert">
                            還沒有帳號嗎？<nuxt-link to='/users/register'>按此</nuxt-link>立即註冊
                        </div>
                    </div>
                    <div class='col-md-12 text-center'>
                        <h1>登入</h1>
                    </div>
                    <div class='col-md-8 offset-md-2 '>
                        <div class="form-group">
                            <label>電郵</label>
                            <input type="email" v-model='email' class="form-control" >
                        </div>
                        <div class="form-group">
                            <label>密碼</label>
                            <input type="password" v-model='passwork' class="form-control" >
                        </div>
                        <small id="emailHelp" class="form-text text-muted">忘記密碼？ <a href=''>按此</a>重新設定密碼</small>
                        <button @click="login" type="submit" class="btn btn-primary">登入</button>
                    </div>
                </div>
            </div>
		</section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

	data(){
		return{
			frontendurl : process.env.frontendurl,
			backendurl : process.env.backendurl,
			email: '',
			password: ''
		}
	},
	methods: {
		...mapMutations({
			setUser: 'auth/setUser'
		}),
		async login() {
			const response = await this.$axios.$post(process.env.backendurl + "/auth/local",{
			    identifier: this.email,
    			password: this.password,
			})
			.then( r => {
				console.log(r)
				this.setUser('r.jwt')
				window.location = process.env.frontendurl

			})
			.catch( err => {
				console.log(err)
				alert('Error!')
			})
			
		}
	}
}
</script>