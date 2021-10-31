const BASE_URL = "http://localhost:8081";
const RESOURCE_URL = `${BASE_URL}/animal`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null}) => {
    try {
        const requiredParameters = {
            method, 
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        if (body) {
            requiredParameters.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, requiredParameters);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllAnimals = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    
    return await rawResponse.json();
}

export const postAnimal = (body) => baseRequest({ method: "POST", body });

export const updateAnimal = (id, body) => 
    baseRequest({ urlPath:`/${id}`, method: "PUT", body });

export const deleteAnimal = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });
