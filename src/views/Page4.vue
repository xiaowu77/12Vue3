<template>
    <div class="page4">
        <div >
            <h1>问卷调查表填写</h1>
            <P v-for = "item in list[0]">性别：{{item}}</P><br>
            <P v-for = "item in list[1]">爱好：{{item}}</P><br>
            <P v-for = "item in list[2]">自我介绍：{{item}}</P><br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page4",
        data(){
            return{
                list:this.$store.state.info
                //[ { "sex": "男" },
                // { "hobby": [ "游泳", "听歌", "看书" ] },
                // { "selfInfo": "吃喝睡" }
                // ]
            }
        }
    }
</script>

<style scoped>

</style>