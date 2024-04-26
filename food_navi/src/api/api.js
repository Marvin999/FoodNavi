const API_URL = "http://localhost:8080"

// recipeAPI ----------------------

export const fetchCards = async () => {
    const response = await fetch(API_URL + "/recipes")
    const data = await response.json()
    console.log("found this data", data)
    return data
}


export const fetchCard = async (id) => {
    console.log("fethcing a single card by id: ", id)
    const response = await fetch(`${API_URL}/recipes/${id}`)
    const data = await response.json()
    return data
}

export const createCard = async (data) => {
    // data is an object of all input fields
    // validate data
    // jasonify it
    const jsonData = JSON.stringify(data)
    console.log("json data: ", jsonData);
    // ship data off to server side (make call)
    const response = await fetch(API_URL + "/recipes", {
        method: "POST",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    })


    const body = await response.json();
    console.log("createCard fetch response: ", body, response.status);

    // get response
    // display new recipe in single recipe view upon success
}

export const deleteCard = async (id) => {
    const response = await fetch(`${API_URL}/recipes/${id}`, {
        method: "DELETE"
    })
    console.log("delete before response");
    // console.log(response);
    console.log('after');


}

export const updateCard = async (data, id) => {
        // jasonify it
        const jsonData = JSON.stringify(data)
        // console.log("update card in api +++++++++++id:", id);
        // console.log("api/update: json data: ", jsonData);
        // ship data off to server side (make call)
        const response = await fetch(`${API_URL}/recipes/${id}`, {
            method: "PUT",
            body: jsonData,
            headers: {
                "Content-Type": "application/json"
            }
        })
    
    
        const body = await response.json();
        console.log("createCard fetch response: ", body, response.status);
}

// mealsAPI --------------------

export const fetchMeals = async () => {
    const response = await fetch(API_URL + "/meals")
    const data = await response.json()
    // console.log("found this data", data)
    return data
}


export const fetchMeal = async (id) => {
    console.log("fethcing a single card by id: ", id)
    const response = await fetch(`${API_URL}/meals/${id}`)
    const data = await response.json()
    return data
}

export const createMeal = async (data) => {
    // data is an object of all input fields
    // validate data
    // jasonify it
    const jsonData = JSON.stringify(data)
    // console.log("json data: ", jsonData);
    // ship data off to server side (make call)
    const response = await fetch(API_URL + "/meals", {
        method: "POST",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    })


    const body = await response.json();
    console.log("createMeal fetch response: ", body, response.status);
}

export const deleteMeal = async (id) => {
    const response = await fetch(`${API_URL}/meals/${id}`, {
        method: "DELETE"
    })
}

export const updateMeal = async (data, id) => {
        // jasonify it
        const jsonData = JSON.stringify(data)
        // console.log("update card in api +++++++++++id:", id);
        // console.log("api/update: json data: ", jsonData);
        // ship data off to server side (make call)
        const response = await fetch(`${API_URL}/meals/${id}`, {
            method: "PUT",
            body: jsonData,
            headers: {
                "Content-Type": "application/json"
            }
        })
    
    
        const body = await response.json();
        console.log("createMeal fetch response: ", body, response.status);
}



// ingredients API ------------------------------------

export const fetchIngredients = async () => {
    const response = await fetch(API_URL + "/ingredients")
    const data = await response.json()
    // console.log("found this data", data)
    return data
}

export const fetchIngredient = async (id) => {
    // console.log("fethcing a single ingredient by id: ", id)
    const response = await fetch(`${API_URL}/ingredients/${id}`)
    const data = await response.json()
    return data
}

export const createIngredient = async (data) => {
    // data is an object of all input fields
    // validate data
    // jasonify it
    const jsonData = JSON.stringify(data)
    // console.log("json data: ", jsonData);
    // ship data off to server side (make call)
    const response = await fetch(API_URL + "/ingredients", {
        method: "POST",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    })


    const body = await response.json();
    // console.log("createIngredients fetch response: ", body, response.status);

    // get response
    // display new recipe in single recipe view upon success
}

export const deleteIngredient = async (id) => {
    const response = await fetch(`${API_URL}/ingredients/${id}`, {
        method: "DELETE"
    })
    // console.log("delete before response");
    // console.log(response);
    // console.log('after');


}

export const updateIngredient = async (data, id) => {
        // jasonify it
        const jsonData = JSON.stringify(data)
        // console.log("update card in api +++++++++++id:", id);
        // console.log("api/update: json data: ", jsonData);
        // ship data off to server side (make call)
        const response = await fetch(`${API_URL}/ingredients/${id}`, {
            method: "PUT",
            body: jsonData,
            headers: {
                "Content-Type": "application/json"
            }
        })
    
    
        const body = await response.json();
        // console.log("createCard fetch response: ", body, response.status);
}