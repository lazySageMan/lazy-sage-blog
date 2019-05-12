<template>
  <div class="hello">
    <mavon-editor
        :value="md"
        :subfield = "false"
        :toolbarsFlag = "false"
        :editable="false"
        :scrollStyle="true"
        codeStyle="atom-one-dark"
        :ishljs="true"
        fontSize="18"
        defaultOpen='preview'>
    </mavon-editor>
  </div>
</template>
<script>

import md from '../assets/text.md'

export default {
  name: 'HelloWorld',
  data(){
    return {
      md: md
    }
  },

  created(){
  },

  methods: {
    
  },

  
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width: 50vw;
  margin: auto;
  position: relative;
  z-index: 10;
  background: #fff;
}

</style>
