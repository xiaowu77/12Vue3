<template>
    <div class="page3">
        <h1>问卷调查表填写</h1>
        <P>自我介绍</P>
        <textarea cols="50" rows="4" style="OVERFLOW: hidden" v-model="selfInfo"></textarea><br><br>
         <button @click="upClick()">上一步</button> <button @click="suClick()">提交</button> <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page3",
        data(){
            return{
                selfInfo:''
            }
        },
        methods:{
            upClick(){
                this.$router.push('/page2');
            },
            suClick(){
                this.$store.commit("addInfo",{selfInfo:this.selfInfo})
                this.$router.push('/page4');
                console.log(this.$store.state.info)
            },
            reset(){
                this.selfInfo=""
            }
        }
    }
</script>

<style scoped>
    button{color: burlywood;border: 0px;background: white}
</style>