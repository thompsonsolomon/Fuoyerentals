import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import { Link } from 'react-router-dom'
import { CloudUpload } from '@material-ui/icons'
import "../Styles/NewPropertyForm.scss"

function NewPropertyForm(
  {
    handleChange,
    handleFileChange,
    handleClick,
    handleSubmit,
    isFetching,
    RoundLoader,
    inputRef,
    image
  }
) {
  return (
    <div>
      <div>
        <DashboardBreadCrum Page="Add Property" text="My properties" />
      </div>
      <div>
        <div className="container-fluid">
          <div className="form-login">
            <div className="card">
              <div className="card-body">
                <div className="title">
                  <h5>Add property details</h5>
                </div>
                <div className='important-note'>
                  hello world
                </div>
                <form
                  className="row gx-3"
                  onSubmit={(event) => handleSubmit(event)}
                  autoComplete="off"
                >
                  <div className="form-group ">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control shadow-none"
                      placeholder="Merrick in Spring Way"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group  select-group ">
                    <label>Property Type</label>
                    <select name="type" onChange={(e) => handleChange(e)}>
                      <option value="Apartment">Apartment</option>
                      <option value="Office">Office</option>
                      <option value="Villa">Villa</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Shop">Shop</option>
                      <option value="Land">Land</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group  select-group ">
                    <label>Property Status</label>
                    <select name="status" onChange={(e) => handleChange(e)}>
                      <option value="Rent">Rent</option>
                    </select>
                  </div>
                  <div className="form-group ">
                    <label>Property Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control shadow-none"
                      placeholder="Amount in Naira(₦)"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group  select-group ">
                    <label>Max Rooms</label>
                    <select name="room" onChange={(e) => handleChange(e)}>
                      <option value={1} >1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <div className="form-group  select-group ">
                    <label>Beds</label>
                    <select name="bed" onChange={(e) => handleChange(e)}>
                      <option value={1} >1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                      className="form-control shadow-none"
                      placeholder="Office,Villa,Apartment"
                      onChange={(e) => handleChange(e)}
                      cols="20"
                      rows="10"
                      resize="vertical"
                    ></textarea>
                  </div>
                  <div className="form-group ">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      className="form-control shadow-none"
                      placeholder="Nigeria"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control shadow-none"
                      placeholder="Akure"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control shadow-none"
                      placeholder="Address of your property"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image (*JPEG*, *PNG*, *JPG*)</label>
                    {image && image.preview ? (
                      <div
                        onClick={handleClick}
                        className="preview d-flex"
                      >
                        <img
                          src={image.preview}
                          className="w-100"
                          alt="property-img"
                        />
                      </div>)
                      : (<div className="dropzone"
                        onClick={handleClick}>
                        <div className="icon"><i>
                          <CloudUpload />
                        </i></div>
                        <h6>Drag & Drop file here or click to upload</h6>
                        <input
                          style={{ display: "none" }}
                          ref={inputRef}
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                          className="form-control shadow-none"
                          accept="image/*"
                        />
                      </div>)}
                  </div>
                  <div className="auth d-flex ">
                    {!isFetching ? (
                      <button
                        type="submit"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        <RoundLoader />
                      </button>
                    )}
                    <Link
                      to="/"
                      className="btn btn-dashed btn-pill color-2"
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPropertyForm