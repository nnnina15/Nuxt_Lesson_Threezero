<template>
    <div>
        <section id='intro'>
			<div v-if='property.image' class="jumbotron jumbotron2" :style="'background-image: url(' + backendurl + property.image[0].url + ') '">
			  <div class='container'>
				  <div class='row'>
					  <div class='col-md-12'>
					  </div>
				  </div>
			  </div>
			</div>
		</section>
		<section id='singlecontent'>
	        <div class="container">
		        <div class='row'>
                    <div class='col-md-8'>
                        <h1>{{ property.title }} 
                            <span v-if='property.status' class='thetag'>放租中</span>
                            <span v-if='!property.status' class='thetag'>己放租</span>
                        </h1>
                        <h5>HKD{{ property.rent }}/月</h5>
                        <p>
                            地址： {{ property.address }}<br>
                            實用面積： {{ property.area }}呎<br>
                            房間： {{ property.room }}<br>
                            廳 ： {{ property.livingroom }}<br>
                            刊登日期： {{ property.date }}
                        </p>
                        <h4>簡介</h4>
                        <div v-if='property.content' v-html="$md.render(property.content)"></div>
                    </div>
                    <div class='col-md-4'>
                        <div class='apply'>
                            <h5><i class="far fa-calendar-check"></i> 業主聯絡方法</h5>
                            <hr>
                            <p>你必須登入才能看見資料</p>
                        </div>
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
			title: this.property.title + ' - Threezero'
		}
	},    
	data() {
		return {
			frontendurl : process.env.frontendurl,
			backendurl : process.env.backendurl,
		}
	},
	async asyncData({ $axios , params }) {
	const properties = await $axios.$get( process.env.backendurl + '/properties?slug=' + params.slug );
	let property = properties[0];
	return { property }
	}
}
</script>