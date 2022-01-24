<template>
    <div>
        <section id='latest'>
	        <div class="container">
		        <div class='row thehead'>
					  <div class='col-md-8 text-left'>
					  	<h3>搜尋租盤</h3>
					  	<p class='lead'>100%終身免佣。自助配對。</p>
					  </div>
					  <div class='col-md-4 text-right'>
						<p><nuxt-link to='/'>主頁</nuxt-link> > <nuxt-link to='/property'>搜尋租盤</nuxt-link></p>
					  </div>
		        </div>
		        <div class='row searchproperties'>
                    <div class='col-md-8 text-center'>
                        <div class="row sortingwrapper">
                            <select class="form-control" v-model="sort" id="sorting">
                                <option value="rentlow">預設排序</option>
                                <option value="rentlow">租金 (由低至高)</option>
                                <option value="renthigh">租金 (由高至低)</option>
                                <option value="arealow">實用面積 (由低至高)</option>
                                <option value="areahigh">實用面積 (由高至高低)</option>
                            </select>
                        </div>
					  	<div class='row'>
						  	<div v-for='(property, idx) in filteredproperties' :key='idx' class='col-md-6 text-left'>
							  	<div class='outer'>
								  	<a :href='frontendurl + "/property/" + property.slug'>
									  	<div class='upper'>
											<div class='circular--landscape'>
												<img v-if='property.thumbnail' :src='backendurl + property.thumbnail.url'>
												<img v-if='!property.thumbnail' src='/pictures/inner.png'>
											</div>
											<div class='innertext'>
												<span v-if='property.status'>放租中</span>
                            					<span v-if='!property.status'>己放租</span>
												<h4>HKD{{ property.rent }} / 每月</h4>
											</div>
									  	</div>
									  	<div class='lower'>
										  	<h3>{{ property.title }}</h3>
										  	<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
												{{ property.address }}
											</span>
									  	</div>
										<div class="listing-features">
											<div class="row">
											  	<div class="col-md-4">
												  	<strong>實用面積 </strong><br>{{ property.area }}呎
											  	</div>
											  	<div class="col-md-4">
												  	<strong>房間 </strong><br> {{ property.room }}
											  	</div>
											  	<div class="col-md-4">
												  	<strong>廳  </strong><br>{{ property.livingroom }}
											  	</div>
											</div>
										</div>
										<div class="lastdate">
											<div class="row">
											  	<div class="col-md-5">
												  	刊登日期:
											  	</div>
											  	<div class="col-md-5 text-right">
												  	{{ property.date }}
											  	</div>
											</div>
										</div>
								  	</a>
							  	</div>
						  	</div>
					  	</div>
                        <!-- end row -->
						<button @click='showmore' v-if='totalblog > showing'>Show More</button>
                    </div>
                    <div class="col-md-4">
                        <h3 class="font24">搜尋條件</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">地址/大廈名稱/街道</label>
                                <input type="text" class="form-control" v-model='filtereddata.title' id="exampleFormControlInput1" placeholder="例如：金雞大廈">
							</div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">地區</label>
                                <select class="form-control" v-model='filtereddata.district' id="exampleFormControlSelect1">
									<option value="all"> All </option>
									<option value="dis1">地區1</option>
									<option value="dis2">地區2</option>
									<option value="dis3">地區3</option>
									<option value="dis4">地區4</option>
                                </select>
                            </div>
                        </form>
					</div>
			    </div>
	        </div>
        </section>
    </div>
</template>

<script>
export default {
	head() {
		return {
			title: '搜尋租盤 - threezero',
			meta: [
			// hid is used as unique identifier. Do not use `vmid` for it as it will not work
			{
				hid: 'description',
				name: 'description',
				content: 'My custom description'
			}
			]
		}
	},    
	data() {
		return {
			frontendurl : process.env.frontendurl,
			backendurl : process.env.backendurl,
			filtereddata : {
				title: '',
				district: 'all'
			},
			sort: 'rentlow',
			showing: 2,
			totalblog: ''
		}
	},
	async asyncData({ $axios }) {
		const properties = await $axios.$get(process.env.backendurl + '/properties')
		return { properties }
	},
	methods:{
		showmore(){
			this.showing = this.showing + 2
		}
	},
	computed:{
		filteredproperties(){
			let temp = ''
			if ( this.filtereddata.district == 'all')
				temp = this.properties.filter( x => x.title.toLowerCase().includes(this.filtereddata.title) )
			else
				temp = this.properties.filter( x => x.title.toLowerCase().includes(this.filtereddata.title) && x.district == this.filtereddata.district );
			

			this.totalblog = temp.length
			/* sorting alog */

			if (this.sort == 'rentlow'){
				temp.sort( ( a, b ) => {
					return a.rent - b.rent;
				});
			}
			if (this.sort == 'renthigh'){
				temp.sort( ( a, b ) => {
					return b.rent - a.rent;
				});
			}
			if (this.sort == 'arealow'){
				temp.sort( ( a, b ) => {
					return a.area - b.area;
				});
			}
			if (this.sort == 'areahigh'){
				temp.sort( ( a, b ) => {
					return b.area - a.area;
				});
			}

			return temp.slice(0,this.showing)
		}
	}
}
</script>