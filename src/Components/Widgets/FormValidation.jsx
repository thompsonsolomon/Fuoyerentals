import Alert from "../UI/Alert";

export const handleValidation = ({values}) => {
    const { title, type, status, price, room, bed, country, city, address, description } =
        values;
        const AlertType = "error"
    if (title === "") {
        Alert("Title is required", AlertType);

        return false;
    } else if (type === "") {
        Alert("Last name is required", AlertType);

        return false;
    } else if (status === "") {
        Alert("Status is required", AlertType);

        return false;
    } else if (price === "") {
        Alert("Price is required", AlertType);

        return false;
    } else if (room === "") {
        Alert("Room is required", AlertType);

        return false;
    } else if (bed === "") {
        Alert("Bed is required", AlertType);

        return false;
    } else if (country === "") {
        Alert("Country is required", AlertType);

        return false;
    } else if (city === "") {
        Alert("City is required", AlertType);

        return false;
    } else if (address === "") {
        Alert("Address is required", AlertType);

        return false;
    } else if (description === "") {
        Alert("Description is required", AlertType);

        return false;
    }
    return true;
};
