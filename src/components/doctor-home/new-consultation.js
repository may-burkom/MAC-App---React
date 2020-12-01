

import './css/new_consultation.css'

const Consultation= (props) =>{
    return(
        <div>
            <div class="grid-container2">
                <div class="dispaly1">
                    <div class="doc-name">Doctor Name</div>
                    <div class="room">Room</div>
                    <div class="date">Date</div>
                    <div class="doc-in">Dr Peter</div>
                    <div class="room-in">room50</div>
                    <div class="date-in">12/12/12</div>
                </div>
                <div class="display2"></div>
                <div class="textarea">12312</div>
            </div>
            <form className="new-doctor-form">
                <h3>new consultation</h3>
                    <div class="name">Doctors Name</div>
                    <div class="in"><input></input></div>
                    <div class="date">Date</div>
                    <div class="ins"><input></input></div>
                    <div class="room">Room</div>
                    <div class="insur"><input></input></div>
                    <div class="note">Note</div>
                    <div class="inpass"><textarea></textarea></div>
                    <div class="button"><button onClick={props.consultFormData}>Submit</button></div>
            </form>
            </div>
    )
}

export default Consultation;