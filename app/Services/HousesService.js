import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import {House} from "../Models/House.js"

class HousesService {
    async getHouses() {
        let res = await api.get('/houses')
        ProxyState.houses = res.data.map(h => new House(h))
    }

    async createHouse(houseFormData) {
        let res = await api.post('/houses', houseFormData)
        let house = new House(res.data)
        ProxyState.houses = [...ProxyState.houses, house]
    }

    async deleteHouse(houseId) {
        let url = `/houses/${houseId}`
        await api.delete(url)
        ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
    }

    async editHouse(houseData) {
        let res = await api.put(`/houses/${houseData.id}`, houseData)

        let house = new House(res.data)
        let houseIndex = ProxyState.houses.findIndex(h => h.id ==houseData.id)
        ProxyState.houses.slice(houseIndex, 1, house)
        ProxyState.houses = ProxyState.houses
    }
}

export const housesService = new HousesService()