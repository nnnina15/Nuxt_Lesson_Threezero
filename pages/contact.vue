<template>
    <div>
        <section id='intro'>
			<div class="jumbotron contact">
                <div class='row'>
                    <div class='col-md-8'></div>
                    <div class='col-md-4'>
                        <div class='cinner'>
                            <h1>聯絡我們</h1>
                            <hr>
                            <p>銅鑼灣謝斐道535號Tower 535 20樓<br>電話: (852) 6761-3714</p>
                        </div>
                    </div>
                </div>
			</div>
		</section>
		<section id='contactcontent'>
	        <div class="container">
		        <div class='row'>
                    <div class='col-md-4'>
                        <h3>聯絡方法</h3>
                        <p>如有任何查詢, 歡迎致電或電郵我們。</p>
                        <p><i class="fas fa-phone"></i> 電話: (852) 1234-5678</p>
                        <p><i class="fas fa-envelope"></i> 電郵: <a href='mailto:xxx@gmail.com'>xxx@gmail.com</a></p>
                    </div>
                    <div class='col-md-8'>
                        <h3>查詢表單</h3>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="你的名字">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="你的電郵">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="你的電話">
                        </div>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" placeholder="你的查詢"></textarea>
                        </div>
                        <a class="btn btn-primary btn-lg" href="/" role="button">提交</a>
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
        title: '聯絡方法 - threezero',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
  }
</script>