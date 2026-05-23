alert("JavaScript is working!");

const jobs = [
    { id: 1, title: "Junior Web Developer", company: "TechStart Buea", location: "Buea", description: "Great opportunity" }
];

function displayJobs() {
    const container = document.getElementById('jobListings');
    container.innerHTML = `<div class="job-card"><h3>${jobs[0].title}</h3><p>${jobs[0].company}</p></div>`;
}

document.addEventListener('DOMContentLoaded', displayJobs);