function loadNavbar() {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-pink">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="schedule.html">Schedule</a></li>
                        <li class="nav-item"><a class="nav-link" href="hobbies.html">Hobbies</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('navbar-container').innerHTML = navbar;
}
