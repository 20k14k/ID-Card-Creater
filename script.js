
function fillform() {
    let landerpage = document.getElementById("landerpage");
    landerpage.classList.add("nowfillform");
    return false; // Prevent the form from submitting and page refreshing
}

function submitForm() {
    let formpage = document.getElementById("formpage");
    formpage.classList.add("nowseeid");
    console.log("hello")
    // For now, let's just prevent the default form submission behavior
    return false;
    // Get form input values
}

document.getElementById("generate").addEventListener("click", generate)
function generate() {
    document.getElementById("idcardholder").style.visibility ='visible'
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const roll = document.getElementById("roll").value;
    const dob = document.getElementById("dob").value;
    const admissionDate = document.getElementById("admissionDate").value;
    const fatherName = document.getElementById("fatherName").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const aadhar = document.getElementById("aadhar").value;


    document.getElementById("rename").innerText = name
    document.getElementById("recourse").innerText = course
    document.getElementById("rerollno").innerText = roll
    document.getElementById("redob").innerText = dob
    document.getElementById("readmd").innerText = admissionDate
    document.getElementById("refname").innerText = fatherName
    document.getElementById("readd").innerText = address
    document.getElementById("rephno").innerText = phoneNumber
    document.getElementById("reaadhar").innerText = aadhar


    const photoInput = document.getElementById('photo');
    const selectedPhoto = photoInput.files[0];

    // Check if a photo is selected
    if (selectedPhoto) {
        // Create a FileReader to read the selected photo
        const reader = new FileReader();

        reader.onload = function (e) {
            // Update the src attribute of the uploadedPhoto img element
            resphoto.src = e.target.result;
        };

        // Read the selected photo as a data URL
        reader.readAsDataURL(selectedPhoto);
    } else {
        // Display an error message if no photo is selected
        console.log('Please select a photo');
    }

}

