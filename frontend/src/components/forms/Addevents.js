import React from 'react'
import '../../css/style.css'
import Agri from '../../img/agri.png'
const Addevents = () => {
  return (
    <div class="pt-5 mt-5">
      <div class="container-fluid mx-0 px-0 mt-5">
            <div class="row d-flex justify-content-center">
                <div class=" card col-sm-5 pt-5" >
                    <form id="eventForm">
                        <div class="row justify-content-center">
                            <div class="col-md-6 formContainerForLogin mb-5 d-flex flex-column">
                                <input type="hidden" id="imgUrl" name="imgUrl" value={Agri} />
                                <label for="Name" class="formlabel">Title</label>
                                <input type="text" id="cardTitle" name="cardTitle" />
                                <label for="Name" class="formlabel">Description</label>
                                <textarea id="Description" name="Description"></textarea>
                                <input type="submit" value="Add Event" class="formBtn" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addevents;
