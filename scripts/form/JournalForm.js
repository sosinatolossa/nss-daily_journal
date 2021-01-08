import { saveJournalEntry } from "../JournalDataProvider.js"

const eventHub = document.querySelector("#submit_button")

export const JournalFormComponent = () => {}

eventHub.addEventListener("click", event => {
    if (event.target.id === "submit_button") {
        const date = document.querySelector("#entry--date").value
        const concept = document.querySelector("#entry--concept").value
        const description = document.querySelector("#entry--description").value
        const mood = document.querySelector("#entry--mood").value

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