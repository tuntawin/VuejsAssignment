<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <form>
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Brand Name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="description" class="col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="description" v-model="description" placeholder="Description">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="picture" class="col-sm-3 col-form-label">Picture</label>
                    <div class="col-sm-9">
                        <input type="file" class="form-control" @change="onFileChange" id="picture">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label">Price</label>
                    <div class="col-sm-9">
                        <input type="number" class="form-control" id="price" v-model="price" placeholder="99.09">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-12" style="text-align: center;">
                        <button type="button" class="btn btn-Success" v-on:click="save">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {    
    name : "add-mobile",
    data: function () {
        return {
            name: '',
            description: "",
            price: null,
            picture : null
        }
    },
    methods:{
        save(){
            this.$emit('add-mobile', {
                name : this.name,
                description : this.description,
                price : this.price,
                picture : this.picture,
                yescounter: 0,
                nocounter: 0,
                isNew : true
            })
            this.name = this.description = this.price = this.picture = ''
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.createImage(files[0]);
        },
        createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
    
        reader.onload = (e) => {
            vm.picture = e.target.result;
        };
        reader.readAsDataURL(file);
        },
    }
}
</script>

