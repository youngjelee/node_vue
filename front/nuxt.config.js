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
          hid: 'ogtitle' ,name : 'og:title' , content : 'NodeBird',
        }
        ,{
          hid: 'ogdesc' , name : 'og:description' , content : 'NodeBird 만들기연습',
        }
        ,{
          hid: 'ogtype' ,property : 'og:type' , content : 'website',
        }
        ,{
          hid: 'ogimage' ,  property : 'og:image' , content : 'http://localhost:3080/vue-nodebird.png',
        },{
          hid: 'ogurl' , property : 'og:url' , content : 'https://vue.nodebird.com/',
        }],
      link : [{ rel:'shortcut icon', href : '/vue-nodebird.png'}]
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
    },
    server : {
      port: process.env.PORT || 3085
    }
  };