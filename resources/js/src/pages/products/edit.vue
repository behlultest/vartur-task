<template>
    <div class="row m-5">
        <div class="sweety_card">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <h1><strong>ADD</strong></h1>
                </div>
                <div class="col-auto">
                    <router-link :to="{ name: 'products.index' }">
                        <button class="btn btn-outline-danger">Back</button>
                    </router-link>
                </div>
            </div>
            <hr class="dotted_line">
            <div class="row mt-5">
                <div class="col-md-6">
                    <img :src="payload.image" class="img-fluid" alt="">
                </div>
                <div class="col-md-6">
                    <div class="form-gorup">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" v-model="payload.name" />
                    </div>
                    <div class="form-gorup mt-3">
                        <label for="picture">Change Picture</label>
                        <input type="file" class="form-control" id="picture" @change="upload_picture" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-end mt-3">
                <div class="col-auto">
                    <button @click="submit" class="btn btn-outline-success">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import { computed, defineComponent, ref } from "vue";
import { useProductStore } from "@/stores/product";
import { useRoute } from "vue-router";
export default defineComponent({
    name: "products-index",
    components: {
    },
    setup() {
        const productStore = useProductStore();
        const route = useRoute();
        const productsComputed = computed(() => productStore.products);
        const payload = ref({
            id: 0,
            name: "",
        });

        productStore.getProductAction(route.params.id).then((r) => {
            payload.value.id = r.id;
            payload.value.name = r.name;
            payload.value.image = r.picture;

        });
        const upload_picture = (e) => {
            payload.value.picture = e.target.files[0];
        };

        const submit = () => {
            productStore.putProductAction(payload.value);
        };
        return {
            productsComputed,
            payload,
            upload_picture,
            submit
        };
    },
})
</script>

<style scoped>
.sweety_card {
    background-color: #f5f5f5;
    border-radius: 20px;
    box-shadow: 10px 00px 10px 0px #f5f5f5;
    padding: 30px;
}

.dotted_line {
    border: 3px dashed rgba(124, 70, 87, 0.25);
}

strong {
    position: relative;
}

strong::after {
    content: "";
    position: absolute;
    bottom: -0.125rem;
    left: -0.5rem;
    right: -0.5rem;
    height: 0.75rem;
    z-index: 1;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

p>strong {
    font-weight: 400;
}

p>strong::after {
    bottom: -0.2rem;
    height: 0.5rem;
    left: -0.25rem;
    right: -0.25rem;
}
</style>
