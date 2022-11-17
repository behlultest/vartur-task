import { defineStore } from 'pinia'
import ApiService from '../core/api_services';
import router from '../router';
import Swal from 'sweetalert2';

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      products: []
    }
  },

  actions: {
    async getProductsAction() {
      const api = new ApiService();
      const response = await api.get('/products');
      console.log(response);
      if (response.data.status == true) {
        this.products = response.data.data;
      }
    },
    async getProductAction(id) {
      const api = new ApiService();
      const response = await api.get('/products/' + id);
      console.log(response);
      if (response.data.status == true) {
        return response.data.data;
      }
    },
    async addProductAction(data) {
      const api = new ApiService();
      const response = await api.postFormData('/products', data);
      console.log(response);
      if (response.data.status == true) {
        this.products = [this.products, response.data.data];
        router.push({ name: 'products.index' });
      }
    },
    async putProductAction(data) {
      const api = new ApiService();
      const response = await api.postFormData('/products/' + data.id, data);
      console.log(response);
      if (response.data.status == true) {
        router.push({ name: 'products.show', params: { id: data.id } });
      }
    },

    async deleteProductAction(id) {

      const check = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      if (check.isConfirmed) {
        const api = new ApiService();
        const response = await api.delete('/products/' + id);
        console.log(response);
        if (response.data.status == true) {
          this.getProductsAction();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      }
    }
  },
})