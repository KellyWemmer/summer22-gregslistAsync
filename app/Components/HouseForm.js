import { House } from "../Models/House.js";

export function getHouseForm(house = new House({})) {

    let submitAction = 'app.housesController.createHouse()'
    if(house.id) {
        submitAction = `app.housesController.editHouse('${house.id}')`
    }
    return `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
        <h3 class="text-primary">List Your House</h3>
        <div class="row">
            <div class="col-4">
                <label class="form-label" for="bedrooms">Beds</label>
                <input class="form-control" type="number" minlength="1" id="bedrooms" name="bedrooms" value="${house.bedrooms}" >
            </div>
            <div class="col-4">
                <label class="form-label" for="bathrooms">Bath</label>
                <input class="form-control" type="number" id="bathrooms" name="bathrooms" value="${house.bathrooms}">
            </div>
            <div class="col-4">
                <label class="form-label" for="year">Year</label>
                <input class="form-control" type="number" id="year" name="year" value="${house.year}">
            </div>
            <div class="col-6">
                <label class="form-label" for="price">Price</label>
                <input class="form-control" type="number" id="price" name="price" value="${house.price}">
            </div>
            <div class="col-6">
                <label class="form-label" for="levels">Levels</label>
                <input class="form-control" type="number" id="levels" name="levels" value="${house.levels}">
            </div>
                <label class="form-label" for="img">Image</label>
                <input class="form-control" type="text" id="img" name="img" value="${house.img}">
                <label class="form-label" for="description">Description</label>
                <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${house.description}"></textarea>
                <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
        </div>
  </form>
    `
}