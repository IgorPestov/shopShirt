
export default class service {
    _apiBase = 'https://simplereactshop.herokuapp.com/api/products';

    async getResource() {
        const res = await fetch(this._apiBase);
        return await res.json();

    }

    async getAllShirts() {
        const res = await this.getResource();
        return res;
    }



}

