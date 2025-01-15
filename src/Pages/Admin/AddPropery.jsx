import React, { useRef, useState } from 'react'
import { NewPropertyForm } from '../../Components/Admin'
import { AdminHeader, SideBar } from '../../Components/Admin'
import { handleValidation } from '../../Components/Widgets/FormValidation';
import { useHistory } from 'react-router-dom';
import { RoundLoader } from '../../Components/UI/Loader';


function AddPropery() {

  const navigate = useHistory()
  const [values, setValues] = useState({
    title: "",
    type: "Apartment",
    status: "Rent",
    price: 0,
    room: 1,
    bed: 1,
    country: "",
    city: "",
    address: "",
    description: "",
  });
  const [isFetching, setIsFetching] = useState(false);

  const [image, setImage] = useState({ preview: "", data: "" });
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (handleValidation(values)) {
        setIsFetching(true)
        if (image) {
          let formData = new FormData();
          const fileName = Date.now() + image.data.name
          // console.log(fileName)
          formData.append("imageName", fileName);
          formData.append("image", image.data);
          values.image = fileName;
          try {
            //firebase file upload function
          } catch (error) {
            // error
          }
        }
        // firebase db upload
        navigate("/admin/dashboard")
      }
    } catch (error) {
      // error 
      setIsFetching(false)
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <div className='AdminChats'>
      <div className='dashboard'>
        <AdminHeader />
        <div className="dashboardWrapper">
          <SideBar />
          <div className='dashboardConainer'>
            <NewPropertyForm
              handleChange={handleChange}
              handleClick={handleClick}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              RoundLoader={RoundLoader}
              image={image}
              inputRef={inputRef}
            />
          </div>
        </div>
      </div>

    </div>

  )
}

export default AddPropery