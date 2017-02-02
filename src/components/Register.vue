<template>
    <div>
        <form action="">
            <p>UserName:<input type="text" title="至少5位" v-model="userName"><span v-if="userName.length<5">至少5位</span></p>
            <p>PassWord1:<input type="password" title="至少6位" v-model="password1"><span v-show="!validate_password1">6-8位组合</span></p>
            <p>PassWord2:<input type="password" title="重复密码" v-model="password2"><span v-show="!validate_password2">重复密码有误</span></p>
            <p>Email:<input type="text" title="有效地址" v-model="email">
                <span v-show="!validate_email">请输入有效邮箱</span></p>
            </p>
            <input type="submit" v-bind:disabled="!submitable" value="Submit">
        </form>
    </div>
</template>
<script>
    export default {
        name: "register",
        data() {
            return {
                userName: "",
                password1: "",
                password2: "",
                email: "",
            }
        },
        computed: {
            validate_password1() {
                if (this.password1.length == 0) { return true };
                if (this.password1.length < 6) {
                    return false
                };
                return true;
            },
            validate_password2() {
                if (this.password2.length == 0) { return true };
                if (this.password1 == this.password2) {
                    return true
                };
                return false;
            },
            validate_email() {
                if (this.email.length == 0) { return true };
                return this.isEmail(this.email);
            },
            submitable() {
                if (this.userName && this.password1 && this.password2 && this.email
                    && this.validate_password1 && this.validate_password2
                    && this.validate_email) {
                    return true
                } else {
                    return false
                }
            }
        },
        methods: {
            isEmail(str) {
                var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                return reg.test(str);
            }
        }
    }

</script>