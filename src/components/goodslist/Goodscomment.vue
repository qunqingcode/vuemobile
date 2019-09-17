<template>
    <div>
      <cmtbox :id="id"></cmtbox>
    </div>
</template>
<script>
import comment from '../subcomponents/comment'
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
       'cmtbox':comment
    }
}
</script>
<style lang="scss" scoped>
    
</style>