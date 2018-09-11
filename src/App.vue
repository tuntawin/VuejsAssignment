<template>
  <div id="app" class="container-fluid" style="padding: 10px;">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h2>
                        ยินดีต้อนรับสู่ร้านโทรศัพท์
                    </h2>
                    <p>
                        ขายแต่โทรศัพท์เท่านั้น อย่างอื่นไม่ขาย..........
                    </p>
                    <p>
                        <button type="button" class="btn btn-primary btn-large" v-on:click="openCreateNewBrand">เพิ่มตรงนี้</button>
                    </p>
                </div>
                <div id="addbrand" v-if="isAdd">
                    <AddBrand v-on:add-brand="addBrand"></AddBrand>
                </div>
                <hr>
                <div id="molilelist">
                    <div v-for="(brand, index) in brands" :key="index">
                        <BrandList 
                            v-bind:brand="brand"
                            v-bind:index="index"
                            v-on:deletebrand="deleteBrand">
                        </BrandList>
                        <div style="clear: both;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
  @import './assets/css/style.css';
  @import 'https://use.fontawesome.com/releases/v5.3.1/css/all.css';
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
</style>


<script>
import AddBrand from './components/AddBrand'
import BrandList from './components/BrandList'
import HuaweiP20 from './assets/Images/huawei-p20-pro.png'
import Mate10 from './assets/Images/mate10.png'
import Nova3i from './assets/Images/nova3i.png'
import IPhoneX from './assets/Images/iPhone-X.png'
import Iphone8 from './assets/Images/iphone8.png'


export default {
  name: 'app',
  components:{
    AddBrand,
    BrandList
  },
  data() {
   return {
        isAdd: false,
        isAddMobile: false,
        // brands: [],
        brands: [{
            brandName: 'Huawei',
            isOpen : false,
            mobiles: [
                {
                    name: 'P20 Pro',
                    description: "กล้องเทพ",
                    price: 20000,
                    picture : HuaweiP20,
                    yescounter: 0,
                    nocounter: 0,
                    isNew: false
                },
                {
                    name: 'Mate 10',
                    description: "เครื่องดีดี",
                    price: 24000,
                    picture : Mate10,
                    yescounter: 0,
                    nocounter: 0,
                    isNew: false
                },
                {
                    name: 'NOVA 3i',
                    description: "4 กล้องเทพ",
                    price: 9990,
                    picture : Nova3i,
                    yescounter: 0,
                    nocounter: 0,
                    isNew: false
                }
            ]
        },
        {
            brandName: 'Apple',
            isOpen : false,
            mobiles: [
                {
                    name: 'Iphone X',
                    description: "สวัสดีอนาคต",
                    price: 20000,
                    picture : IPhoneX,
                    yescounter: 0,
                    nocounter: 0,
                    isNew: false
                },
                {
                    name: 'Iphone 8',
                    description: "ความสวยในความฉลาด",
                    price: 24000,
                    picture : Iphone8,
                    yescounter: 0,
                    nocounter: 0,
                    isNew: false
                }
            ]
        }]
   }
  },
  methods:{
    openCreateNewBrand: function () {
        this.isAdd = !this.isAdd
        console.log(this.isAdd)
    },
    addBrand(brandName){
        this.isAdd = !this.isAdd
        this.brands.push({
            brandName : brandName,
            isOpen : false,
            mobiles : []
        })
    },
    deleteBrand(index){
        this.brands.splice(index,1)
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
