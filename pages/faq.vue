<template>
    <div>
        <section id='latest'>
	        <div class="container">
		        <div class='row thehead'>
                    <div class='col-md-8 text-left'>
                        <h3 class='notag'>常見問題</h3>
                    </div>
                    <div class='col-md-4 text-right'>
                        <p><nuxt-link to='/'>主頁</nuxt-link> > <nuxt-link to='/faq'>常見問題</nuxt-link></p>
                    </div>
		        </div>
		        <div class='row'>
                    <div class='col-md-12 text-left'>
                        <div class="accordion" role="tablist">
                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                                <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>
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
        title: '常見問題 - threezero',
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