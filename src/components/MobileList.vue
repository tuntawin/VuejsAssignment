<template>
    <div>
        <div v-bind:class="[blink_new, errorClass]">
            <div class="card" style="width: 95%; margin: 0 auto">
                <div class="card-header">
                    <div style="float: left">
                        <h5 class="card-title">{{mobile.name}}
                        <span v-html="displayPrice"></span>
                        </h5>
                    </div>
                    <div style="float: right">
                        <button type="button" v-on:click="deleteMobile()" class="btn badge badge-danger">X</button>
                    </div>
                </div>
                <img class="card-img-top" src="../assets/Images/huawei-p20-pro.png" style="padding: 10px;">
                <img class="card-img-top" :src="imagePath" style="padding: 10px;">
                <div class="card-body">
                    <p class="card-text">{{mobile.description}}</p>
                </div>
                <div class="card-footer">
                    <span class="badge badge-success" style="font-size:15px;">
                        <i class="fas fa-angle-double-up"></i>  {{ mobile.yescounter }}
                    </span>
                    <span class="badge badge-danger" style="font-size:15px">
                        <i class="fas fa-angle-double-down"></i>  {{ mobile.nocounter }}
                    </span>
                    <button type="button" class="btn badge badge-info" style="font-size:15px" v-on:click="getAnswer()"><i class="far fa-question-circle"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "mobile-list",
    props:['mobile', 'index'],
    data: function () {
        return {
            blink_new2: 'blink_me',
            errorClass: ""
        }
    },methods:{
        deleteMobile(){
            this.$emit('deletemobile', this.index)
        },
        getAnswer() {
            this.$emit('getanswer', this.mobile)
        }
    },
    computed: {
        displayPrice: function () {
            var price = this.mobile.price//Vue.filter("currency")(this.mobile.price)
            var classPrice = 'success blink_me'
            if (this.mobile.nocounter > this.mobile.yescounter) {
                classPrice = 'danger'
            } else if (this.mobile.nocounter == this.mobile.yescounter) {
                classPrice = 'warning'
            }
            return '<span class="badge badge-' + classPrice + '">' + price + '</span>'
        },
        blink_new: function(){
            if(this.mobile.isNew)
                return 'blink_me'
            else
                return ''
        },
        imagePath: function(){
            var path = '../assets/Images/huawei-p20-pro.png'//this.mobile.picture
            console.log(path)
            return '/img/' + this.mobile.picture
        }
    }
}
</script>
