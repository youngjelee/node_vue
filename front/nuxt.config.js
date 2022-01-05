module.exports = {
    head: {
        title: 'NodeBird',
        meta :[{
          charset: 'utf-8',
        },{
          name : 'viewport',
          content : 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
        },{
          'http-equiv' : 'X-UA-Compatible', content:'IE=edge',
        },{
          name:'description',content : '이제영 NodeBird SNS 만들기 연습'
        }
        ,{
          name : 'og:title' , content : 'NodeBird',
        }
        ,{
          name : 'og:description' , content : 'NodeBird 만들기연습',
        }
        ,{
          property : 'og:type' , content : 'website',
        }
        ,{
          property : 'og:image' , content : 'https://vue.nodebird.com/vue-nodebird.png',
        },{
          property : 'og:url' , content : 'https://vue.nodebird.com/',
        },
        
      ]
    },
    modules: [
      '@nuxtjs/axios',
    ],
    buildModules: [
      '@nuxtjs/vuetify',
      '@nuxtjs/moment'
    ],
    moment : {
      locales : ['ko']
    },
    build : {
      analyze : false,
      extend(config , {isClient ,isServer, isDev}){
        if(isServer && !isDev){
          config.devtool = 'hidden-source-map';
        }
        console.log('webpack',config,isServer,isClient);
      }
    },
    vuetify: {},
    axios : {
      browserBaseURL : 'http://localhost:3085',
      baseURL : 'http://localhost:3085',
      https: false
    }
  };