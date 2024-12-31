const details = []

const getReservationInfo = (event) => {

    event.preventDefault()

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('emailAddr').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const contactNumber = document.getElementById('contactNumber').value;

    if (!firstName || !email || !checkIn || !checkOut || !contactNumber){
        alert('There are some empty fields!')
    }

    const reservationInfo = {
        firstName,
        lastName,
        email,
        checkIn,
        checkOut,
        contactNumber,
    }

    details.push(reservationInfo)
    show()
    document.getElementById('formId').reset()
}

const show = () => {

    const tableBody = document.getElementById('body');

    tableBody.innerHTML = '';

    details.map((reservation, indexNum) => {
        const raw = document.createElement('tr')

        raw.innerHTML = `
            <td class="td">${reservation.firstName}</td>
            <td class="td">${reservation.lastName}</td>
            <td class="td">${reservation.email}</td>
            <td class="td">${reservation.checkIn}</td>
            <td class="td">${reservation.checkOut}</td>
            <td class="td">${reservation.contactNumber}</td>
            <td class="deleteButtonOfTableRaw" onclick="deleteReservation(${indexNum})"> <button class="deleteButton"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg></button> </td>
        `
        tableBody.appendChild(raw)
    })
}

const deleteReservation = (indexNum) => {
    details.splice(indexNum, 1)
    show()
}

document.getElementById('formId').addEventListener('submit', getReservationInfo);
