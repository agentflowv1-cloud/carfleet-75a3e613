// Get vehicle data from API or database
const getVehicleData = async (vehicleId) => {
    try {
        const response = await fetch(`https://example.com/api/vehicles/${vehicleId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// Populate vehicle details page with data
const populateVehicleDetails = (vehicleData) => {
    document.getElementById("make").innerText = vehicleData.make;
    document.getElementById("model").innerText = vehicleData.model;
    document.getElementById("year").innerText = vehicleData.year;
    document.getElementById("mileage").innerText = vehicleData.mileage;
    document.getElementById("color").innerText = vehicleData.color;
};

// Handle vehicle card click event
const handleVehicleCardClick = (vehicleId) => {
    getVehicleData(vehicleId).then((data) => {
        populateVehicleDetails(data);
    });
};