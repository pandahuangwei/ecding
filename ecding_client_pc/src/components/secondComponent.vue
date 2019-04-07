<template>
    <div id="firstcomponent">
        <h1>{{count2}}</h1>
        <a href="javascript:void(0);">write by {{author}}</a>
    </div>
</template>
<!-- the js -->
<script type="text/javascript">
    export default{
        data(){
            return {
                author:'jeff',
                count2:this.$store.state.count
            }
        }
    }
</script>
