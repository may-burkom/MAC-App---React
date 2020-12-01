
//import axios from "axios"
import './css/new_consultation.css'

const Consultation= () =>{
    // Find consultation form 
    // const consultationForm = document.querySelector('.consultation-form')
    // // Process the sumbission of the form 
    // consultationForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the consultation form")
    //     var formData = new FormData(consultationForm)
    //     console.log("form data")
    //     // Posting that data to our API     
    //     axios.post('/add-consultation', formData)
    // })
    return(
        <div>
            <div class="grid-container">
                <div class="Header"></div>
                <div class="existing-consultation">
                    <div class="summary-in">
                        <div class="sunm-in"></div>
                        <div class="rrooms">
                            <div class="rooms">ROOMS</div>
                            <div class="rooms-in"></div>
                            <div class="dates"></div>
                            <div class="date-ins"></div>
                        </div>
                    </div>
                    <div class="attached-files">
                        <div class="files-">ATTACHED FILES</div>
                        <div class="vedios">VIDEOS</div>
                        <div class="audios">AUDIOS</div>
                    </div>
                    <div class="names"></div>
                    <div class="namess">
                        <div class="doc-names">DOC-NAME</div>
                        <div class="doc-in"></div>
                        <div class="patient-names"></div>
                        <div class="patname-in"></div>
                        <div class="status"></div>
                    </div>
                </div>
                <form className="consultation-form">
                <div class="new-consultation">
                    <div class="patient-name"></div>
                    <div class="pat-input"></div>
                    <div class="Doctors-name"></div>
                    <div class="doc-input">
                        <div class="name"></div>
                        <div class="doc-name"></div>
                        <div class="doc-id"></div>
                    </div>
                    <div class="date">
                        <div class="date-in"></div>
                    </div>
                    <div class="save"></div>
                    <div class="attaced-files">
                        <div class="files"></div>
                        <div class="vedio"></div>
                        <div class="audi"></div>
                        <div class="vedio-in"></div>
                        <div class="files-in"></div>
                        <div class="filess"></div>
                        <div class="audi-in"></div>
                    </div>
                    <div class="roomss">
                        <div class="room-in"></div>
                        <div class="rooms-title"></div>
                    </div>
                    <div class="sumin">
                        <div class="sum-title"></div>
                        <div class="sum-in"></div>
                    </div>
                </div>
                </form>
            </div>
          

          

           
            
        </div>
    )
}

export default Consultation;