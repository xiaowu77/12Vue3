<template>
    <div class="page2">
        <h1>问卷调查表填写</h1>
        <P>兴趣？</P>
        <input type="checkbox"  value="看书" v-model="hobby">看书
        <input type="checkbox"  value="游泳" v-model="hobby">游泳
        <input type="checkbox"  value="听歌" v-model="hobby">听歌<br><br>
        <button @click="upClick()">上一步</button> <button @click="doClick()">下一步</button> <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page2",
        data(){
            return{
                hobby:[]
            }
        },
        methods:{
            upClick(){
                this.$router.push('/page1');
            },
            doClick(){
                this.$store.commit("addInfo",{hobby:this.hobby})
                this.$router.push('/page3');
            },
            reset(){
                this.hobby=[]
            }
        }
    }
</script>

<style scoped>
    button{color: burlywood;border: 0px;background: white}
</style>