
export default class service {
    _apiBase = 'https://simplereactshop.herokuapp.com/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
    }

    async getAllShirts() {
        const res = await this.getResource(`/products`);
        return res;
    }
}

