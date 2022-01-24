<template>
    <div>
        <section class="loginform">
	        <div class="container">
		        <div class='row'>
                    <div class='col-md-8 offset-md-2 '>
                        <div>
                            <p v-if='loading&&!finishsubmit'>正在提交你的資料...</p>
                            <p v-if='finishsubmit'>已經成功提交資料，請檢查你的電郵確認你的帳號。</p>
                            <div v-if='!loading&&!finishsubmit'>
                                <div class="alert alert-primary" role="alert">
                                    已經有帳號？<nuxt-link to='/users/signin'>按此</nuxt-link>立即登入
                                </div>
                                </div>
                                <div class='col-md-12 text-center'>
                                    <h1>註冊</h1>
                                </div>
                                <div class='col-md-8 offset-md-2 '>
                                <div class="form-group">
                                    <label>你的電郵</label>
                                    <input type="email" v-model='email' class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label>密碼</label>
                                    <input type="password" v-model='password' class="form-control" >
                                </div>
                                <small id="emailHelp" class="form-text text-muted">*當你按下「註冊」，代表你同意並接受我們的 <a href=''>使用條款</a></small>
                                <button @click='register' type="submit" class="btn btn-primary">註冊</button>
                            </div>
                        </div>
                    </div>
		        </div>
	        </div>
		</section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            frontendurl : process.env.frontendurl,
            backendurl : process.env.backendurl,
            email:'',
            password:'',
            loading: false,
            finishsubmit: false

        }
    },
    methods: {
		...mapMutations({
			setUser: 'auth/setUser'
		}),
		async register() {
            this.loading = true
			const response = await this.$axios.$post(process.env.backendurl + "/auth/local/register",{
                username: this.email,
			    email: this.email,
    			password: this.password,
			})
			.then(r=>{
				console.log(r)
				this.finishsubmit = true
			})
			.catch(err=>{
				console.log(err)
				alert('Error!')
			})
			
		}
	}
}
</script>