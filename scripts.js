function Recruiter() {
    alert("Recruiter button clicked!")
}
function JobSeeker(){
    alert("Job Seeker button clicked!")
}


function login() {
    alert("Login button clicked!");
    // Redirect to login page or handle login functionality
}

function register() {
    alert("Register button clicked!");
    // Redirect to register page or handle registration functionality
}

function performSearch() {
    const search = document.getElementById('jobs to explor').value ;
    const location = document.getElementById('Location').value;
    alert(`Searching for: ${search} in ${location}`);
    // Implement search functionality
}
