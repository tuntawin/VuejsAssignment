<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <form>
                <div class="form-group row">
                    <label for="brandName" class="col-sm-3 col-form-label">Brand Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="brandName" v-model="brandName" placeholder="Brand Name">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-12" style="text-align: center;">
                        <button type="button" class="btn btn-primary" v-on:click="save">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name : "add-brand",
    data: function () {
        return {
            brandName: ''
        }
    },
    methods:{
        save(){
            this.$emit('add-brand', this.brandName)
            this.brandName = ''
        }
    }
}
</script>
