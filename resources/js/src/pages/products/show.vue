<template>
    <div class="row m-5">
        <div class="sweety_card">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <h1><strong>Show</strong></h1>
                </div>
                <div class="col-auto">
                    <router-link :to="{ name: 'products.index' }">
                        <button class="btn btn-outline-danger">Back</button>
                    </router-link>
                </div>
            </div>
            <hr class="dotted_line">
            <div class="row mt-5">
                <div class="col-6">
                    <img :src="product.picture" class="img-fluid sweety_image">
                </div>
                <div class="col-6">
                    <h3>{{ product.name }}</h3>
                    <hr class="product_dotted_line">
                    <ul>
                        <li>ID: {{ product.id }}</li>
                        <li>Created At: <br> {{ tstmpToDateTime(product.created_at) }}</li>
                    </ul>
                    <div class="btn-group mt-1" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-danger">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <router-link :to="{ name: 'products.edit', params: { id: product.id } }">
                            <button type="button" class="btn btn-outline-warning">
                                Edit
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import { defineComponent, ref } from "vue";
import { useProductStore } from "@/stores/product";
import { useRoute } from "vue-router";
import moment from "moment";
export default defineComponent({
    name: "products-index",
    components: {
    },
    setup() {
        const route = useRoute();
        const productStore = useProductStore();
        const product = ref({
            id: 0,
            name: '',
            picture: '',
        });
        productStore.getProductAction(route.params.id).then((r) => {
            product.value = r;
        });
        const tstmpToDateTime = (timestamp) => {
            return moment(timestamp).format("dd mm yyyy");
        };
        return {
            product,
            tstmpToDateTime
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
