function saveData() {
    const Name = document.getElementById('Name').value;
    const Age = document.getElementById('Age').value;
    const Address = document.getElementById('Address').value;

    localStorage.setItem('Name',Name);
    localStorage.setItem('Age',Age);
    localStorage.setItem('Address',Address);

    window.location.href='projectdisplay.html'
}

document.getElementById('info').onsubmit = function(event) {
    event.preventDefault(); 
    saveData(); 
};

function displayData(){
    const Name= localStorage.getItem('Name');
    const Age=localStorage.getItem('Age');
    const Address=localStorage.getItem('Address');

    
    document.getElementById('displayName').textContent = Name ? Name : 'Not provided';
    document.getElementById('displayAge').textContent = Age ? Age : 'Not provided';
    document.getElementById('displayAddress').textContent = Address ? Address : 'Not provided';
}
