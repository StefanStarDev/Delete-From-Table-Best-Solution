const SELECTORS = {
    email: '[name=email]',
    rows: '#customers tbody tr',
    emailCell: ".email-cell",
    notification: '#result'
}

const NOTIFICATIONTEXTS = {

    success: 'Deleted.',
    error: 'Not found.'
}

const getEmail = () => document.querySelector(SELECTORS.email).value

const getRows = () => document.querySelectorAll(SELECTORS.rows)

const getRowToDelete = (rows, email) => [...rows].find(row =>
    email == row.querySelector(SELECTORS.emailCell).textContent)

const deleteRow = (row) => {
    row.remove()
}

const clearEmail = () => document.querySelector(SELECTORS.email).value = ""

const setNotification = (text) => document.querySelector(SELECTORS.notification).textContent = text

const setSuccessfulNotification = () => {
    setNotification(NOTIFICATIONTEXTS.success)
}

const setErrorNotification = () =>
    setNotification(NOTIFICATIONTEXTS.error)

const deleteByEmail = () => {
    const email = getEmail()
    const rows = getRows()
    const rowToDelete = getRowToDelete(rows, email)

    if (rowToDelete) {
        deleteRow(rowToDelete)
        setSuccessfulNotification()
    } else {
        setErrorNotification()
    }


    clearEmail()
}