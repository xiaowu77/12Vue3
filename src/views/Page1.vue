<template>
    <div class="page1">
        <h1>问卷调查表填写</h1>
        <P>请问？</P>
        <input type="radio" name="radio" v-model="sex" value="男">男
        <input type="radio" name="radio" v-model="sex" value="女">女
        <input type="radio" name="radio" v-model="sex" value="保密">保密<br><br>
        <button @click="doClick()">下一步</button> <button @click="reset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page1",
        data(){
            return{
                sex:'男',
                showErr1:false,
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addInfo",{sex:this.sex})
                this.$router.push('/page2');
                console.log(this.$store.state.info)
            },
            reset(){
                this.sex="男"
            }
        }
    }
</script>

<style scoped>
button{color: burlywood;border: 0px;background: white}
</style>