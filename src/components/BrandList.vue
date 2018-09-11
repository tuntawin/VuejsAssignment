<template>
    <div>
        <div style="margin: 30px 10px 0px 10px">
            <h3>
                {{ displayBrandName }}
                <button type="button" class="btn btn-success" v-on:click="openCreateNewMobile">เพิ่มโทรศัพท์ตรงนี้</button>
                <button type="button" v-on:click="deleteBrand()" class="btn badge badge-danger">X</button>
            </h3>
            <div v-if="brand.isOpen">
                <AddMobile v-on:add-mobile="addMobile"></AddMobile>
            </div>
            <div class="row">
                <div class="col-md-3" style="padding-top: 10px" v-for="(mobile, index) in brand.mobiles" :key="index">
                    <MobileList
                        v-bind:mobile="mobile"
                        v-bind:index="index"
                        v-on:deletemobile="deleteMobile"
                        v-on:getanswer="getAnswer">
                    </MobileList>                    
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>

<script>
import AddMobile from '@/components/AddMobile'
import MobileList from "@/components/MobileList";

export default {
    name : "brand-list",
    props:['brand','index'],
    components:{
        AddMobile,
        MobileList
    },
    data: function () {
        return {
            name: '',
            description: "",
            price: 0,
            sliderValue: 0
        }
      },methods:{
        openCreateNewMobile(){
            this.brand.isOpen = !this.brand.isOpen;
            console.log(this.brand.isOpen)
        },
        deleteBrand(){
            this.$emit('deletebrand', this.index)
        },
        addMobile(mobile){
            this.brand.isOpen = !this.brand.isOpen
            this.getAnswer(mobile)
            this.resetIsNew()
            this.brand.mobiles.push(mobile)
        },
        deleteMobile(mindex){
            this.brand.mobiles.splice(mindex,1)
        },
        getAnswer(mobile) {
            // axios.get('https://yesno.wtf/api')
            //     .then(function (response) {
            //         if("yes" === response.data.answer)
            //         {
            //             mobile.yescounter++;
            //         }else{
            //             mobile.nocounter++;
            //         }

            //     })
            //     .catch(function (error) {
                    
            //     })
        },
        resetIsNew(){
            this.brand.mobiles.forEach(function(part, index, theArray) {
                theArray[index].isNew = false;
              });
        }
    },
    computed:{
        displayBrandName: function() {
            return this.brand.brandName + "(" + this.brand.mobiles.length + ")"
        },
    }
}
</script>
