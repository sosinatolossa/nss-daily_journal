import { saveJournalEntry } from "../JournalDataProvider.js"

const formTarget = document.querySelector(".formContainer")

export const JournalFormComponent = () => {
     formTarget.innerHTML = `<form action="" class="forms">
            <fieldset>
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        </form>

        <form action="" class="forms">
            <fieldset>
                <label for="conceptsCovered">Concepts Covered</label>
                <input type="text" name="journalConcepts" id="conceptsCovered">
            </fieldset>
        </form>

        <form action="" class="forms">
            <fieldset>
                <label for="journalEntry">Concept Description</label>
                <input type="text" name="journalEntry" id="conceptDescription">
            </fieldset>
        </form>

        <form action="" class="forms">
            <fieldset>
                <label for="moodOfToday">Mood</label>
                <select name="mood" id="mood">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="in-between">In-between</option>
                </select>
            </fieldset>
        </form>
        <input id="submit_button" type="submit" value="Record Journal Entry"></input>`
}

formTarget.addEventListener("click", (event) => {
    if (event.target.id === "submit_button") {
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#conceptsCovered").value
        const description = document.querySelector("#conceptDescription").value
        const mood = document.querySelector("#mood").value
        debugger
        const newEntry = {
            date: date,
            concept: concept,
            description: description,
            mood: mood
        }

        saveJournalEntry(newEntry)
    }
})

export const entriesHTML = (entry) => {
    
    eventHub.innerHTML = `
        <section id="entry--id" class="journalEntry">${entry.id}</section>
        <section id="entry--date"  class="journalEntry">${entry.date}
            <input class="edit_button" type="submit" value="edit">
            <input class="delete_button" type="submit" value="delete">
        </section>
        <section id="entry--concept" class="journalEntry">${entry.concept}</section>
        <section id="entry--description" class="journalEntry">${entry.description}</section>
        <section id="entry--mood" class="journalEntry">${entry.mood}</section>
    `
}